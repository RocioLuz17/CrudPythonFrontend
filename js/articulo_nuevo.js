function guardar() {
    let s = parseInt(document.getElementById("serie").value)
    let p = parseInt(document.getElementById("precio").value)
    let d = document.getElementById("descripcion").value
    let st = parseInt(document.getElementById("stock").value)
  

    let articulo = {
        serie: s,
        precio: p,
        descripcion: d,
        stock: st
        
    }
    let url = "https://libreria2023.pythonanywhere.com/articulos"
    var options = {
        body: JSON.stringify(articulo),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("El registro se guardo correctamente!")
          
            window.location.href = "./listado.html";  
          
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
