/**
 * El césar algorithm
 */
'use strict';
const mensaje = 'I´m in love with the coco. yo';
const offset = 3;
let resultado = '';
for (let i = 0; i < mensaje.length; i++) {
    let valor = mensaje.charAt(i).toUpperCase().charCodeAt(0);
    if(valor > 64 && valor < 91) {  //A - Z
        valor += offset;
        if(valor > 90){
            valor -= 26 ; //DAR VUELTA ASII  Y,Z -> A,B...
        }
    }
    resultado += String.fromCharCode(valor);
}
console.log(resultado);

/**
 * Escitala decrypt algorithm
 */
function decryptCesar(text){
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let valor = text.charAt(i).charCodeAt(0);
        if(valor < 65 || valor > 90){ // Si el valor es diferente a A-Z se pasa igual
            result += String.fromCharCode(valor);
            continue;
        }
        valor -= offset;  //resta desplazamiento
        if(valor < 65){ valor += 26  }  //DAR VUELTA ASII A -> Z
        result += String.fromCharCode(valor);
    }
    return result;
}
console.log(decryptCesar(resultado));

// Fuerza bruta
function decryptCesarBrute(text){
    let resultados = [];
    for (let offset = 0; offset < 26; offset++) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let valor = text.charAt(i).charCodeAt(0);
            if(valor < 65 || valor > 90){ // Si el valor es diferente a A-Z se pasa igual
                result += String.fromCharCode(valor);
                continue;
            }
            valor -= offset;  //resta desplazamiento
            if(valor < 65){
                valor += 26  
            }  //DAR VUELTA ASII A -> Z
            result += String.fromCharCode(valor);
        }
        resultados[offset] = result;
    }
    return resultados;
}
console.log(decryptCesarBrute(resultado));







