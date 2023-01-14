
// Esta parte es la asignación de atajos para acceder a un elemento dentro del documento HTML
let tituloMsj = document.querySelector('#h1-mensaje');
let textoMsj = document.querySelector('#h2-mensaje');

// Acá creamos una función que asigna un valor ingresada por el usuario en el formulario a las variables, luego valida
// y finalmente reemplaza los textos internos del elemento en el documento HTML
let mostrarMensaje = () => { 
    const nombre = document.getElementById('nombre-usuario').value;
    const correo = document.getElementById('correo-usuario').value;



//  Esta condicional nos dice que si, una vez ejecutada la función, las variables nombre y correo se encuentran vacías
//  nos devuelva un mensaje de error

  if (nombre != '' && correo != '' ){
    tituloMsj.innerHTML = `Estimado(a) ${nombre}, gracias por comunicarte con nosotros.`;
    textoMsj.innerHTML = `Nos comunicaremos contigo a la brevedad a tu email: ${correo}.`;
  } else {
    textoMsj.innerHTML = "Debe ingresar un nombre y correo válidos.";
  }
}

//Función para mostrar la hora en el footer
let fecha = document.getElementById('fecha');
setInterval(function () {
    var data = new Date();
    fecha.innerHTML = data.toLocaleTimeString();
},1000);


//Funcion para calificar página
let calificarPagina = (opcion) => {
  for (let i=0;i<opcion;i++){
    $("#estrella"+i).removeClass("fa-regular");
    $("#estrella"+i).addClass("fa-solid"); 
    console.log(i);  
  } 
} 