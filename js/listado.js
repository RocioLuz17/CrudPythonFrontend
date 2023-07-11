const {createApp } = Vue
  createApp({
    data() {
      return {
        url:"https://libreria2023.pythonanywhere.com/articulos",
        articulos:[],
        error:false,
        cargando:true
      }
    },
    
    created() {
        this.fetchData(this.url)//Se invoca método
    },
    methods: {
        fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.articulos= data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        
        eliminar(articulo) {
            const url = "https://libreria2023.pythonanywhere.com/articulos/" + articulo;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.json()) 
                .then(res => {
                    alert("Se elimino el registro")
                    location.reload();
                })
        }


    


    },
    

  }).mount('#app')