/* Strings
        a. Crear una variable de tipo string con al menos 10 caracteres y convertir 
        todo el texto en mayúscula (utilizar toUpperCase).

        b. Crear una variable de tipo string con al menos 10 caracteres y generar 
        un nuevo string con los primeros 5 caracteres guardando el resultado en una
         nueva variable (utilizar substring).

        c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
        string con los últimos 3 caracteres guardando el resultado en una nueva 
        variable (utilizar substring).

        d. Crear una variable de tipo string con al menos 10 caracteres y generar un 
        nuevo string con la primera letra en mayúscula y las demás en minúscula. 
        Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
         toLowerCase y el operador +).
        
        e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio
         en blanco. 
        Encontrar la posición del primer espacio en blanco y guardarla en una variable
         (utilizar indexOf).
        f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres
         y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores 
         para generar un nuevo string que tenga la primera letra de ambas palabras 
         en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, 
         toUpperCase, toLowerCase y el operador +). */

/*a. */

  var x = "electrodoméstico";
  console.log(x.toUpperCase()) //ELECTRODOMÉSTICO

/*b.*/
var y = "supermercado";
var z = y.substring(0,5);   //toma de la posición 0 a la 5 sin incluír esta última.
console.log(z); 

/*c. */
var w = "supermercado";
var z = w.substring(9);         //toma los caracteres sigtes a l a9 posición.
console.log(z);

/*d. */

var primeraLetra = "parafrasear";
var primeraLetraMayus = (primeraLetra.substring(0,1).toUpperCase() + primeraLetra.substring(1.10).toLowerCase());
console.log(primeraLetraMayus); 

/* e. */
var espacio = "locom tora";
var espacioEnBlanco = espacio.indexOf(" "); //devuelve la posición del primer espacio en blanco.
console.log(espacioEnBlanco); //devuelve la posición del primer espacio en blanco.

/* f. */

var palabra1 = "electronicamente hablando";
var mayusMinus = palabra1.substring(0,1).toUpperCase()+palabra1.substring(1,16).toLocaleLowerCase() + palabra1.substring(16,18).toUpperCase()+palabra1.substring(18,25).toLocaleLowerCase();

console.log(mayusMinus); 