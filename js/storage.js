import { agregarCarritoHTML, productosCarrito } from './funciones.js';
export const guardarLocalStorage = () => {
    localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito))
}

export const obtenerLocalStorage = () => {
    let productoEnLS
    if (localStorage.length > 0) {
        productoEnLS = JSON.parse(localStorage.getItem('productosCarrito'));
    }
    for (const productoC of productoEnLS) {
        agregarCarritoHTML(productoC);
    }
}