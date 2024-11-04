export const crearFooter = () => {
        let footer = document.querySelector("footer");
        let nodo1 = document.createElement("nav");
        nodo1.classList = "bg-body-tertiary text-center text-white text-lg-start mt-auto py-4";
      
        let footerContent = `
          <div class="container-fluid text-center text-white text-md-start">
            <div class="row text-white">
              <div class="col-md-4 mb-4">
                <h5 class="text-uppercase">Contacto</h5>
                <ul class="list-unstyled">
                  <li><a href="mailto:info@relojito.com" class="text-decoration-none text-white">info@relojito.com</a></li>
                  <li><a href="tel:+1234567890" class="text-decoration-none text-white">+123 456 7890</a></li>
                  <li><span class="text-white">Dirección: Calle Ficticia 123, Ciudad</span></li>
                </ul>
              </div>
      

              <div class="col-md-4 mb-4">
                <h5 class="text-uppercase">Navegacion</h5>
                <ul class="list-unstyled">
                  <li><a href="../index.html" class="text-decoration-none text-white">Inicio</a></li>
                  <li><a href="../pages/nosotros.html" class="text-decoration-none text-white">Acerca de Nosotros</a></li>
                  <li><a href="#" class="text-decoration-none text-white" target="_blank">Alarma</a></li>
                  <li><a href="#" class="text-decoration-none text-white" target="_blank">Cronómetro</a></li>
                </ul>
              </div>
      
              <div class="col-md-4 mb-4">
                <h5 class="text-uppercase">Síguenos</h5>
                <a href="https://facebook.com" target="_blank" class="me-3 text-white">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" class="me-3 text-white">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" class="me-3 text-white">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
      
          <!-- Derechos reservados -->
          <div class="text-center py-3 bg-light text-dark">
            © 2024 Relojito - Todos los derechos reservados
          </div>
        `;
      
        nodo1.innerHTML = footerContent;
        footer.append(nodo1);
      };
      
    crearFooter();