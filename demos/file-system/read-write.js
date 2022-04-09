const fs = require('fs');

//LEE EL ARCHIVO TEXTO.TXT
let texto = fs.readFileSync('./texto.txt','utf-8');

texto +=`Esto es otra linea de texto`

//ESCRIBE EN EL ARCHIVO TEXTO.TXT LA VARIABLE TEXTO
fs.writeFileSync('./texto.txt',texto)

// MUESTRA POR CONSOLA
console.log(texto);


