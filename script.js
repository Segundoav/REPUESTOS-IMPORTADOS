
function mostrarCategoria(idCategoria) {
    // Obtener el elemento de la categoría seleccionada
    let categoriaSeleccionada = document.getElementById(idCategoria);
    
    // Hacer scroll hacia la categoría seleccionada
    categoriaSeleccionada.scrollIntoView({ behavior: 'smooth' });
}

function mostrarDetalle(nombre, precio, imagen) {
    // Mostrar el detalle del producto
    document.getElementById('nombreProducto').innerText = nombre;
    document.getElementById('precioProducto').innerText = precio;
    document.getElementById('imagenDetalle').src = imagen;

    // Mostrar el cuadro de detalle
    document.getElementById('detalleProducto').style.display = 'flex';
}

function cerrarDetalle() {
    // Ocultar el cuadro de detalle
    document.getElementById('detalleProducto').style.display = 'none';
}








