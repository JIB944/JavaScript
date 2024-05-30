/* Arrays
        a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
        "Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
         mostrar por consola los meses 5 y 11 (utilizar console.log).
        
        b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
        
        c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
        
        d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
        
        e. Invertir el orden del array (utilizar reverse).
        
        f. Unir todos los elementos del array en un único string donde cada mes este
        separado por un guión - (utilizar join).
        
        g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre 
        (utilizar slice). */


// a.

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
"Junio","Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);
console.log(meses[10]);

// b.

var mesesOrdenados = meses.sort();
console.log(mesesOrdenados);

// c.  
  
meses.unshift("Comienzo");  //Agregar un elemento al principio 
meses.push("Fin");          //Agregar un elemento al final 
console.log(meses);

// d. 

meses.shift(); // Quita el primer elemento
meses.pop();   // Quita el último elemento
console.log(meses);

// e.  Invertir el orden del array
meses.reverse();
console.log(meses);

//f. 

var mesesUnidos = meses.join(" - ");
console.log(mesesUnidos);


// g. 

var copiaMeses = meses.slice(4, 11); // Mayo es índice 4 y (Noviembre) índice 10 
console.log(copiaMeses);