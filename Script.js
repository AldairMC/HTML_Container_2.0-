function ejecuta(){

  /*document.getElementsByTagName("p")[0].onclick=saludo; */
  document.getElemntsById("p").onclick=saludo;


}

function saludo() {

alert ("que hay perro");

}

window.onload=ejecuta;
