const producto = {//Aquí se crea un objeto llamado producto que contiene varias propiedades como nombre, imagen, precio, color y descripcion. Este objeto representa la información de un producto en particular, en este caso, una cafetera eléctrica.
    nombre: "Cafetera Eléctrica",
    imagen: "./App/assets/Producto.jpg",
    precio: "$90.999",
    color: "Negro",
    descripcion: "La cafetera Oster® de 12 tazas con filtro permanente permite disfrutar de una taza de café recién hecha al momento que desees. Con su función de pausa y servir, también puedes servir una taza de café durante el proceso de colado, para disfrutar del rico sabor al momento que desees."
   };
   function crearHeader() {//Se ceclara una función llamada crearHeader()
    const header = document.createElement('header');//se crea dinámicamente un elemento <header> usando document.createElement('header'), que representa el encabezado de una página web.
   
    const logo = document.createElement('img');//Aquí se crea un elemento <img> para el logo.
    logo.src = './App/assets/Logo.jpg';//Se establece su atributo src para la ruta de la imagen del logo.
    logo.alt = 'Logo';//texto alternativo
    logo.style.maxWidth = '100px';//Se aplica un estilo máximo de ancho de 100px
   
    const titulo = document.createElement('h1');//Se crea un elemento <h1> para el título del encabezado
    titulo.textContent = 'Producto Promocional';//se asigna el texto "Producto Promocional" usando textContent.
   

    header.appendChild(logo);//Se añade elemento logo al elemento header.
    header.appendChild(titulo);//Se añade elemento título al elemento header
   
    return header;//la función crearHeader devuelve el elemento header que contiene el logo y el título.
   }
   function crearContenidoProducto() {//Aquí se declara una función llamada crearContenidoProducto.
    const productContainer = document.createElement('div');//se crea un elemento <div> utilizando document.createElement('div'), que actuará como un contenedor para mostrar la información del producto.
    productContainer.id = 'product';//Se le asigna un id de 'product' para identificarlo mas fácilmente.
    const productoDiv = document.createElement('div');//Se crea otro elemento <div> llamado productoDiv, que contendrá la información detallada del producto. 

    //Esta parte indica que el contenido HTML del elemento con el ID productoDiv` será reemplazado por el nuevo contenido generado dinámicamente.
    productoDiv.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p><strong>Precio:</strong> ${producto.precio}</p>
    <p><strong>Color:</strong> ${producto.color}</p>
    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
    `;
    productContainer.appendChild(productoDiv);//El elemento productoDiv se añade como hijo al contenedor principal productContainer. 
    return productContainer;//la función crearContenidoProducto devuelve este contenedor principal.
   }
   export function iniciarApp() {//Aquí se declara y exporta la función iniciarApp.
    const appContainer = document.getElementById('app');//se obtiene el elemento contenedor principal de la aplicación con el id 'app'.
    const header = crearHeader();//se llama a las funcion crearHeader.
    const contenidoProducto = crearContenidoProducto();//Se llama la funcióm crearContenidoProducto.

    appContainer.appendChild(header);//Se agrega el elemento header, que se creó dinámicamente utilizando la función crearHeader(), al contenedor principal de la aplicación (appContainer). 
    appContainer.appendChild(contenidoProducto);//Aquí, el contenido del producto (contenidoProducto), que se creó dinámicamente utilizando la función crearContenidoProducto(), se agrega al contenedor principal de la aplicación (appContainer). Esto significa que el contenido del producto (imagen, nombre, precio, etc.) se añade a la estructura HTML después del encabezado.
   }
