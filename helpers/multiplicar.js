const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, hasta, listar) => {
  try {
    let salida = "";
    hasta += 1;

    for (let i = 1; i < hasta; i++) {
      salida += `${i} x ${base} = ${i * base}\n`;
    }
    if (listar == true) {
      console.log("=============".green);
      console.log(`Tabla del ${base}`.green);
      console.log("=============".green);
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`.green;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
