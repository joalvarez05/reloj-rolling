export const navbar = () => {
  let header = document.querySelector("header");
  let nodo1 = document.createElement("nav");
  nodo1.classList = "navbar navbar-expand-lg navbar-light bg-body-tertiary";
  let nodo2 = `<div class="container-fluid">
            <a class="navbar-brand" href="../index.html"
              ><img
                src="../assets/img/img-without-bg.png"
                height="35"
                alt="relojito Logo"
                loading="lazy"
            /></a>
            <button
              data-mdb-collapse-init
              class="navbar-toggler"
              type="button"
              data-mdb-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="../index.html">Reloj</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" target="_blank">Alarma</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" target="_blank">Cronometro</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./nosotros.js">Acerca de nosotros</a>
                </li>
              </ul>
              <div class="ms-auto pdt">
                <i class="fas fa-moon" id="changeTheme"></i>
              </div>
            </div>
            </div>`;

  nodo1.innerHTML = nodo2;

  header.append(nodo1);
};
navbar();
