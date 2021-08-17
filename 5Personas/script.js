// 3. Se debe realizar un algotitmo donde se pueda ingresar la edad
// de 5 personas, este debe retornar una promesa
// resuelta -> si todos los integrantes son de mas de 18 años
// rechazada -> si almenos 1 de los integrantes es menor de 18 años
function num(){
let arrayPersona = [
  document.getElementById("persona1").value,//1
  document.getElementById("persona2").value,//2
  document.getElementById("persona3").value,//3
  document.getElementById("persona4").value,//4
  document.getElementById("persona5").value//5
];
const prom = new Promise(function (resolve, reject) {
  for (let i = 0 ; i < arrayPersona.length; i++) {
      if(arrayPersona[i]>=18){
        reject(`Una de las personas no es mayor de edad`) 
           
        // mens1 = `<h1 class="text-center text-danger">Una de las personas no es mayor de edad <br> No pueden entar</h1>`
        // document.getElementById("mensContainer").innerHTML = mens1
      }else{
        resolve(`Todas las personas son mayores de edad`)  
        //   mens2 = `<h1 class="text-center text-light">Todas las personas son mayores de edad <br> Pueden entar</h1>`
        // document.getElementById("mensContainer").innerHTML = mens2
      }
  }
});
prom().then(console.log(resolve))
.catch(console.log(reject))
}
