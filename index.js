
// Llamado de la API
async function listaUsuarios() 
{
  
  let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  
  let data = await response.json()
  return data;
  
}

// Lo que se muestra en la pagina 
function informacionUsuario () {
  
  listaUsuarios()
  .then(data => {
    
    for (let i = 0; i < data.length; i++) {
      const nuevoElementoUsuario = document.createElement('div')
      nuevoElementoUsuario.innerHTML = crearElementoUsuario(data[i])
      document.getElementById('listaDeUsuarios').appendChild(nuevoElementoUsuario)
    }
    
    //para ver en la consola la informacion de la API
    console.log(data)
  })
}

function crearElementoUsuario (usuario) {
  return `
  <a class="list-group-item list-group-item-action flex-column align-items-start">
  <h5 class="mb-1">${usuario.name}</h5>
  <p class="mb-1">${usuario.address.city},${usuario.address.suite},${usuario.address.street}</p>
  <p>${usuario.phone}</p>
  </a>
  `
}

informacionUsuario()






