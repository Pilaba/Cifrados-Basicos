/**
 * Escitala algorithm
 */
'use strict';
const mensaje = 'Daría todo lo que tengo por tener un poco más. "M. burns"';
const caras = 6;
const largo = Math.ceil(mensaje.length/caras);  // 2.001 > 3

let resultado = [];
let indexChar = 0;
for(let i = 0; i < largo; i++){  
    for(let j = 0; j < caras; j++){  
        resultado[i + j * largo] = mensaje.charAt(indexChar++);
    }
}
resultado = (resultado.map( (value)=>{ return (value == '') ? ' ': value }));  //Agrega espacio en indices vacios
console.log(resultado.join('')); //Cadena encriptada

/**
 * Escitala decrypt algorithm
 */
function decrypt(texto){
    let array = [];
    let indexChar = 0;
    for(let i = 0; i < caras; i++){  
        for(let j = 0; j < largo; j++){
            array[i + (j * caras)] = texto.charAt(indexChar++);
        }
    }
    return array.join('');
}
console.log(decrypt(resultado.join('') ));