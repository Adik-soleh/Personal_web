




let FakeI =[];

const Blogs = (e) => {
    e.preventDefault();
    // ambil value dari ID yang ada di tag HTML
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
    let DbLog = {NameProject,
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
        FakeI.push(DbLog);
    // panggil fungsi cards
        Cards();
        }else{
            // jika gagal lulus pengecekan maka akan menampilkan alert
        alert('unggah tipe gambar yang diizinkan (JPG, PNG, atau JPEG)!!')
        }
    }else{
                // jika ID files tidak di inputkan maka akan menampilkan
        alert('Isi gambar terlebih dahulu !!!')
    }
};

function Cards(){
     document.getElementById('container-card').innerHTML='';
    for(let i = 0; i < FakeI.length; i++){
        document.getElementById('container-card').innerHTML += `
            <div class="cards">
            <img src="${FakeI[i].files}" alt="" class="img-pp">
                    <div class="card-name">
                  <h3>${FakeI[i].NameProject}</h3>
                        <p>durasi : ${Ldate(FakeI[i].FirstD,FakeI[i].LastD)}</p>
                        <p>${FakeI[i].Message}</p>
                        <div class="favicon-project">
                        <a href="">  ${FakeI[i].CheckBox1 ? '<img src="image/icons8-javascript-48.png" alt="JavaScript">' : ''}</a>
                        <a href=""> ${FakeI[i].CheckBox2 ? '<img src="image/ava-48.png" alt="Java">' : ''}</a>
                        <a href="">   ${FakeI[i].CheckBox3 ? '<img src="image/golang-48.png" alt="Golang">' : ''}</a>
                        <a href=""> ${FakeI[i].CheckBox4 ? '<img src="image/python-48.png" alt="Python">' : ''}</a>
                        </div>
                    </div>
                    <div class="btn-edit">
                        <button type="button">edit</button>
                        <button type="reset">delete</button>
                    </div>
            </div>`


//Details
        
        const detail = document.getElementById('container-card');
detail.addEventListener('click', function(){
    const details = document.querySelectorAll('#details');
details[0].innerHTML =`
    <section>
        <h1>${FakeI[i].NameProject}</h1>
        <div class="container">
            <div class="img">
                <img src="${FakeI[i].files}" alt="">
            </div>
            <div class="date">
                <div class="duration">
                    <h3>Duration</h3>
                    <ul>
                        <li><img src="image/icons8-date-48.png" alt=""> ${Ldate(FakeI[i].FirstD,FakeI[i].LastD)}</li>
                        <li><img src="image/icons8-delivery-time-48.png" alt="">${time()}</li>
                    </ul>
                </div>
                <div class="tech">
                    <h3>Technologies</h3>
                    <ul>
                        <li> ${FakeI[i].CheckBox1 ? '<img src="image/icons8-javascript-48.png" alt="JavaScript">' : ''}</li>
                        <li> ${FakeI[i].CheckBox2 ? '<img src="image/ava-48.png" alt="Java">' : ''}</li>
                        <li> ${FakeI[i].CheckBox3 ? '<img src="image/golang-48.png" alt="Golang">' : ''}</li>
                        <li>${FakeI[i].CheckBox4 ? '<img src="image/python-48.png" alt="Python">' : ''}</li>
                    </ul>
                </div>
            </div>
  
        </div>
        <article>
        ${FakeI[i].Message}
        </article>
    </section>
    `
})

    }

    
}
//end details


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
        return "Tanggal P0st Tidak Falid";
    }
    
    if (days === 1 && hours === 0) {
        return `${minutes} minutes`;
    } else if (days === 1) {
        return `${hours} hours`;
    } else if (days < 1) {
        if (hours === 1) {
            return `${hours} hour`;
        } else {
            return `${hours} hour ${minutes % 60} minute`;
        }
    } else if (days <= 7) {
        return `${days} day`;
    } else if (days <= 30) {
        return `${weeks} week`;
    } else if (days <= 365) {
        return `${months} month`;
    } else {
        return `${years} year`;
    }

}

function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
   return `${h} jam`
}








