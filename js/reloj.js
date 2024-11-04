const reloj24 = setInterval(() => {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let contenedorReloj = document.getElementById("contenedor-reloj");
  contenedorReloj.innerHTML = "";
  let fecha = new Date();
  let horas = fecha.getHours().toString().padStart(2, "0");
  let minutos = fecha.getMinutes().toString().padStart(2, "0");
  let segundos = fecha.getSeconds().toString().padStart(2, "0");
  let horaCompleta = `${horas}:${minutos}:${segundos}`;

  let fechaH = `${dias[fecha.getDay()]} ${fecha
    .getDate()
    .toString()
    .padStart(2, "0")} de ${
    meses[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  let nodo1 = document.createElement("div");
  nodo1.classList = "d-flex flex-column align-items-center ";

  let nodo2 = `<span class="fuente" id="fecha">${fechaH}</span>
  <span class="fuente" id="hora">${horaCompleta}</span>`;
  nodo1.innerHTML = nodo2;
  contenedorReloj.append(nodo1);
}, 1000);

export { reloj24 };
