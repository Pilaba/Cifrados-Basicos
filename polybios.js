/**
 * Algoritmo polybios 
 */
'use strict';
const tabla = [
    ['A','B','C','D','E','F'],  //A  B  C  D  E  F 
    ['G','H','I','J','K','L'],  //B
    ['M','N','Ñ','O','P','Q'],  //C
    ['R','S','T','U','V','W'],  //D
    ['X','Y','Z','0','1','2'],  //E
    ['3','4','5','6','7','8'],  //F
    ['9',' ',',','.','¿','?']   //G
];
const LETRA = {
    0: 'A', 1: 'B', 2: 'C', 3: 'D', 
    4: 'E', 5: 'F', 6:'G'
}; 
const mensaje = "El cafe con leche es como el cafe... pero con leche.";

let resultado = "";
for (let i = 0; i < mensaje.length; i++) {
    resultado += getSustitucion(mensaje.charAt(i).toUpperCase());
}

function getSustitucion(char){
    for (let i = 0; i < tabla.length; i++) {
        for (let j = 0; j < tabla[0].length; j++) {
           if(tabla[i][j] == char){
                return `${LETRA[i]}${LETRA[j]}`;
           }
        }
    }
    return '';
}
console.log(resultado);  //Cadena encriptada

/**
 * Polybios decrypt algorithm
 */
function decryptPolybios(text){
    let result = '';
    for (let i = 0; i < text.length; i+=2) {
        let x = text.charAt(i);
        let y = text.charAt(i+1);
        for (const item in LETRA) {
            if(LETRA[item] == x){ x = item }
            if(LETRA[item] == y){ y = item }
        }
        result += tabla[x][y];
    }
    return result;
}
console.log(decryptPolybios(resultado)); //Cadena desencriptada
