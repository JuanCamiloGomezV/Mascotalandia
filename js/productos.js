export const productos = [{
        id: 1,
        nombre: "Chunky para perro",
        descripcion: "Cordero Arroz Y Salmon",
        precio: "30000",
        imagen: "../img/productos perro/alimento 1.webp",
        cantidad: 1,
        total: 0,
        alimento: true,
        perro: true,
        gato: false
    },
    {
        id: 2,
        nombre: "Agility Gold para perro",
        descripcion: "Alimento para perro - Agility Gold Grandes Adultos",
        precio: "25000",
        imagen: "../img/productos perro/alimento 2.webp",
        cantidad: 1,
        total: 0,
        alimento: true,
        perro: true,
        gato: false
    },
    {
        id: 3,
        descripcion: "Monello Adulto Salmon y Pollo",
        nombre: "Monello para gato",
        precio: "35000",
        imagen: "../img/productos gato/alimento gato 1.png",
        cantidad: 1,
        total: 0,
        alimento: true,
        perro: false,
        gato: true
    },
    {
        id: 4,
        nombre: "Royal Canin para gato",
        descripcion: "Adaptado a la mandíbula del gato bengalí",
        precio: "20000",
        imagen: "../img/productos gato/alimento gato 2.webp",
        cantidad: 1,
        total: 0,
        alimento: true,
        perro: false,
        gato: true
    },
    {
        id: 5,
        nombre: "Enzimas Para Todos",
        descripcion: "Favorece el proceso digestivo",
        precio: "25000",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/165842-300-300?v=1755183633&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: true,
        gato: true
    },
    {
        id: 6,
        nombre: "Shampoo VFFC",
        descripcion: "Contra bacterias, hongos y virus",
        precio: "25000",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/166474-300-300?v=1754917575&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: false,
        gato: true
    },
    {
        id: 7,
        nombre: "Juguete Kong M para perro",
        descripcion: "Flotadores para encontrar fácilmente en el agua",
        precio: "78000",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/166096-300-300?v=1754319441&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: true,
        gato: false
    },
    {
        id: 8,
        nombre: "Arnes Riata Tigres Para Perro",
        descripcion: "Talla M",
        precio: "68900",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/165401-300-300?v=1754684352&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: true,
        gato: false
    },
    {
        id: 9,
        nombre: "Juguete Tunel Para Gato",
        descripcion: "Largo 51 cm, diámetro 25 cm",
        precio: "68900",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/166124-300-300?v=1755442873&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: false,
        gato: true
    },
    {
        id: 10,
        nombre: "Juguete Kong Peluche",
        descripcion: "Cozie Koala Medium Para Perro",
        precio: "64600",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/165077-300-300?v=1755442860&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: true,
        gato: false
    },
    {
        id: 11,
        nombre: "Endog 250 MG Para Perro",
        descripcion: "Para perros hasta 2.5 KG.",
        precio: "19250",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/166456-300-300?v=1753885886&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: true,
        gato: false
    },
    {
        id: 12,
        nombre: "Esencias Florales Gotas 30 ML ",
        descripcion: "Para perros o gatos con fobias o miedo a los fuegos artificiales",
        precio: "64600",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/166476-300-300?v=1755442872&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: false,
        perro: true,
        gato: true
    },
    {
        id: 13,
        nombre: "Gemon Pouche Cat Senior",
        descripcion: "Alimento Para Gato",
        precio: "13200",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/165620-300-300?v=1755442869&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: true,
        perro: false,
        gato: true
    },
    {
        id: 14,
        nombre: "Hills Perfect Digestion Gato",
        descripcion: "Proteína de alta calidad para ayudar a mantener los músculos magros.",
        precio: "13200",
        imagen: "https://kanu.vtexassets.com/arquivos/ids/166081-300-300?v=1755442869&width=300&height=300&aspect=true",
        cantidad: 1,
        total: 0,
        alimento: true,
        perro: false,
        gato: true
    },
];

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            productos.length > 0 ? resolve(productos) : reject(new Error("No hay productos"))
        }, 0)
    })
}