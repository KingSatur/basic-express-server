const hbs = require("hbs");

// Un helper es una funcion que se dispara cuando el render lo requiere
hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("capitalizar", (texto) => {
  let palabras = texto.split(" ");
  palabras.forEach((palabra, index) => {
    palabras[index] = palabra.charAt(0).toUpperCase();
  });

  return palabras.join(" ");
});
