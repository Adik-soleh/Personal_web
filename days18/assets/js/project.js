

//Buat array kosong
let Add =[];

const listP = (e) => {
    e.preventDefault();
    // Get value DOM
    let NameProject= document.getElementById('PName').value;
    let FirstD = document.getElementById('FDate').value;
    let LastD = document.getElementById('LDate').value;
    let Message = document.getElementById('TxtMsg').value;
    let CheckBox1 = document.getElementById('Cbx1').checked;
    let CheckBox2 = document.getElementById('Cbx2').checked;
    let CheckBox3 = document.getElementById('Cbx3').checked;
    let CheckBox4 = document.getElementById('Cbx4').checked;
    let files = document.getElementById('file').files;
    
// Periksa apakah file telah dipilih
    if (files.length > 0) {
        let file = files[0]; 
    // Cek apakah File yang diunggah adalah tipe gambar yang diizinkan (JPG, PNG, atau JPEG)
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        //jika yang di upload adalah tipe gambar  yang diizinkan maka lolos
        if (allowedTypes.includes(file.type)) {
            // blob 
        files = URL.createObjectURL(files[0])

            // buat object dari value yang telah diambil
                let listP = {
                    NameProject,
                    FirstD,
                    LastD,
                    Message,
                    files,
                    CheckBox1, 
                    CheckBox2, 
                    CheckBox3, 
                    CheckBox4 ,
                }
// push setiap object kedalam variabel kosong
        Add.push(listP);
    // panggil fungsi cards
        Cards();
        }else{
            // jika gagal lulus pengecekan maka akan menampilkan alert
            swal("WARNING ", "please insert an image with type PNG<JPG<JPEG", "warning")
        }
    }else{
                // jika ID files tidak di inputkan maka akan menampilkan
                swal("Good Bad ", "Please Input Your Image", "info");
    }
};

function Cards(){
     document.getElementById('container-card').innerHTML='';
    for(let i = 0; i < Add.length; i++){
        document.getElementById('container-card').innerHTML += `
        <div class="col">
        <div class="card" style="width: 100%;">
        <a href="profile.html"><img src="${Add[i].files}" class="card-img-top" alt="..."></a>
          <div class="card-body">
            <h5 class="card-title">${Add[i].NameProject}</h5>
            <h6 class="card-subtitle">Durasi :  ${Ldate(Add[i].FirstD,Add[i].LastD)}</h6>
            <p class="card-text">${Add[i].Message}</p>
            <div class="container text-center">
              <div class="row row-cols-auto">
                <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="Java">' : ''}</div>
                <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png" alt="Java">' : ''}</div>
                <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Java">' : ''}</div>
                <div class="col">${Add[i].CheckBox1 ? '<img class="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Java">' : ''}</div>
              </div>
            </div>
            <div class="d-flex justify-content-between update">
              <a href="#" class="btn btn-dark" >Update</a>
              <a href="#" class="btn btn-danger" >Delete</a>
            </div>
          </div>
        </div>
      </div>`
    }
}



// first date end last date

function Ldate(Fdate,LastD){
    let timeNow = new Date(Fdate);
    let PostTime = new Date(LastD);
    let Time =  Math.abs( timeNow - PostTime);

    let seconds = Math.floor(Time / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);
    let months = Math.floor(weeks / 4);
    let years = Math.floor(months / 12);
    

    if (Fdate > LastD) {
        return swal("WARNING ", "please insert an First Date > Last Date !!", "warning")
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
