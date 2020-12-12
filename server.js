const express = require("express");
// Usar express como deseamos
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;

// Usando hbs
// Directorio donde estaran todos los parciales
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// Sirviendo archivos estaticos
app.use(express.static(__dirname + "/public"));

/**
 * El middleware sirve para filtrar las url
 */

// Configurando una solicitud get
// app.get("/single-data", function (req, res) {
//   let output = {
//     nombre: "Messi",
//     edad: 10,
//   };
//   res.send(output);
//   //   res.send("<p>Hello World</p>");
// });

// app.get("/data", function (req, res) {
//   let p = [];
//   let output = {
//     nombre: "Messi",
//     edad: 10,
//   };
//   p.push(output);
//   p.push(output);

//   res.send(p);
//   // res.send("<p>Hello World</p>");
// });

app.get("/", function (req, res) {
  res.render("index.hbs", {
    nombre: "Claro",
    anio: new Date().getFullYear(),
  });
});

app.get("/about", function (req, res) {
  res.render("about.hbs", {
    nombre: "Care chimba",
  });
});

app.listen(port, () => {
  console.log("Listening request in the port 3000");
});
