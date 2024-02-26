import './Carrito.css'
export const mostrarProductos = (cantidadProductos) => {
    const contenedor = document.createElement('div');
    contenedor.classList = 'contenedor'
    const divProductos = document.createElement('div');
    const mensajeSinProductos = document.createElement('span');
    mensajeSinProductos.classList = 'sinProductos'
    if (cantidadProductos === 0) {
        mensajeSinProductos.textContent = 'No se encuentran productos.'; 

    } else {
        // Aquí puedes agregar lógica adicional si hay productos
    }

    contenedor.appendChild(divProductos);
    contenedor.appendChild(mensajeSinProductos);
    return contenedor;
}