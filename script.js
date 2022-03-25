document.getElementById('botonProductos').addEventListener('click', () => {
    fetch('productos.json')
    .then(response => response.json())
    .then(data => console.log(data))
})
