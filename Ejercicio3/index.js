console.log("hola")
//1. Guardar una referencia a las etiquetas html en JavaScript

var domMouseX = document.getElementById("coordX");
var domMouseY = document.getElementById("coordY");

var mouseX=0;
var mouseY=0;

console.log(domMouseX);
console.log(domMouseY);

//2.Definir nuestra funcion para imprimir coordenandas
function printCoords(mouseData){
  //recibir las coordenadas del mouse
 console.log(mouseData.clientX);
  console.log(mouseData.clientY);
  //asignar al elemento HTML
  mouseX=mouseData.clientX;
  mouseY=mouseData.clientY;
  
  domMouseX.innerText = mouseData.clientX;
  domMouseX.innerText = `Mouse X:${mouseData.clientX}`;
  
  domMouseY.innerText = mouseData.clientY;
  domMouseY.innerText = `Mouse Y:${mouseData.clientY}`;
  
  //Accesar a propiedades de css
  domMouseX.style.transform=`translate(${mouseX}px, ${mouseY}px)`;
  
}

//3.Escuchar el movimiento del mouse del usuario
document.addEventListener("mousemove", printCoords);
  