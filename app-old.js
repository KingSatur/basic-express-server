const http = require("http");

// Creamos el servidor, lo mismo que express pero con mas codigo.
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    let output = {
      nombre: "Messi",
      edad: 10,
    };

    //   Funciones para desplegar cualquier cantidad de contenido
    res.write(JSON.stringify(output));
    res.end();
  })
  .listen(8080);
// Allocate the port
console.log("Escuando el puerto 8080");
