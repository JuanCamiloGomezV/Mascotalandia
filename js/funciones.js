import { guardarLocalStorage } from './storage.js'
export let productosCarrito = [];
export const agregarProductosHTML = (producto) => {
    setTimeout(() => {}, 1500);
    const { imagen, nombre, descripcion, precio, id } = producto;
    let padre = document.getElementById("contenedor-productos");
    let hijo = document.createElement("div");
    hijo.innerHTML = `<div class="card m-2 producto-size">
        <div class="w-100 d-flex justify-content-center">
            <img src="${imagen}" class="card-img-top img-producto" alt="...">
        </div>
        <div class="card-body d-flex align-items-center flex-column mb-0">
        <h5 class="card-text text-center fw-bold m-0">${nombre}</h5>
        <p class="card-text mb-0">${descripcion}</p>
        <h5 class="card-title text-center text-violet fw-bold mt-1">$${precio}</h5>
        <div class="d-flex justify-content-between mx-2">
            <div class="d-flex justify-content-start">
                <button class="btn btn-violet bg-violet rounded-0" id="btn-disminuir${id}">-</button>
                <input type="number" class="text-center bg-white text-dark border border-dark producto-cantidad" id="producto-cantidad${id}" disabled value="${producto.cantidad}">
                <button class="btn btn-violet bg-violet rounded-0 me-2" id="btn-aumentar${id}">+</button>
            </div>
            <button href="#" class="btn btn-violet bg-violet w-75" id="btn-comprar${id}">Comprar</button>
        </div>
        </div>
        </div>`
    padre.appendChild(hijo);
}

export const contador = (producto) => {
    let cantidad = document.getElementById(`producto-cantidad${producto.id}`);
    let buttonAumentar = document.getElementById(`btn-aumentar${producto.id}`);
    let buttonDisminuir = document.getElementById(`btn-disminuir${producto.id}`);

    if (buttonAumentar) {
        buttonAumentar.addEventListener("click", () => { aumentar() })
    }
    if (buttonDisminuir) {
        buttonDisminuir.addEventListener("click", () => { disminuir() })
    }
    const aumentar = () => {
        cantidad.value++;
    }

    const disminuir = () => {
        if (cantidad.value > 1) {
            cantidad.value--;
        }
    }
}

export const carritoVacio = () => {
    let padre = document.getElementById("contenedor-carrito");
    let hijo = document.createElement("div");
    if (productosCarrito.length == 0) {
        hijo.innerHTML = `<p id="carrito-vacio">No has agregado productos a tu carrito de compras. Para agregarlos busca el producto que deseas y has clic en el botón 'comprar'</p>`;
    }
    padre.appendChild(hijo);
}

export const agregarCarritoHTML = (producto) => {
    obtenerTotalProducto(producto);
    productosCarrito.push(producto);
    let padre = document.getElementById("contenedor-carrito");
    let hijo = document.createElement("div");
    for (const productoC of productosCarrito) {
        hijo.innerHTML = `<div class="d-flex flex-row justify-content-between align-items-center border-bottom border-light mb-1" id="carrito-producto${productoC.id}">
                    <img src="${productoC.imagen}" class="w-25" alt="">
                    <div class="d-flex flex-column align-items-stretch">
                        <p class="fw-bold my-0 text-center">${productoC.nombre}</p>
                        <p class="my-0 text-center">${productoC.descripcion}</p>
                        <p class="my-0 text-center">$${productoC.precio} por unidad</p>
                        <p class="my-0 text-center" id="cantidad-carrito${producto.id}">Cantidad: ${productoC.cantidad}</p>
                        <p class="my-0 text-center" id="total-producto${producto.id}">$${producto.total}</p>
                    </div>
                    <button class="btn btn-trash w-auto h-25 p-0" id="btn-trash${productoC.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                    </button>
                </div>`
        padre.appendChild(hijo);
    }
    if (productosCarrito.length > 0) {
        let pCarritoVacio = document.getElementById("carrito-vacio")
        if (pCarritoVacio) {
            pCarritoVacio.remove();
        }
    }
    guardarLocalStorage();
    obtenerTotalCarrito();
    cantidadDelCarrito();
}

export const arreglarCantidad = (producto) => {
    let totalProducto = document.getElementById(`total-producto${producto.id}`);
    let cantidad = document.getElementById(`producto-cantidad${producto.id}`);
    let bandera = false;
    let cantidadCarrito = document.getElementById(`cantidad-carrito${producto.id}`);
    if (productosCarrito.length == 0) {
        producto.cantidad = cantidad.value;
        obtenerTotalProducto(producto);
        if (totalProducto) {
            totalProducto.innerText = `$${producto.total}`;
        }
        obtenerTotalCarrito();
        cantidadDelCarrito();
        guardarLocalStorage();
    }
    for (const productoC of productosCarrito) {
        if (productoC.id == producto.id) {
            productoC.cantidad = parseInt(productoC.cantidad) + parseInt(cantidad.value);
            bandera = true;
            cantidadCarrito.innerText = `Cantidad: ${productoC.cantidad}`
        } else {
            producto.cantidad = cantidad.value;
        }
        obtenerTotalProducto(producto);
        if (totalProducto) {
            totalProducto.innerText = `$${producto.total}`;
        }
        obtenerTotalCarrito();
        cantidadDelCarrito();
        guardarLocalStorage();
    }

    return bandera;
}

export const eliminarProducto = (producto) => {
    let totalProducto = document.getElementById(`total-producto${producto.id}`)
    for (const productoC of productosCarrito) {
        if (producto.id == productoC.id) {
            if (productoC.cantidad > 1) {
                let cantidadCarrito = document.getElementById(`cantidad-carrito${productoC.id}`);
                productoC.cantidad--;
                cantidadCarrito.innerText = `Cantidad: ${productoC.cantidad}`;
            } else {
                productosCarrito.splice(productosCarrito.indexOf(productoC), 1);
                let productoCarrito = document.getElementById(`carrito-producto${productoC.id}`)
                productoCarrito.remove();
                carritoVacio();
            }
            obtenerTotalProducto(productoC);
            totalProducto.innerText = `$${productoC.total}`;
            obtenerTotalCarrito();
            cantidadDelCarrito();
        }
    }
    guardarLocalStorage();
}

const obtenerTotalProducto = (producto) => {
    producto.total = producto.cantidad * producto.precio;
}

const obtenerTotalCarrito = () => {
    const total = document.getElementById(`total-carrito`)
    let suma = 0;
    for (const productoC of productosCarrito) {
        suma = suma + parseInt(productoC.total);
    }
    cantidadDelCarrito();
    total.innerText = `Total $${suma}`;
}

const cantidadDelCarrito = () => {
    const cantidad = document.getElementById(`cantidad_carrito`);
    let suma = 0;
    for (const productoC of productosCarrito) {
        suma = suma + parseInt(productoC.cantidad);
    }
    setTimeout(() => { cantidad.innerText = `${suma}` }, 500);

}