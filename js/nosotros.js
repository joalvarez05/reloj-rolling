import { crearNavbar, cambiarTema } from "./navbar.js";
import { crearFooter } from "./footer.js";

const generarId = () => {
  let randomId = crypto.randomUUID();
  return randomId;
};

let data = [
  {
    id: generarId(),
    email: "javiermauriciogomez97@gmail.com",
    first_name: "Javier",
    last_name: "Gomez",
    avatar:
      "https://i.ibb.co/ZJh0Bth/Whats-App-Image-2023-03-28-at-23-35-31.jpg",
    description:
      "Estudiante de programación en Rolling Code de día y empleado de Call Center de noche. Github:",
    github: "https://github.com/JavierMauricioGomez",
  },
  {
    id: generarId(),
    email: "joalvarez05@gmail.com",
    first_name: "Jose",
    last_name: "Alvarez Dominguez",
    avatar: "https://i.ibb.co/CsPfW1V/foto-perfil.jpg",
    description:
      "Apasionado por los viajes y el buen café. Agradeceras haberlo conocido. Acá su GitHub para contactarte con él:",
    github: "https://github.com/joalvarez05",
  },
];

const crearNosotros = () => {
  let sectionTarjetas = document.querySelector("#section-tarjetas");

  let section = document.createElement("section");
  section.classList = "container py-4 h3 fw-bold";
  let seccionTitulo = `<h2 class="text-center lead lh-base mt-5 "> Somos un equipo apasionado por la tecnología y el desarrollo web, formado en <a href="https://web.rollingcodeschool.com/" class="text-danger" >Rolling Code school</a>
, donde aprendimos desde los fundamentos hasta técnicas avanzadas de programación. Nos especializamos en crear soluciones digitales a través de diversas tecnologías modernas, y seguimos en constante aprendizaje para mantenernos actualizados en este campo tan dinámico. </h2>`;
  section.innerHTML = seccionTitulo;
  sectionTarjetas.append(section);

  data.map((alumno) => {
    let sectionTarjetas = document.querySelector("#section-tarjetas");

    let seccion = document.createElement("section");
    seccion.classList = "container";
    let articulos = `<article class="container">
                <div
                  class="row"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1200"
                >
                  <div
                    class="col-12 col-md-6 col-lg-6 d-flex justify-content-center py-3"
                  >
                    <img
                      src="${alumno.avatar}"
                      alt="${alumno.first_name} ${alumno.last_name}"
                      class="img-nos"
                    />
                  </div>
                  <div class="col-12 col-md-6 col-lg-6 py-3">
                  <h3 class="text-center fw-bold">${alumno.first_name} ${alumno.last_name}</h3>
                    <p class="lead text-center">
                      ${alumno.description} 
                    </p>
             
                    <a href="${alumno.github}" target="_blank" class="link-prof"
                      >${alumno.github}</a
                    >
                  </div>
                </div>
              </article>`;

    seccion.innerHTML = articulos;
    sectionTarjetas.append(seccion);
    AOS.init();
  });
};

crearNavbar();
cambiarTema();
crearNosotros();
crearFooter();
