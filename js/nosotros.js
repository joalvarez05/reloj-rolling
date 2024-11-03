import { crearNavbar, cambiarTema } from "./navbar.js";

const crearNosotros = () => {
  let sectionTarjetas = document.querySelector("#section-tarjetas");

  let seccion = document.createElement("section");
  seccion.classList = "container";
  let articulos = `
   <h2 class="text-center py-5 h4 lh-base">
        Te invitamos a descubrir un innovador proyecto de reloj digital
        desarrollado con JavaScript y CSS. Este reloj, diseñado para el curso de
        Rolling, combina funcionalidad y estética, mostrando la hora actual en
        tiempo real con un estilo moderno y atractivo. Este proyecto no solo
        resalta nuestras habilidades técnicas, sino también nuestra pasión por
        el desarrollo web y la creación de experiencias interactivas. ¡Explora y
        disfruta del tiempo con nosotros!
      </h2>
      <h2 class="text-center py-5">Un poco sobre nuestro equipo!</h2>
<article class="container">
          <div
            class="row"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div
              class="col-12 col-md-6 col-lg-6 d-flex justify-content-center py-3"
            >
              <img
                src="../assets/img/integrantes/foto-perfil.jpg"
                alt="integrantes del equipo"
                class="img-nos"
              />
            </div>
            <div class="col-12 col-md-6 col-lg-6 py-3">
            <h3 class="text-center fw-bold">José Alvarez Domínguez</h3>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, rem. Dolore sapiente ratione expedita. Consectetur
                quaerat commodi sed tenetur magnam!
              </p>
       
              <a href="https://github.com/joalvarez05" class="link-prof"
                >joalvarez05</a
              >
            </div>
          </div>
        </article>
        <article class="container">
          <div
            class="row"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div
              class="col-12 col-md-6 col-lg-6 d-flex justify-content-center py-3"
            >
              <img
                src="../assets/img/integrantes/foto-perfil.jpg"
                alt="integrantes del equipo"
                class="img-nos"
              />
            </div>
            <div class="col-12 col-md-6 col-lg-6 py-3">
              <h3 class="text-center fw-bold">José Alvarez Domínguez</h3>
              <p class="lead">
                Apasionado por los viajes y el buen café. Agradeceras haberlo
                conocido :) Acá su GitHub para contactarte con el:
              </p>
            
              <a href="https://github.com/joalvarez05" class="link-prof"
                >joalvarez05</a
              >
            </div>
          </div>
        </article>
        <article class="container">
          <div
            class="row"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div
              class="col-12 col-md-6 col-lg-6 d-flex justify-content-center py-3"
            >
              <img
                src="../assets/img/integrantes/foto-perfil.jpg"
                alt="integrantes del equipo"
                class="img-nos"
              />
            </div>
            <div class="col-12 col-md-6 col-lg-6 py-3">
            <h3 class="text-center fw-bold">José Alvarez Domínguez</h3>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, rem. Dolore sapiente ratione expedita. Consectetur
                quaerat commodi sed tenetur magnam!
              </p>
           
              <a href="https://github.com/joalvarez05" class="link-prof"
                >joalvarez05</a
              >
            </div>
          </div>
        </article>`;

  seccion.innerHTML = articulos;
  sectionTarjetas.append(seccion);
  AOS.init();
};

crearNavbar();
cambiarTema();
crearNosotros();
