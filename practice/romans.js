/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 * 
 * Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

 */
const NroRomano = "CIV";

const stringToInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,

}

//PASO DE STRING A CHAR CON EL SPLIT Y OBTENGO UN OBJETO
const arrayRomano = NroRomano.split('');

console.log(NroRomano)

console.log(arrayRomano)



// EL OBJETO LO SEPARO CON EL MAP

const numero = arrayRomano.map((numero) => stringToInt[numero])

console.log(numero)

function recorrerArray() {
    let suma = 0;
    for (let i = 0; i < numero.length; i++) {

        let uno = numero[i];

        if (numero.length > 1) {
            let dos = numero[i + 1];

            if (uno >= dos) {
                suma = suma + uno

            } else {
                suma = suma + (dos - uno)
                i++
            }

        } else { suma = numero[i]; }

    }
    return suma


}
console.log("la suma es " + recorrerArray())