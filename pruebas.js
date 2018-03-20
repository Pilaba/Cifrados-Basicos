/**
 * Ejercicio 1 - Escitala 
 * V1
 */
const numCaras = 6;
const cara = Math.floor(Math.random() * numCaras);
const frase = "Lanza ofensiva";
let resultado = "";

console.log(`cara = ${cara}  mensaje = ${frase}`);
let nextChar = 0;
let insert = cara;
for(let i = 0; i < frase.length*numCaras; i++){
    if(i == insert){
        resultado += frase.charAt(nextChar++);
        insert += 6;
    }else{
        const TrashChar = String.fromCharCode(Math.floor(Math.random() * 95)+32); 
        resultado += TrashChar;
    }
}
console.log(resultado);

/**
 * DECODIFICAR
 */
 function decrypt(mensaje){
    for(let i=0; i<numCaras; i++){
        var result = "";
        for(let j=i; j<mensaje.length; j++){
            result+=mensaje.charAt(j);
            j += 5;
        }
        console.log(`Resultado cara ${i} = ${result}`)
    }
 }
 decrypt(resultado);
