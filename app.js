const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();

crearArchivo(argv.base, argv.h, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creada.".green))
  .catch((err) => console.log(err));
