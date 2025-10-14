
//1//Crea una variable global llamada curso,
//  y cuyo valor sea 'JS Básico'.
//Dentro de una función mostrar(), 
// crea la variable tema cuyo valor 'Funciones' y muestra
//por consola ambas.
//Luego intenta mostrar dicha variable
//tema fuera de la función (¿qué ocurre y p

let curso= "JS Básico";

function mostrar(){
    let tema = "Funciones"
}
console.log(curso);
console.log(mostrar());






//2.2// Crea una función que reciba
//  un nombre y devuelva un saludo que lo incluya.


function saludo(name){
    let nombrecito = "Hola que tal estás " + name;
    return nombrecito;
}
console.log(saludo("Alejandro"));


//2.3 Escribe una función llamada sumar(a, b)
//  que devuelva la suma de dos números.
//  Guarda el resultado en una variable
//  y muéstralo por consola.

function sumar(a,b){
    let operacion = a+b;
    return operacion
}
console.log(sumar(3,3))




//2.4 Escribe una función llamada
//  mostrarCurso() que use una variable
//  global llamada curso y una variable local
//  llamada tema. Devuelve un string
//  que combine ambas y muéstralo
//  por consola.

let variable1 = "curso"
function mostrarCurso(){
    let variable2 = "tema";
    let  combinado = variable1+ "-" + variable2;
    return combinado
}
console.log(mostrarCurso());



//2.5 Escribe una función llamada
// multiplicar(a, b) que devuelva
//  el producto de dos números
//  Guarda el resultado en una
//  variable y muéstralo por consola.

function multiplicar(a,b){
    let producto = a*b;
    return producto

}
console.log(multiplicar(3,2));





//2.6 Crea una función llamada
//  presentar(nombre, edad)
//  que devuelva el string
//  "Me llamo <nombre> y tengo <edad> años".
//  Guarda el retorno y muéstralo
//  por consola.

function presentar(nombre, edad){
    let presentacion= `Me llamo ${nombre} y tengo ${edad} años`;
    return presentacion
}
console.log(presentar("Alejandro",31));


//3 Declara una constante miLogger
//  y asígnale una función que reciba
//  un mensaje y lo imprima
// con el prefijo LOG:.
// Llama a miLogger('probando').

const miLogger = function(probando){
    let mensajito1 = "LOG " + probando;
    return mensajito1;
    
}
console.log(miLogger("probando"));

const miApellido= (nombre)=> console.log("Hola me llamo " + nombre);


console.log(miApellido("Alejandro"));




//4 Crea una función flecha esPar(n) que
//  devuelva true si n es par y false si no.
// Pruébala con 3 y 10.

function esPar(n){
    let Siono = n %2 ===0;
    return Siono
    
}
console.log(esPar(4));

const esPare = (n)=>n %2===0;
console.log(esPare(3))


//5 Crea un array llamado frutas,
//  cuyo valor sea ['aguacate','uva','albaricoque'].
//• Muestra el primer y el último elemento por índice.
//• Cambia el último por 'mango'.
//• Muestra el array final.

let frutas = ["aguacate", "uva", "albaricoque"]
console.log(frutas[0]);
console.log(frutas[frutas.length-1]);
console.log(frutas[frutas.length-1]= "mango");
console.log(frutas);

;

//6 push / pop / unshift / shift
// Partiendo de la variable llamada cola, y cuyo valor es [],
//  simula una cola de espera:
// Añade 'Ana' y 'Pepe' al final.
// Añade 'Luisa' al inicio
// Atiende a la primera persona que llegó (elimínala y muestra su nombre).
// Muestra el estado final.





//7 forEach / indexOf 
// Dado const llamada items, y cuyo valor sea ['altura','base','cuadrado','bisectriz']:
//• Recorre con forEach imprimiendo índice y valor.
//• Muestra el primer índice donde aparece 'base'
//  y el índice si no se encuentra 'yuxta'



//8 Con la variable llamada letras,
//  y cuyo valor es ['a','b','c','d']:
// Muestra una copia de las dos primeras
//  posiciones.
// Muestra una copia de las 3 ultimas
//  posiciones.



//9 Une [1,2] con [3,4] usando concat
//  y confirma que los originales no cambian.



//10 Con const llamada números y cuyo valor [2,5,8,12]:
//• ¿Alguno es mayor que 10? (some)
//• ¿Todos son mayores que 0? (every)
//• ¿El array contiene el 8? (includes)



//11 Con const llamada cod, y cuyo valor sea [9,8,7]:
// Crea una copia invertida (sin modificar el original) y muéstrala.
// Une el original con guiones - en un string.




//12 Con const llamada base, y cuyo valor es [1,2,3],
//  crea un nuevo array con los cuadrados de
//cada número.



//13 Con const llamada pagos, y cuyo valor es [10, 20, 5],
//  calcula el total acumulado.



14// Ordena numéricamente let, llamadadesorden,
//  y cuyo valor es [10, 2, 1, 20] en ascendente y
// luego en descendente.





