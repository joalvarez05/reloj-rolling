const crearFooter = () => {
  let footer = document.querySelector("#footer");
  let secFooter = document.createElement("section");
  secFooter.classList = "bg-color5 pt-4";
  let artFooter = `<article class="container">
    <div class="row text-center align-items-center">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
              <a href="../index.html">
<img src="../assets/img/img-without-bg.png" alt="logo-brand" style="width:60px; height:60px">
</a>
</div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    
        
        <ul class="list-unstyled">
          <li>
            <a
              href="./404.html"
              class="link-footer fs-6"
              title="Preguntas frecuentes"
              >Preguntas frecuentes</a
            >
          </li>
          <li>
            <a href="./404.html" class="link-footer fs-6" title="Sobre nosotros"
              >Sobre nosotros</a
            >
          </li>
          <li>
            <a href="./404.html" class="link-footer fs-6" title="Contacto"
              >Contacto</a
            >
          </li>
        </ul>
      </div>

    </div>
  </article>
  <section class="pt-3 bg-body-tertiary">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
          <a href="./404.html" class="nav-link fs-6">
            Términos y Condiciones
          </a>
        </div>
        <div class="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
          <a href="./404.html" class="nav-link fs-6">
            Configuración de cookies
          </a>
        </div>
        <div class="col-12 col-sm-3 col-md-3 col-lg-3 mb-2">
          <a href="./404.html" class="nav-link fs-6">
            Politicas de privacidad
          </a>
        </div>
        <div class="col-12 col-sm-3 col-md-3 col-lg-3">
          <p class="fw-bold espacio">Grupo1, 2024 &copy;</p>
        </div>
      </div>
    </div>
  </section>`;

  secFooter.innerHTML = artFooter;
  footer.append(secFooter);
};

export { crearFooter };
