const express = require('express');
const app = express();
const path = require("path");
const config = require("../config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);
const bcrypt = require('bcrypt');
const model = require("../models").blogs;
const userModel = require("../models").user;
const flash = require("express-flash");
const session = require('express-session');
const port = 3001;

// Set up Sequelize
 

// Set view engine dan folder views
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

// Static files 
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));

// Munculkan alert dengan flash saat user berhasil login
app.use(flash());

// Atur masa berlaku login
app.use(session({
  name: "My_session",
  secret: "A7Ve6dJ3y6",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 172800000
  }
}));

// Routes
app.get('/', home);
app.get('/project', project);
app.post('/project');

app.get('/delete-project/:id', deleteProject);
app.get('/edit-project/:id', editProject);
app.post('/edit-project/:id', edit);
app.get('/testimonial', testi);
app.get('/details/:id', detail);
app.get('/contac', contacMe);
app.get('/add-project', createBlog);

app.get('/register', registerVw);
app.get('/login', loginVw);

app.post('/register', register);
app.post('/login', login);

// Array kosong untuk blog
const blog = [];

// Function Definitions
function registerVw(req, res) {
  res.render('register');
}

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    // Authentication:
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    await userModel.create({
      name: name,
      email: email,
      password: hashPassword
    });

    req.flash("valid", "Register berhasil");
    res.redirect('/login');
  } catch (error) {
    req.flash("danger", "Register gagal");
    res.redirect('/register');
  }
}

function loginVw(req, res) {
  res.render('login');
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({
      where: { email: email }
    });

    if (!user) {
      req.flash('danger', "Email / Password salah!");
      return res.redirect('/login');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      req.flash('danger', "Email / Password salah!");
      return res.redirect('/login');
    }

    req.session.user = user;
    req.flash('valid', "Login berhasil");
    res.redirect('/');
  } catch (error) {
    req.flash('danger', "Masalah saat login!");
    res.redirect('/');
  }
}

function home(req, res) {
  const user = req.session.user;
  res.render('index', { user });
}

async function project(req, res) {
  // const result = await model.findAll({
  //   include : userModel
  // });
  const query = 'SELECT public.blogs.*, public.users.name FROM public.blogs INNER JOIN public.users ON public.blogs."userId" = public.users.id';
  const result = await sequelize.query(query,{type: QueryTypes.SELECT});

  console.log("isi reesult" , result);
  
  const user = req.session.user;
  res.render("project", { blog: result, user });
 
}

// CRUD
async function deleteProject(req, res) {
  const { id } = req.params;

  let result = await model.findOne({
    where: { id }
  });

  if (!result) return res.render("error");

  await model.destroy({
    where: { id }
  });

  res.redirect("/project");
}

function addProject(req, res) {
  res.render('add-project');
}

function createBlog(req, res) {
  res.render('add-project');
}

const multer = require('multer');



// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Store the images in 'uploads/' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Create a unique file name
    
  }
  
});


// Initialize multer
const upload = multer({ storage: storage });

// Function to add a project with an image
async function addProject(req, res) {
  const { title, content } = req.body;
  const image = req.file; // Get image data from multer

  
  if (!image) {
    req.flash('danger', "Email / Password salah!");
      return res.redirect('/add-project');
  }

  const imagePath = `/uploads/${image.filename}`; // Save the file path to the database

  try {
    // Save the project details and the image path to the database
    await model.create({
      title,
      content,
      Image: imagePath
    });
    console.log('isi gambar', imagePath);
    
    // Redirect after successfully adding the project
    res.redirect('/project');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding project');
  }
  
}

// In your route file
app.post('/add-project', upload.single('image'), addProject);



async function edit(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  const blog = await model.findOne({
    where: { id }
  });

  if (!blog) return res.render("error");

  blog.title = title;
  blog.content = content;
  await blog.save();

  res.redirect("/project");
}


async function editProject(req, res) {
  const { id } = req.params;

  const result = await model.findOne({
    where: { id }
  });

  if (!result) return res.render("error");

  res.render("edit-project", { blog: result });
}

async function detail(req, res) {
  const { id } = req.params;

  const result = await model.findOne({
    where: { id }
  });

  if (!result) return res.render("error");

  res.render("details", { blog: result });
}

function testi(req, res) {
  res.render('testimonial');
}

function contacMe(req, res) {
  res.render('contac');
}

// Start server
app.listen(port, () => {
  console.log(`Server ready in port ${port}`);
});

module.exports = app