const express = require('express');
const app = express();
const path = require("path");
const config = require("./config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);
const bcrypt = require('bcrypt');
const model = require("./models").blogs;
const userModel = require("./models").user;
const upload = require("./midelware/upload");
const session = require('express-session');
const flash = require("express-flash");
const port = 4000;


// Mengatur view engine dan folder views
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

// Static files
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));


app.use(flash());

// Autentikasi
app.use(session({
  name: "My_session",
  secret: "A7Ve6dJ3y6",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 172800000
  }
}));

// route app
app.get('/', home);
app.get('/project', project);
app.post('/project');
app.post('/add-project', upload.single("image"), addProject);
app.get('/delete-project/:id', deleteProject);
app.get('/edit-project/:id', editProject);
app.post('/edit-project/:id', upload.single("image"), edit);
app.get('/testimonial', testi);
app.get('/details/:id', detail);
app.get('/contac', contacMe);
app.get('/add-project', createBlog);
app.get('/register', registerVw);
app.get('/login', loginVw);
app.post('/register', register);
app.post('/login', login);

// Pegistrasi View
function registerVw(req, res) {
  const data = {
    message: req.flash("message")
  }
  console.log(data);

  res.render('register', data);
}

// User Registrasi
async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // Simpan ke database
    if (name && email && password) {
      await userModel.create({
        name: name,
        email: email,
        password: hashPassword
      });
      req.flash("valid", ["register berhasil :)"]);
      res.redirect('/login');
    }else{
      req.flash("danger", ["error", "error", "kolom tidak oleh kosong!"]);
    res.redirect('/register');
    }
  } catch (error) {
    req.flash("danger", ["error", "error", "akun sudah ada"]);
    res.redirect('/register');
  }
}

// Login view
function loginVw(req, res) {
  res.render('login');
}

// Autentikasi login
async function login(req, res) {
  try {
    const { email, password } = req.body;
    // Mencari pengguna berdasarkan email
    const user = await userModel.findOne({
      where: { email: email }
    });

    // Jika pengguna tidak ditemukan
    if (!email) {
      req.flash("danger", ["error", "error", "akun tidak di temukan!"]);
      return res.redirect('/login');
    }
    // Valiadsi password
    const validPassword = await bcrypt.compare(password, user.password);

    // Jika password tidak valid
    if (!validPassword) {
      req.flash("danger", ["error", "error", "password / email salah !"]);
      return res.redirect('/login');
    }

    // Menyimpan data pengguna ke sesi
    req.session.user = user;
    req.flash('valid', "Login berhasil");
    res.redirect('/');
  } catch (error) {
    req.flash('danger', "Masalah saat login!");
    res.redirect('/login');
  }
}


// Delete session
app.get('/logout', function (req, res, next) {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/login');
      }
    });
  }
});

// Addproject page
function addProject(req, res) {
  res.render('add-project');
}

// Add-Project
function createBlog(req, res) {
  const user = req.session.user;
  if (!user) {
    return res.redirect("/login");
  }
  res.render('add-project');
}

// Date
function Ldate(Fdate, LastD) {
  let timeNow = new Date(Fdate);
  let PostTime = new Date(LastD);
  let Time = Math.abs(timeNow - PostTime);

  let seconds = Math.floor(Time / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(weeks / 4);
  let years = Math.floor(months / 12);

  if (Fdate > LastD) {
    return console.log("WARNING ", "please insert an First Date > Last Date !!", "warning");
  }

  if (days === 1 && hours === 0) {
    return `${minutes} menit`;
  } else if (days === 1) {
    return `${hours} jam`;
  } else if (days < 1) {
    if (hours === 1) {
      return `${hours} jam`;
    } else {
      return `${hours} jam ${minutes % 60} menit`;
    }
  } else if (days <= 7) {
    return `${days} hari`;
  } else if (days <= 30) {
    return `${weeks} minggu`;
  } else if (days <= 365) {
    return `${months} bulan`;
  } else {
    return `${years} tahun`;
  }
}

// AddNew Project
async function addProject(req, res) {
  const { title, content, Cbx1, Cbx2, Cbx3, Cbx4, sDate, eDate } = req.body;
  const imagePath = req.file.path;

  const userId = req.session.user.id;

  // simpan ke DB
  await model.create({
    title: title,
    content: content,
    sDate: sDate,
    eDate: eDate,
    image: imagePath,
    userId: userId,
    checkBox1: Cbx1,
    checkBox2: Cbx2,
    checkBox3: Cbx3,
    checkBox4: Cbx4,
    duration: Ldate(sDate, eDate)
  });
  res.redirect("/project");
}


// Home Page
async function home(req, res) {
  const query = 'SELECT public.blogs.*, public.users.name FROM public.blogs INNER JOIN public.users ON public.blogs."userId" = public.users.id';
  const result = await sequelize.query(query, { type: QueryTypes.SELECT });

  const user = req.session.user;
  if (!user) {
    return res.redirect("/login");
  }
  res.render('index',{ blog: result, user });
}

// Project page
async function project(req, res) {
  const query = 'SELECT public.blogs.*, public.users.name FROM public.blogs INNER JOIN public.users ON public.blogs."userId" = public.users.id';
  const result = await sequelize.query(query, { type: QueryTypes.SELECT });

  const user = req.session.user;
  res.render("project", { blog: result, user });
}

// Delete project by id
async function deleteProject(req, res) {
  const { id } = req.params;

  let result = await model.findOne({
    where: {
      id: id,
    },
  });

  if (!result) return res.render("error");
  
  await model.destroy({
  where: {
      id: id,
    }
  });

req.flash("danger", ["error", "error", "kolom tidak oleh kosong!"]);
res.redirect("/project");

}

// Edit page
async function edit(req, res) {
  const { id } = req.params;
  const { title, content, sDate, eDate, Cbx1, Cbx2, Cbx3, Cbx4 } = req.body;

  const imagePath = req.file.path;

  const blog = await model.findOne({
    where: {
      id: id,
    },
  });

  if (!blog) return res.render("error");

  // Memperbarui data blog
  blog.title = title;
  blog.content = content;
  blog.image = imagePath;
  blog.sDate = sDate;
  blog.eDate = eDate;
  blog.checkBox1 = Cbx1 ? Cbx1 : "";
  blog.checkBox2 = Cbx2 ? Cbx2 : "";
  blog.checkBox3 = Cbx3 ? Cbx3 : "";
  blog.checkBox4 = Cbx4 ? Cbx4 : "";
  blog.duration = Ldate(sDate, eDate);

  await blog.save();

  res.redirect("/project");
}

// Edit view
async function editProject(req, res) {
  const { id } = req.params;

  const result = await model.findOne({
    where: {
      id: id,
    },
  });

  if (!result) return res.render("error");

  res.render("edit-project", { blog: result });
}

// Detail view
async function detail(req, res) {
  const { id } = req.params;

  const result = await model.findOne({
    where: {
      id: id,
    }
  });

  if (!result) return res.render("error");

  const user = req.session.user;
  res.render("details", { blog: result, user });
}

// Testimonial page
function testi(req, res) {
  res.render('testimonial');
}

// Contac Page
function contacMe(req, res) {
  res.render('contac');
}


app.listen(port, () => {
  console.log(`Server ready in port ${port}`);
});

module.exports = app;