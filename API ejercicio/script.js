// fetch


function tarjetas(){
    let vacio = ""
    document.getElementById('cardContainer').innerHTML = vacio
    let numeros = document.getElementById("numCharacters").value;
    if(numeros === "0" || numeros === "" || isNaN(numeros)){
        alert("Error: No es valido")
    }else{
    for (let i = 1; i<=numeros; i++){
        
        let url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${i}`
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => print(data))
        .catch((err) => console.log(err))
    
        const print = (data)=>{
            let card = `<div class="card" style="width: 18rem;">
            <img src="${data[0].image}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${data[0].character}</p>
              <p><b>${data[0].quote}</b></p>
            </div>
          </div>`
          
          document.getElementById('cardContainer').innerHTML += card
            }
    
        }
    }
    }