

//Buat array kosong
// let Add =[];

// const listP = (e) => {
//     e.preventDefault();
//     // Get value DOM
//     let NameProject= document.getElementById('PName').value;
//     let FirstD = document.getElementById('FDate').value;
//     let LastD = document.getElementById('LDate').value;
//     let Message = document.getElementById('TxtMsg').value;
//     let CheckBox1 = document.getElementById('Cbx1').checked;
//     let CheckBox2 = document.getElementById('Cbx2').checked;
//     let CheckBox3 = document.getElementById('Cbx3').checked;
//     let CheckBox4 = document.getElementById('Cbx4').checked;
//     let files = document.getElementById('file').files;
    
// // Periksa apakah file telah dipilih
//     if (files.length > 0) {
//         let file = files[0]; 
//     // Cek apakah File yang diunggah adalah tipe gambar yang diizinkan (JPG, PNG, atau JPEG)
//         const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//         //jika yang di upload adalah tipe gambar  yang diizinkan maka lolos
//         if (allowedTypes.includes(file.type)) {
//             // blob 
//         files = URL.createObjectURL(files[0])

//             // buat object dari value yang telah diambil
//                 let listP = {
//                     NameProject,
//                     FirstD,
//                     LastD,
//                     Message,
//                     files,
//                     CheckBox1, 
//                     CheckBox2, 
//                     CheckBox3, 
//                     CheckBox4 ,
//                 }
// // push setiap object kedalam variabel kosong
//         Add.push(listP);
//     // panggil fungsi cards
//         Cards();
//         }else{
//             // jika gagal lulus pengecekan maka akan menampilkan alert
//             swal("WARNING ", "please insert an image with type PNG<JPG<JPEG", "warning")
//         }
//     }else{
//                 // jika ID files tidak di inputkan maka akan menampilkan
//                 swal("Good Bad ", "Please Input Your Image", "info");
//     }
// };

// function Cards(){
//      document.getElementById('container-card').innerHTML='';
//     for(let i = 0; i < Add.length; i++){
//         document.getElementById('container-card').innerHTML += `
//         <div class="col">
//         <div class="card" style="width: 100%;">
//         <a href="profile.html"><img src="${Add[i].files}" class="card-img-top" alt="..."></a>
//           <div class="card-body">
//             <h5 class="card-title">${Add[i].NameProject}</h5>
//             <h6 class="card-subtitle">Durasi :  ${Ldate(Add[i].FirstD,Add[i].LastD)}</h6>
//             <p class="card-text">${Add[i].Message}</p>
//             <div class="container text-center">
//               <div class="row row-cols-auto">
//                 <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="Java">' : ''}</div>
//                 <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="Java">' : ''}</div>
//                 <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Java">' : ''}</div>
//                 <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Java">' : ''}</div>
//               </div>
//             </div>
//             <div class="d-flex justify-content-between update">
//               <a href="#" class="btn btn-dark" >Update</a>
//               <a href="#" class="btn btn-danger" >Delete</a>
//             </div>
//           </div>
//         </div>
//       </div>`
//     }
// }



// // first date end last date

// function Ldate(Fdate,LastD){
//     let timeNow = new Date(Fdate);
//     let PostTime = new Date(LastD);
//     let Time =  Math.abs( timeNow - PostTime);

//     let seconds = Math.floor(Time / 1000);
//     let minutes = Math.floor(seconds / 60);
//     let hours = Math.floor(minutes / 60);
//     let days = Math.floor(hours / 24);
//     let weeks = Math.floor(days / 7);
//     let months = Math.floor(weeks / 4);
//     let years = Math.floor(months / 12);
    

//     if (Fdate > LastD) {
//         return swal("WARNING ", "please insert an First Date > Last Date !!", "warning")
//     }
    
//     if (days === 1 && hours === 0) {
//         return `${minutes} menit`;
//     } else if (days === 1) {
//         return `${hours} jam`;
//     } else if (days < 1) {
//         if (hours === 1) {
//             return `${hours} jam`;
//         } else {
//             return `${hours} jam ${minutes % 60} menit`;
//         }
//     } else if (days <= 7) {
//         return `${days} hari`;
//     } else if (days <= 30) {
//         return `${weeks} minggu`;
//     } else if (days <= 365) {
//         return `${months} bulan`;
//     } else {
//         return `${years} tahun`;
//     }

// }


let a = document.getElementsByClassName('test')
function myFunction () {
    let b = confirm('apakah yakin ?')
    if(b == true){
        alert("oke di happus");
    }else{
        return b;   
    }
}




























// const express = require('express');
// const app = express();
// const path = require("path");
// const config = require("./config/config.json");
// const { Sequelize, QueryTypes } = require("sequelize");
// const sequelize = new Sequelize(config.development);
// const bcrypt = require('bcrypt');
// const model = require("./models").blogs;
// const userModel = require("./models").user;
// const flash = require("express-flash");
// const session = require('express-session');
// const port = 4000;
// const upload = require("./midelware/upload");
// const { title } = require('process');

 

// // Set view engine dan folder views
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "./views"));

// // Static files 
// app.use("/assets", express.static(path.join(__dirname, "assets")));
// app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

// // massage
// app.use(flash());

// // login session
// app.use(session({
//   name: "My_session",
//   secret: "A7Ve6dJ3y6",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 172800000
//   }
// }));

// // Router
// app.get('/', home);
// app.get('/project', project);
// app.post('/project');
// app.post('/add-project',upload.single("image"), addProject);
// app.get('/delete-project/:id', deleteProject);
// app.get('/edit-project/:id',editProject);
// app.post('/edit-project/:id', upload.single("image"),  edit);
// app.get('/testimonial', testi);
// app.get('/details/:id',detail);
// app.get('/contac', contacMe);
// app.get('/add-project', createBlog);
// app.get('/register', registerVw);
// app.get('/login', loginVw);
// app.post('/register', register);
// app.post('/login', login);

// // Array kosong untuk blog

// // Function Definitions
// function registerVw(req, res) {
//   res.render('register');
// }


// //Register 
// async function register(req, res) {
//   try {
//     const { name, email, password } = req.body;
//     // Authentication:
//     const saltRounds = 10;
//     const hashPassword = await bcrypt.hash(password, saltRounds);

//     await userModel.create({
//       name: name,
//       email: email,
//       password: hashPassword
//     });

//     req.flash("valid", "Register berhasil");
//     res.redirect('/login');
//   } catch (error) {
//     req.flash("danger", "Register gagal");
//     res.redirect('/register');
//   }
// }

// function loginVw(req, res) {
//   res.render('login');
// }


// // Login
// async function login(req, res) {
//   try {
//     const { email, password } = req.body;
//     const user = await userModel.findOne({
//       where: { email: email }
//     });

//     if (!user) {
//       req.flash('danger', "Email / Password salah!");
//       return res.redirect('/login');
//     }

//     const validPassword = await bcrypt.compare(password, user.password);

//     if (!validPassword) {
//       req.flash('danger', "Email / Password salah!");
//       return res.redirect('/login');
//     }

//     req.session.ids = user.id;
//     req.session.user = user;
//     req.flash('valid', "Login berhasil");
//     res.redirect('/');
//   } catch (error) {
//     req.flash('danger', "Masalah saat login!");
//     res.redirect('/');
//   }
// }


// // Logout
// app.get('/logout',  function (req, res, next)  {
//   if (req.session) {
//     req.session.destroy(function (err) {
//       if (err) {
//         return next(err);
//       } else {
//         return res.redirect('/login');
//       }
//     });
//   }
// });



// // Home
// function home(req, res) {
//   const user = req.session.user;
//   if(!user) {
//     return res.redirect("/login")
//   }
//   res.render('index', { user });
// }


// // project
// async function project(req, res) {
//   // const result = await model.findAll({
//   //   include : userModel
//   // });

//   const query = 'SELECT public.blogs.*, public.users.name FROM public.blogs INNER JOIN public.users ON public.blogs."userId" = public.users.id';
//   const result = await sequelize.query(query,{type: QueryTypes.SELECT});

//   console.log("isi reesult" , result);
  
//   const user = req.session.user;
//   const userid = req.session.ids;


//   const data = result.map((x)=>({
//    id: x.userId,
//    title: x.title
// }))
  
//   let sess = false;
//   for(let i = 0;i < data.length;i++){
//   if(userid == data[i].id){
//     sess = true;
   
//   }
// }
  
// console.log(data,sess);

  
//   res.render("project", {blog: result, user : sess});
 
// }

// // delete
// async function deleteProject(req, res) {
//   const { id } = req.params;

//   let result = await model.findOne({
//     where: { 
//       id: id,
//      },
//   });

//   if (!result) return res.render("error");

//   await model.destroy({
//     where: { 
//       id:id,
//      }
//   });

//   res.redirect("/project");
// }

// function addProject(req, res) {
//   res.render('add-project');
// }

// function createBlog(req, res) {
//   const user = req.session.user
//   if(!user) {
//     return res.redirect("/login")
//   }
//   res.render('add-project');
// }
// //DATE

// // first date end last date

// function Ldate(Fdate,LastD){
//   let timeNow = new Date(Fdate);
//   let PostTime = new Date(LastD);
//   let Time =  Math.abs( timeNow - PostTime);

//   let seconds = Math.floor(Time / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   let days = Math.floor(hours / 24);
//   let weeks = Math.floor(days / 7);
//   let months = Math.floor(weeks / 4);
//   let years = Math.floor(months / 12);
  

//   if (Fdate > LastD) {
//       return console.log("WARNING ", "please insert an First Date > Last Date !!", "warning")
//   }
  
//   if (days === 1 && hours === 0) {
//       return `${minutes} menit`;
//   } else if (days === 1) {
//       return `${hours} jam`;
//   } else if (days < 1) {
//       if (hours === 1) {
//           return `${hours} jam`;
//       } else {
//           return `${hours} jam ${minutes % 60} menit`;
//       }
//   } else if (days <= 7) {
//       return `${days} hari`;
//   } else if (days <= 30) {
//       return `${weeks} minggu`;
//   } else if (days <= 365) {
//       return `${months} bulan`;
//   } else {
//       return `${years} tahun`;
//   }

// }

// // Add project
// async function addProject(req, res) {
//   const { title, content ,Cbx1,Cbx2,Cbx3,Cbx4,sDate,eDate} = req.body;
//   const imagePath = req.file.path;

  
//  const userId = req.session.user.id;


//  console.log("data date:",typeof(data));
 

//   await model.create({
//     title : title,
//     content: content,
//     sDate : sDate,
//     eDate : eDate,
//     image : imagePath,
//     userId: userId,
//     checkBox1 : Cbx1,
//     checkBox2 : Cbx2,
//     checkBox3 : Cbx3,
//     checkBox4 : Cbx4,
//     duration : Ldate(sDate,eDate)

//   });
//   res.redirect("/project");
// }


// // edit
// async function edit(req, res) {
//   const { id } = req.params;
//   const { title, content, sDate, eDate,Cbx1,Cbx2,Cbx3,Cbx4} = req.body;
  
//   const imagePath = req.file.path;
  
//   console.log("ini :",Cbx1,Cbx2,Cbx3,Cbx4, Ldate(sDate,eDate));

// const blog = await model.findOne({
//     where: { 
//       id:id,
//      },
//   });

//   if (!blog) return res.render("error");

//   blog.title = title;
//   blog.content = content;
//   blog.image = imagePath;
//   blog.sDate = sDate;
//   blog.eDate = eDate;
//   blog.checkBox1 = Cbx1 ? Cbx1 :"",
//   blog.checkBox2 = Cbx2 ? Cbx2 :"",
//   blog.checkBox3 = Cbx3 ? Cbx3 :"",
//   blog.checkBox4 = Cbx4 ? Cbx4 :"",
//   blog.duration = Ldate(sDate,eDate)

//   await blog.save();

//   res.redirect("/project");
// }


// async function editProject(req, res) {
//   const { id } = req.params;
  
//   const result = await model.findOne({
//     where: { 
//       id: id,
//      },
//   });

//   if (!result) return res.render("error");

//   res.render("edit-project", { blog: result });
// }

// // Details
// async function detail(req, res) {
//   const { id } = req.params;

//   const result = await model.findOne({
//     where: { 
//       id:id,
//      }
//   });

//   if (!result) return res.render("error");

//   res.render("details", { blog: result });
// }

// // Testimoni
// function testi(req, res) {
//   res.render('testimonial');
// }

// function contacMe(req, res) {
//   res.render('contac');
// }

// // Start server
// app.listen(port, () => {
//   console.log(`Server ready in port ${port}`);
// });

// module.exports = app

