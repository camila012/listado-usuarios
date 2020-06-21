// comentarios

function inicializarPaginaComentarios () {
  // validar
  let formulario = document.getElementsByName('formulario')[0];
  
  let validarEmail = function(){
    if (!formulario.email.value) {
      alert('Completa Email')
      return false
    }
    return true
  }
  
  let validarCiudad = function() {
    if (!formulario.ciudad.value) {
      alert('Completa Ciudad')
      return false
    }
    return true
  }
  
  let validarComentario = function(){
    if (!formulario.comentario.value) {
      alert('Completa Comentario');
      return false
    }
    return true
  }
  
  // al dar click valida
  let validar = function(){
    if(
      validarEmail() &&
      validarCiudad() &&
      validarComentario()
      ) {
        return true
      }
      return false
    }
    
    // funcion de enviar formulario
    let enviarFormulario = function(e) {
      e.preventDefault();
      if(validar()) {
        
        fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
          email: formulario.email.value,
          ciudad: formulario.ciudad.value,
          body: formulario.comentario.value,
          postId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res => {
        animacion.fire({
          icon: 'success',
          title: 'ENVIADO'
        })
        // mostrar en la consola lo que se envia
        console.log(res)
      })
      .catch(error => {
        animacion.fire({
          icon: 'danger',
          title: 'ERROR'
        })
        // mostrar error
        console.log(error);
      })
    }
  }
  
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
  
  formulario.addEventListener("submit", enviarFormulario);
  
}

inicializarPaginaComentarios()
