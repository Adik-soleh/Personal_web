const promises = new Promise((rsv,Rjc ) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET','https://api.npoint.io/838e364241be4658998c',true)

    xhr.onload = () =>{
    // Http req
    if(xhr.status === 200){
        rsv(JSON.parse(xhr.responseText))
    }else if(xhr.status === 400){
        Rjc("error Request :(")
    }
    }
    xhr.onerror = () => {
    Rjc("NetWork Error")
    }
    xhr.send()
    
})




let CheckRating = []

async function getData (){
        try{
    const result = await promises
    CheckRating = result
    allRate()
        }catch(error){
            console.log(error)
        }
    }

  // get data dari fungsi yg sudah di buat
  getData()
  //Show all
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

  //cek semua rating
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
  