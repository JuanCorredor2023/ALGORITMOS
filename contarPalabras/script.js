function WordCount()  {
    let vacio = ""
    document.getElementById("numContainer").innerHTML = vacio;
    let str = document.getElementById("myWord").value;
    let totalSoFar = 0;
    for (let i = 0; i < str.length; i++){
      if (str[i] === " ") { 
        totalSoFar += +1; 
    }
}
    totalSoFar += 1; 
    const contenido = `<div class="container p-2 bg-light text-center">
    <h1>La cantidad de palabras es: ${totalSoFar}</h1>
  </div>`;
    let contenidoAlDiv = contenido;

    document.getElementById("numContainer").innerHTML += contenidoAlDiv;
}
