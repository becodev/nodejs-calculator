const { crearArchivo } = require("./helpers/multiplicar");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    return true;
  }).argv;

console.clear();

crearArchivo(argv.base, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creada."))
  .catch((err) => console.log(err));