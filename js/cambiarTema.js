export const cambiarTema = () => {
  let cambiarTema = document.getElementById("changeTheme");

  const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-mdb-theme", "dark");
  };

  const temaClaro = () => {
    document.querySelector("body").setAttribute("data-mdb-theme", "light");
  };

  const changeTheme = () => {
    const temaActual = document
      .querySelector("body")
      .getAttribute("data-mdb-theme");

    if (temaActual === "dark") {
      temaClaro();
    } else {
      temaOscuro();
    }
  };

  cambiarTema.addEventListener("click", changeTheme);
};

cambiarTema();
