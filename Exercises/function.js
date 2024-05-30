/*  6   a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
        Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
        dicha variable en la consola del navegador.

        b. A la función suma anterior, agregarle una validación para controlar si alguno 
        de los parámetros no es un número, mostrar una alerta aclarando que uno de los 
        parámetros tiene error y retornar el valor NaN como resultado.

        c. Crear una función validate integer que reciba un número como parámetro y 
        devuelva verdadero si es un número entero.

        d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los 
        números sean enteros. En caso que haya decimales mostrar un alerta con el error 
        y retorna el número convertido a entero (redondeado).

        e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
         dentro de la función suma probando que todo siga funcionando igual. */


//a. 

function suma(a, b) {
        return a + b;
    }

var resultado = suma(5, 12);
console.log(resultado);

//b.

function suma(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log("Uno de los parámetros no es un número.");
        return NaN;
    }
    return a + b;
}
var resultado = suma(5, "8"); 
console.log(resultado);

//c. 
function validateInteger(num) {
        return Number.isInteger(num);
    }
    
console.log(validateInteger(10)); 
console.log(validateInteger(7.5)); 

//d.
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log("Uno de los parámetros no es un número.");
        return NaN;
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (!Number.isInteger(a)) {
            alert(`El número ${a} no es entero. Será redondeado.`);
            a = Math.round(a);
        }
        if (!Number.isInteger(b)) {
            alert(`El número ${b} no es entero. Será redondeado.`);
            b = Math.round(b);
        }
    }

    return a + b;
}
var resultado = suma(7, 7,5 );  //resultado 11
console.log(resultado);

//e.

function validarEntero(num) {
        if (typeof num !== 'number') {
            console.log("El parámetro no es un número.");
            return NaN;
        }
    
        if (!Number.isInteger(num)) {
            alert(`El número ${num} no es entero. Será redondeado.`);
            return Math.round(num);
        }
    
        return num;
    }
    
    function suma(a, b) {
        a = validarEntero(a);
        b = validarEntero(b);
    
        if (isNaN(a) || isNaN(b)) {
            console.log("Uno de los parámetros no es un número.");
            return NaN;
        }
    
        return a + b;
    }
    
    var resultado = suma(5, "75"); //Nan
    console.log(resultado);