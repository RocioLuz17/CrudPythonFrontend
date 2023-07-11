document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-sm navbar-light">
<div class="container">
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link btn btn-outline-secondary" href="listado.html">Lista de articulos</a>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Operaciones</a>
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="articulo_nuevo.html">Ingresar articulo</a>
                  <a class="dropdown-item" href="articulo_edicionid.html">Buscar</a>
              </div>
          </li>
      </ul>
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="ingresar Id...">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
  </div>
</div>
</nav>`


document.getElementById("footer").innerHTML=`<div class="container-fluid">
  <div class="row">
    <div class="col-6 text-start">
        <p class="mb-0">
        <a>CRUD PYTHON 2023</a> &copy;
        </p>
      </div>
      <div class="col-6 text-end">
        <ul class="list-inline">
          <li class="list-inline-item">
            Creado por <a href="https://www.linkedin.com/in/roc%C3%ADo-luz-gallo-585554174/">Rocío Gallo</a>
          </li>               
        </ul>
      </div>
    </div>
  </div>`
