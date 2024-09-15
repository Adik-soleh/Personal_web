const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const { title } = require('process');
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./views"))


app.use("/assets", express.static(path.join(__dirname, "assets")))

app.use(express.urlencoded({extended: true}));

// routing
app.get('/', home);
app.get('/project', project)
app.get('/add-project', addProject)
app.get('/testimonial', testi)
app.get("/project/details/:id", detail);
app.get('/contac', contacMe);
app.get('/crate-blog', createBlog)


const blog =[]

function home(req, res) {
  res.render('index')
}

function project(req, res) {
  res.render('project', {blog},)
}

function addProject(req, res) {
  res.render('add-project')
}
function createBlog(req, res) {
  res.render('add-project')
}


app.post("/add-project", (req, res) => {
  const {title, content, sDate, eDate, Cbx1, Cbx2, Cbx3, Cbx4} = req.body;
  
  const data = {
    title,
    content,
    sDate,
    eDate,
    Cbx1,
    Cbx2,
    Cbx3,
    Cbx4,
    image:"",
  };
  
  blog.unshift(data);
  console.log("berhasil ambil data: ",blog);
  
})


function testi(req, res) {
  res.render('testimonial')
}


function detail(req, res) {
  res.render('details')
}

function contacMe(req, res) {
  res.render('contac')
}




app.listen(port, () => {
  console.log(`Server berjalan di port ${port} 😁😁`)
})