
// se ejecuta a los 4 segundos
setTimeout(() => {
    // esto es un callback
    console.log(`Se imprime a los 4 segundos`)

}, 4000);

// se ejecuta a los 2 segundos
setTimeout(() => {
    // esto es un callback
    console.log(`Se imprime a los 2 segundos`)

}, 2000);

// esto frena que se siga imprimiendo 
// setInterval, ejecuta el callback cada 1 segundo
// clearInterval() corta el setInterval 
let contador = 0
let id = setInterval(() => {
    console.log(`Se imprime cada 1 segundos`)
    contador++
    if (contador == 5) {clearInterval(id) }
}, 1000);

console.log(`Cual se imprime a los 6 segundos?`)