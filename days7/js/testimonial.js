class Testimoni {
    #quote = ""
    #image = ""
 
    constructor(quote,image){
       this.#quote = quote
        this.#image = image
       
    }
    get quote(){
      return this.#quote
    }
    get image(){
      return this.#image
    }
    get autor() {
      throw new Error('nama tidak boleh kosong')
    }
    get getHTML(){
      return `
      <div class="card">
      <img src="${this.image}" alt="Avatar" style="width:100%">
      <div class="container">
        <i>"${this.quote}"</i> 
        <h4><b>${this.autor}</b></h4> 
      </div>
      </div>
      `
    }
}
class testiRate extends Testimoni{
#autor = ""
constructor(autor,quote,image){
  super(quote,image)
  this.#autor = autor
}
get autor(){
  return "pengguna:" + this.#autor
}
}

class companyTest extends Testimoni{
  #company =""
  constructor(company,quote,image){
    super(quote,image)
    this.#company = company
  }

  get autor(){
    return "company:" + this.#company
  }
}
const rate1 = new testiRate("- itadori","baka baka","https://i.pinimg.com/originals/26/8c/f5/268cf53bcce09da03b7de864a636e774.jpg")
const reate2 = new testiRate('- gojo',"Kutukan terlahir dari hati manusia","https://i.pinimg.com/564x/e5/b1/65/e5b165832a3fcc5140b5ab510e7c1baa.jpg")
const rate3 = new companyTest("- Ryomen Sukuna","Aku memperingatkanmu bahwa tidak akan ada kesempatan kedua","https://i.pinimg.com/originals/ea/ee/09/eaee092fe4a970d277b05d325bcda353.jpg")


let testimonial = [rate1, reate2, rate3]
let getHTML = ""

for(let i = 0;i < testimonial.length; i++){
getHTML += testimonial[i].getHTML
}
document.getElementById('container-card').innerHTML = getHTML;
