
console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(parts)

document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("serie").value = decodeURIComponent(parts[1][1])
document.getElementById("precio").value = decodeURIComponent(parts[2][1])
document.getElementById("descripcion").value =decodeURIComponent( parts[3][1])
document.getElementById("stock").value =decodeURIComponent( parts[4][1])

function editar() {
    let id = parseInt(document.getElementById("id").value)
    let s = parseInt(document.getElementById("serie").value)
    let p = parseInt(document.getElementById("precio").value)
    let d =document.getElementById("descripcion").value
    let st = parseInt(document.getElementById("stock").value)
   
    let articulo = {
        serie: s,
        precio: p,
        descripcion: d,
        stock:st
    }
    let url = "https://libreria2023.pythonanywhere.com/articulos/"+id
    var options = {
        body: JSON.stringify(articulo),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("El registro se modifico correctamente!")
            window.location.href = "./listado.html";  

        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar registro")
        })      
}
