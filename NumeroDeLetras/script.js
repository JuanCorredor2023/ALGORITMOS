function contarLetras() {
    let vacio = ""
    document.getElementById("numContainer").innerHTML = vacio;
  let str = document.getElementById("myWord").value;
  let caracteres = [...new Set(str.toLowerCase())];

  for (let i = 0; i < caracteres.length; i++) {
    let arreglo = [];
    str.split("").map((n) => {
      if (n.toLowerCase() === caracteres[i]) {
        arreglo.push(n);
      }
    });
    const contenido = `<div class="container p-2 bg-light text-center">
       <p>La cantidad de ${caracteres[i]} es: ${arreglo.length}<br></p>
     </div>`;
    let contenidoAlDiv = contenido;

    document.getElementById("numContainer").innerHTML += contenidoAlDiv;
  }
}

// document.getElementById("numContainer").innerHTML = contenidoAlDiv
