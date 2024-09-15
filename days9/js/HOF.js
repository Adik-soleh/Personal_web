//Testimonial Rating menggunakan Higher Order Function

const CheckRating = [
  {
    autor : "- Naruto",
    quote : "Prinsip keadilanku adalah memberi makanan pada yang kelaparan.",
    image : "https://www.pngitem.com/pimgs/m/418-4181169_thumb-image-naruto-jpg-hd-png-download.png",
    rating : 5
  },
  {
    autor : "- Sasuke",
    quote : "Aku tidak peduli, walaupun aku harus mati untuk mengejar impianku(ngoding)",
    image : "https://i.pinimg.com/736x/35/e6/be/35e6be85791848115519fc6566924c1a.jpg",
    rating : 4
  },
  {
    autor : "- Sakura",
    quote : "Jangan pernah meremahkan diri sendiri, karena diri sendiri ada kelebihan tersendiri.",
    image : "https://i.pinimg.com/736x/73/83/41/738341e4fe7280f80a6cca75e626797b.jpg",
    rating : 1
  },
  {
    autor : "- Kakashi",
    quote : "Ketika dunia jahat kepadamu, maka berusahalah untuk menghadapinya, karena tidak ada orang yang membantumu jika kau tidak berusaha.",
    image : "https://i.pinimg.com/474x/8b/bf/c3/8bbfc35c176cf377d2f350db6a9af56d.jpg",
    rating : 2
  },
  {
    autor : "- Madara Uchiha",
    quote : "Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan",
    image : "https://i.pinimg.com/736x/09/2b/63/092b63e2cfe5db87a5249aa7cff0d769.jpg",
    rating : 4
  },
  {
    autor : "- Obito",
    quote : "Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan",
    image : "https://i.pinimg.com/564x/c1/2e/b1/c12eb1d17a49ff423e92dd6059a18972.jpg",
    rating : 3
  },
  {
    autor : "- Boruto",
    quote : "Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan",
    image : "https://i.pinimg.com/736x/9e/bf/f4/9ebff459d6b33ceffef49bddd97c4fcc.jpg",
    rating : 5
  }


]


function allRate(){
  let ratingTestimoni = ""

 CheckRating.forEach(ratingCard => ratingTestimoni += `
    <div class="card">
      <img src="${ratingCard.image}" alt="Avatar" style="width:100%">
      <div class="container">
        <i>"${ratingCard.quote}"</i> 
        <div class="starAutor">
        <h4><b>${ratingCard.autor}</b></h4> 
        <span><i class="fa fa-star" aria-hidden="true">${ratingCard.rating}</i></span>
        </div>
      </div>
      </div>`
  )
  document.getElementById('container-card').innerHTML = ratingTestimoni;
}
// menampilkan defaultnya
allRate();

function StarRating(Star){
  let filterRate = ""

CheckRating.filter(star => star.rating === Star)

  .forEach(ratingCard => filterRate += `
    <div class="card">
      <img src="${ratingCard.image}" alt="Avatar" style="width:100%">
      <div class="container">
        <i>"${ratingCard.quote}"</i> 
        <div class="starAutor">
        <h4><b>${ratingCard.autor}</b></h4> 
        <span><i class="fa fa-star" aria-hidden="true">${ratingCard.rating}</i></span>
        </div>
      </div>
      </div>`
      )
  document.getElementById('container-card').innerHTML = filterRate;
}
