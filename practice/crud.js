// PERSISTIDO EN EL JSON inventors.json
const fs = require('fs');
const PATH = './inventors.json';

let inventors = JSON.parse(fs.readFileSync(PATH, 'utf-8'));

//persiste en el json
function persistir() {
    return fs.writeFileSync(PATH, JSON.stringify(inventors, null, '    '));

}

//por medio del ID devuelve el index en el array
function getIndex(id) {
    return getInventors().findIndex(inventor => inventor._id === id)
}

// TODO: getInventors()
function getInventors() {
    return JSON.parse(fs.readFileSync(PATH, 'utf-8'));

}

// TODO: getInventor(id)
function getInventor(id) {
    return getInventors().filter(inventor => inventor._id === id);
}

// TODO: insertInventor(inventor)
function insertInventor(inventor) {
   
        inventors.push(inventor)
        persistir()
}

// TODO: updateInventor(inventor)
function updateInventor(inventor) {
    //getInventors()[getIndex(inventor._id)] = inventor
    inventors[getIndex(inventor._id)] = inventor
    persistir()
}

// TODO: deleteInventor(id)
function deleteInventor(id) {
    inventors.splice(getIndex(id), 1);
    persistir()
}




// PROBAR METODOS
console.log("LISTA INVENTORES")
console.log(getInventors())

console.log("MUESTRA INVENTOR CON ID 4")
console.log(getInventor(4))

console.log("INSERTO ID 13")
insertInventor({ _id: 13, first: 'Uno', last: 'Queinvento', year: 1865 })

console.log("LISTA INVENTORES CON EL + ID 13")
console.log(getInventors())

console.log("MODIFICO EL NOMBRE DEL 13 ")
updateInventor({ _id: 13, first: 'TreceQueTeParece', last: 'Queinvento', year: 1865 })

console.log("LISTA CONEL CAMBIO SOBRE ID 13")
console.log(getInventors())

console.log("ELIMINO EL ID 6")
console.log(deleteInventor(6))

console.log("LISTO SIN EL ID 6")
console.log(getInventors())

console.log("LO VUELVO AGREGAR")
insertInventor({ _id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473 },)

console.log("LISTO CON EL ID 6 AGREGADO")
console.log(getInventors())

console.log("ELIMINO EL ID 13")
console.log(deleteInventor(13))

console.log("QUEDA LA ORIGINAL")
console.log(getInventors())





