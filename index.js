
const nombreUno = document.getElementById('nombreUno');
const direccionUno = document.getElementById('direccionUno');
const numeroUno = document.getElementById('numeroUno');
const nombreDos = document.getElementById('nombreDos');
const direccionDos = document.getElementById('direccionDos');
const numeroDos = document.getElementById('numeroDos');
const nombreTres = document.getElementById('nombreTres');
const direccionTres = document.getElementById('direccionTres');
const numeroTres = document.getElementById('numeroTres');


//Llamado de la API
async function listaUsuarios() 
{
  
  let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  
  let data = await response.json()
  return data;
  
}

//Lo que se muestra en la pagina 
function informacionUsuario () {
  
  listaUsuarios('LISTADO')
  .then(data => {
    
    nombreUno.innerHTML = `${data[0].name}`
    direccionUno.innerHTML = `${data[0].address.city},${data[1].address.suite},${data[0].address.street}`
    numeroUno.innerHTML = `${data[0].phone}`
    
    nombreDos.innerHTML = `${data[1].name}`
    direccionDos.innerHTML = `${data[1].address.city},${data[1].address.suite},${data[1].address.street}`
    numeroDos.innerHTML = `${data[1].phone}`
    
    nombreTres.innerHTML = `${data[3].name}`
    direccionTres.innerHTML = `${data[3].address.city},${data[1].address.suite},${data[3].address.street}`
    numeroTres.innerHTML = `${data[3].phone}`
    //para ver en la consola la informacion de la API
    console.log(data)
  })
  
  
  
}
informacionUsuario()


// comentarios

function enviarComentario () {


 // validar
  let formulario = document.getElementsByName('formulario')[0],
  elementos = formulario.elements;
  boton = document.getElementById('btn');

  let validarEmail = function(e){
    if (formulario.email.value == 0) {
      alert('Completa Email')
      e.preventDefault();
    }
  }

  let validarCiudad = function(e) {
    if (formulario.ciudad.value[0]) {
    } else {
      alert('Completa Ciudad')
      e.preventDefault();
    }
      
  }

  let validarComentario = function(e){
 if (formulario.comentario.value) {
  alert('Completa Comentario');
  e.preventDefault();
  
}
  }

  // al dar click valida
  let validar = function(e){
    validarEmail(e);
    validarCiudad(e);
    validarComentario(e)
  }

  formulario.addEventListener("submit", validar);

  

  const animacion = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  animacion.fire({
    icon: 'success',
    title: 'ENVIANDO'
  })


}

enviarComentario()






