import { getProductos } from './productos.js';
import { agregarProductosHTML, contador, agregarCarritoHTML, carritoVacio, arreglarCantidad, eliminarProducto } from './funciones.js';
import { obtenerLocalStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    localStorage.length > 0 ? obtenerLocalStorage() : false;
})

const agregarProductosFetching = async() => {
    try {
        const productosFetched = await getProductos();
        for (const producto of productosFetched) {
            const { gato } = producto;
            gato ? agregarProductosHTML(producto) : false;
        }
    } catch (e) {
        console.log(e);
    }
}

const cantidadProductosFetching = async() => {
    try {
        const productosFetched = await getProductos();
        for (const producto of productosFetched) {
            const { id, nombre } = producto
            let btnComprar = document.getElementById(`btn-comprar${id}`)
            if (btnComprar) {
                btnComprar.addEventListener('click', () => {
                    if (!arreglarCantidad(producto)) {
                        agregarCarritoHTML(producto);
                        Toastify({
                            text: "Producto agregado con exito",
                            className: "info",
                            gravity: "bottom", // `top` or `bottom`
                            position: "left", // `left`, `center` or `right`
                            style: {
                                background: "#79db79",
                                color: "#013501"
                            }
                        }).showToast();
                    } else {
                        Toastify({
                            text: `Se actualizo la cantidad de ${nombre}`,
                            className: "info",
                            gravity: "bottom", // `top` or `bottom`
                            position: "left", // `left`, `center` or `right`
                            style: {
                                background: "#b5b5fa",
                                color: "#000035"
                            }
                        }).showToast();
                    }
                })

            }
        }
    } catch (e) {
        console.log(e);
    }
}

const contadorProductosFetching = async() => {
    try {
        const productosFetched = await getProductos();
        for (const producto of productosFetched) {
            const { gato } = producto
            gato ? contador(producto) : false;
        }
    } catch (e) {
        console.log(e);
    }
}

const eliminarProductosFetching = async() => {
    try {
        const productosFetched = await getProductos();
        let btnCarrito = document.getElementById(`btn-carrito`)
        if (btnCarrito) {
            btnCarrito.addEventListener('click', () => {
                for (const producto of productosFetched) {
                    const { id } = producto
                    let btnEliminar = document.getElementById(`btn-trash${id}`);
                    if (btnEliminar) {
                        btnEliminar.addEventListener('click', () => {
                            eliminarProducto(producto);
                            Toastify({
                                text: "Producto eliminado con exito",
                                className: "info",
                                gravity: "bottom", // `top` or `bottom`
                                position: "left", // `left`, `center` or `right`
                                style: {
                                    background: "#ff8585",
                                    color: "#7c0404"

                                }
                            }).showToast();
                        })
                    }
                }
            })
        }
    } catch (e) {
        console.log(e);
    }
}
carritoVacio();
agregarProductosFetching();
cantidadProductosFetching();
contadorProductosFetching();
eliminarProductosFetching();