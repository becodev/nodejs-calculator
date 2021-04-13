const fs = require("fs");

const crearArchivo = async (base = 5, listar = false) => {
  try {
    let salida = "";

    for (let i = 1; i < 11; i++) {
      salida += `${i} x ${base} = ${i * base}\n`;
    }
    if (listar == true) {
      console.log("===========");
      console.log(`Tabla del ${base}`);
      console.log("===========");
      console.log(salida);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
