const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const config = require("./config/config.json");
const { Sequelize } = require("sequelize");
const model = require("./models").blogs;

// Set up Sequelize
const sequelize = new Sequelize(config.development);

// Set view engine dan folder views
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

// Static files
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));

// Routing
app.get('/', home);
app.get('/project', project);
app.post('/project');
app.post('/add-project', addProject);
app.get('/delete-project/:id', deleteProject);
app.get('/edit-project/:id', editProject);
app.post('/edit-project/:id', edit);
app.get('/testimonial', testi);
app.get('/details/:id', detail);
app.get('/contac', contacMe);
app.get('/add-project', createBlog);

// Array kosong untuk blog
const blog = [];

// Function Definitions
function home(req, res) {
  res.render('index');
}

async function project(req, res) {
  const result = await model.findAll();
  res.render("project", { blog: result });
}

async function deleteProject(req, res) {
  const { id } = req.params;

  let result = await model.findOne({
    where: { id },
  });

  if (!result) return res.render("not-found");

  await model.destroy({
    where: { id },
  });
  res.redirect("/project");
}

function addProject(req, res) {
  res.render('add-project');
}

function createBlog(req, res) {
  res.render('add-project');
}

async function addProject(req, res) {
  const { title, content,image, Cbx1, Cbx2,Cbx3,Cbx4 } = req.body;
  await model.create({
    title,
    content,
    image: 
    "https://cdn.pixabay.com/photo/2022/05/17/21/41/naruto-7203817_1280.jpg",
    Cbx1:"https://static-00.iconduck.com/assets.00/java-icon-1511x2048-6ikx8301.png",
    

  });
  res.redirect("/project");
  
}

async function edit(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  const blog = await model.findOne({
    where: { id },
  });

  if (!blog) return res.render("not-found :(");

  blog.title = title;
  blog.content = content;

  await blog.save();
  res.redirect("/project");
}

async function editProject(req, res) {
  const { id } = req.params;

  const result = await model.findOne({
    where: { id },
  });

  if (!result) return res.render("halaman tidak di temukan");

  res.render("edit-project", { blog: result });
}

async function detail(req, res) {
  const { id } = req.params;

  const result = await model.findOne({
    where: { id },
  });

  if (!result) return res.render("halaman tidak di temukan :(");
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
  console.log(`Server berjalan di port ${port} 😁😁`);
});
