// Hacer funciones con promesas

// importar sistema de archivos con promesas
import fs from 'fs/promises';

// levanto la informacion del json 
const path = './inventors.json'

// creo el nuevo inventor para agregar en el punto 2
const nuevoInventor = { first: 'Nuevo', last: 'Inventor', year: 2022 }

// GET INVENTORS
function getInventors() {
    return fs.readFile(path, 'utf-8')
}

async function addInventor(nuevoInventor) {
    const data = await getInventors()
    const inventors = JSON.parse(data)
    inventors.push(nuevoInventor)
    return inventors
 }

function writeInventor(inventors) {
     return fs.writeFile(path, JSON.stringify(inventors, null, ' '))
 }

 // imprimir en pantalla la lista original de inventores
let listaInventores = await getInventors()
console.log(JSON.parse(listaInventores))

 // agregar un inventor, me devuelve la lista en memoria
listaInventores = await addInventor(nuevoInventor)

// grabar la lista en el json, me devuelve la nueva lista
await writeInventor(listaInventores)

// imprime la lista modificada
listaInventores = await getInventors()
console.log(JSON.parse(listaInventores))
