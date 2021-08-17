// // 3. Se debe realizar un algotitmo donde se pueda ingresar la edad
// // de 5 personas, este debe retornar una promesa
// // resuelta -> si todos los integrantes son de mas de 18 años
// // rechazada -> si almenos 1 de los integrantes es menor de 18 años
// function num(){
// let arrayPersona = [
//   document.getElementById("persona1").value,//1
//   document.getElementById("persona2").value,//2
//   document.getElementById("persona3").value,//3
//   document.getElementById("persona4").value,//4
//   document.getElementById("persona5").value//5
// ];
// const prom = new Promise(function (resolve, reject) {
//   for (let i = 0 ; i < arrayPersona.length; i++) {
//       if(arrayPersona[i]>=18){
//         reject(`Una de las personas no es mayor de edad`) 
           
//         // mens1 = `<h1 class="text-center text-danger">Una de las personas no es mayor de edad <br> No pueden entar</h1>`
//         // document.getElementById("mensContainer").innerHTML = mens1
//       }else{
//         resolve(`Todas las personas son mayores de edad`)  
//         //   mens2 = `<h1 class="text-center text-light">Todas las personas son mayores de edad <br> Pueden entar</h1>`
//         // document.getElementById("mensContainer").innerHTML = mens2
//       }
//   }
// });
// prom().then(console.log(resolve))
// .catch(console.log(reject))
// }
function getAges() {
  //Recoleccion de datos y asignacion en variables
  let age1 = parseInt(document.getElementById(`persona1`).value);
  let age2 = parseInt(document.getElementById(`persona2`).value);
  let age3 = parseInt(document.getElementById(`persona3`).value);
  let age4 = parseInt(document.getElementById(`persona4`).value);
  let age5 = parseInt(document.getElementById(`persona5`).value);

  // Arreglo que guarda todas las edades
  var total = [age1, age2, age3, age4, age5];
  console.log(total);

  // verificar si todos estan llenos
  let isFull;
  if (
    isNaN(total[0]) ||
    isNaN(total[1]) ||
    isNaN(total[2]) ||
    isNaN(total[3]) ||
    isNaN(total[4])
  ) {
    isFull = false;
  } else {
    isFull = true;
  }

  if (isFull === true) {
    const myPromise = new Promise(function (resolve, reject) {
      // verificar si todos son mayores a 18
      if (
        total[0] < 18 ||
        total[1] < 18 ||
        total[2] < 18 ||
        total[3] < 18 ||
        total[4] < 18
      ) {
        // Si alguno de las edades es menor a 18, rechaza la promesa
        reject();
      } else {
        // Si ninguna de las edades es menor a 18 años, resuleve la promesa
        resolve();
      }

      console.log(total2);
    });
    myPromise
      .then(function (value) {
        alert("Promesa Resuelta, todos los integrantes son mayores a 18 años.");
      })
      .catch(function (error) {
        alert(
          "Promesa Rechazada, uno o más integrantes son menores a 18 años."
        );
      });
  } else {
    alert(`Error. Por favor rellene todos los campos.`);
  }
}