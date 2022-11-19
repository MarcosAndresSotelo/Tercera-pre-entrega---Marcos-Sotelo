
// REGISTRO DE USUARIO
let botonEnviar = document.getElementById('botonEnviar')
let nombre = []
let email = []
let contrasena = []

function nuevoUsuario() {

  let nuevoNombre = document.getElementById('nombre').value
  let nuevoEmail = document.getElementById('email').value
  let nuevaContrasena = document.getElementById('contrasena').value

  nombre = nombre.concat(nuevoNombre)
  email = email.concat(nuevoEmail)
  contrasena = contrasena.concat(nuevaContrasena)


  console.log(nombre)
  console.log(email)
  console.log(contrasena)

  // guardar registro en localStoreage
  localStorage.setItem('nombreUsuario', nombre)
  localStorage.setItem('emailUsuario', email)
  localStorage.setItem('contrasenaUsuario', contrasena)
}


const imgProd = document.querySelector('.imgProd')
const nombreProd = document.querySelector('.nombreProd')
const cantidadProd = document.querySelector('.cantidadProd')
const precioProd = document.querySelector('.precioProd')



// PRODUCTOS
function productos(img, nombre, descripcion, precio, cantidad, id) {
  this.img = img;
  this.nombre = nombre
  this.descripcion = descripcion
  this.precio = precio
  this.cantidad = cantidad
  this.id = id
}

const producto1 = new productos(
  '../assets/img/livingcomedor/accesoriouno.jpg', 'Manopla', `Protege tus manos del calor mientras cocina con nuestro Set de Manopla. Se encuentra diseñado con un suave forro acolchado para su uso cómodo.`, 4500, 0, 1)
const producto2 = new productos(
  '../assets/img/livingcomedor/accesoriodos.jpg', 'Almohada', `Esta almohada es ideal para el apoyo de las diferentes zonas de la cabeza, hombres y cuello. Ofrece un soporte perfecto para todas las personas sin importar la posición en la que duermas.`, 4600, 0, 2)
const producto3 = new productos(
  '../assets/img/livingcomedor/manteluno.jpg', 'Mantel espampado', `Mantel rectangular estampado, compuesto por 100% poliéster. Estilo y diseño en tu mesa.`, 5200, 0, 3)
const producto4 = new productos(
  '../assets/img/livingcomedor/manteldos.jpg', 'Mantel liso', `Mantel rectangular liso, compuesto por puro algodón tusor. Estilo y diseño en tu mesa.`, 5500, 0, 4)
const producto5 = new productos(
  '../assets/img/livingcomedor/cortinauno.jpg', 'Cortina verde', `El black out textil es un tejido compuesto por 3 capas entrelazadas: una primera capa de tejido color, una capa de tejido negro en el medio y otra capa de tejido color en el reverso.`, 9500, 0, 5)
const producto6 = new productos(
  '../assets/img/livingcomedor/cortinados.jpg', 'Cortina roja', `El black out textil es un tejido compuesto por 3 capas entrelazadas: una primera capa de tejido color, una capa de tejido negro en el medio y otra capa de tejido color en el reverso.`, 10500, 0, 6)

let listaProductos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
]

// HTML
function monstrarProductos() {
  listaProductos.forEach(producto => {
    const artiulos = `<div
        class="card col-6 col-lg-12 rounded-start"
        style="width: 30rem"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src="${producto.img}"
          class="card-img-top"
          alt="accesorio"
        />
        <div class="card-body">
          <h5 class="card-title">Descripción</h5>
          <h2>${producto.nombre}</h2>
          <p class="card-text">${producto.descripcion}</p>
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">$${producto.precio}</li>
          <li class="list-group-item">
            <label for="number" class="livCant">Cantidad:</label>
            <input type="number" name="number" id="${producto.id}"/>
          </li>
          <li class="list-group-item">
            <label for="submit"></label>
            <input type="submit" value="Agregar" class="livAgregar" onclick="agregarAlCarrito(${producto.id})" />
          </li>
        </ul>
      </div>`
    if (document.getElementById('sectionLiv')) {
      document.getElementById('sectionLiv').innerHTML += artiulos
    }
  })
}

// GUARDAR PRODUCTOS EN LOCALSTORAGE
let carrito = []

function agregarAlCarrito(id) {

  let producto = listaProductos.find(producto => producto.id === id)
  let cantidadProductoSeleccionado = document.getElementById(producto.id).value
  producto.cantidad = cantidadProductoSeleccionado;

  carrito.push(producto)

  localStorage.setItem('carrito', JSON.stringify(carrito))



}
const localStorageCarrito = localStorage.getItem('carrito')
const carritoParseado = JSON.parse(localStorageCarrito);



// MOSTRAR EN HTML
monstrarProductos();

// GUARDAR PRODUCTOS EN CARRITO

function mostrarCarrito(producto) {
  const carritoHtml = ` <div class="container h-100">
  <div
    class="row d-flex justify-content-center align-items-center h-100"
  >
    <div class="col">
      <p>
        <span class="h2">Carrito de compras </span
        ><span class="h4"></span>
      </p>

      <div class="card mb-4">
        <div class="card-body p-4">
          <div class="row align-items-center">
            <div class="col-md-2">
              <img
                src="${producto.img}"
                class="img-fluid imgProd"
                alt="Generic placeholder image"
              />
            </div>
            <div class="col-md-2 d-flex justify-content-center">
              <div>
                <p class="small text-muted mb-4 pb-2">Nombre</p>
                <p class="lead fw-normal mb-0 nombreProd">${producto.nombre}</p>
              </div>
            </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
              <div>
                <p class="small text-muted mb-4 pb-2">Cantidad</p>
                <p class="lead fw-normal mb-0 cantidadProd">${producto.cantidad}</p>
              </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
              <div>
                <p class="small text-muted mb-4 pb-2">Precio</p>
                <p class="lead fw-normal mb-0 precioProd">${producto.precio}</p>
              </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center">
              <div>
                <p class="small text-muted mb-4 pb-2">Total</p>
                <p class="lead fw-normal mb-0 totalProd"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-5">
        <div class="card-body p-4">
          <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Precio final:</span>
              <span class="lead fw-normal precioFinalProd"></span>
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-light btn-lg me-2">
          Continuar comprando
        </button>
        <button type="button" class="btn btn-primary btn-lg botonCarrito">
          Finalizar compra
        </button>
      </div>
    </div>
  </div>
</div>`

  if (document.getElementById('sectionCarrito')) {
    document.getElementById('sectionCarrito').innerHTML += carritoHtml
  }
}

function mostrarProductosCarrito() {
  carritoParseado.forEach(producto => {
    mostrarCarrito(producto.nombre);
  })
}

mostrarProductosCarrito()





