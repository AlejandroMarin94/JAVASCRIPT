
//1//Crea una variable global llamada curso,
//  y cuyo valor sea 'JS Básico'.
//Dentro de una función mostrar(), 
// crea la variable tema cuyo valor 'Funciones' y muestra
//por consola ambas.
//Luego intenta mostrar dicha variable
//tema fuera de la función (¿qué ocurre y p

let curso = "JS Básico";

function mostrar(){
    let tema = "Funciones"
    console.log(`Curso: ${curso} Tema: ${tema}`);
    
}
mostrar()






//2.2// Crea una función que reciba
//  un nombre y devuelva un saludo que lo incluya.

function saludar(name){
    console.log(`Hola como estás ${name}`);
    
}
saludar("Alejandro");
   
    






//2.3 Escribe una función llamada sumar(a, b)
//  que devuelva la suma de dos números.
//  Guarda el resultado en una variable
//  y muéstralo por consola.

let Suma = (a,b) => {return a+b}
    
    


console.log(Suma(3,2));



//2.4 Escribe una función llamada
//  mostrarCurso() que use una variable
//  global llamada curso y una variable local
//  llamada tema. Devuelve un string
//  que combine ambas y muéstralo
//  por consola.

let cursillo= "Programacion"
function mostrarCurso(){
let tema ="CSS"
return `El curso es ${cursillo} y el tema que toca es ${tema}`;


}

console.log(mostrarCurso());


//2.5 Escribe una función llamada
// multiplicar(a, b) que devuelva
//  el producto de dos números
//  Guarda el resultado en una
//  variable y muéstralo por consola.

let resultadoFunction=(a,b)=>{
    return a*b
}

console.log(resultadoFunction(5,5));






//2.6 Crea una función llamada
//  presentar(nombre, edad)
//  que devuelva el string
//  "Me llamo <nombre> y tengo <edad> años".
//  Guarda el retorno y muéstralo
//  por consola.

function presentar(nombre,edad){
    return `Me llamo ${nombre} y tengo ${edad} años`;
}
console.log(presentar("Alejandro",31));





//3 Declara una constante miLogger
//  y asígnale una función que reciba
//  un mensaje y lo imprima
// con el prefijo LOG:.
// Llama a miLogger('probando').

const miLogger =(mensaje)=> console.log("LOG: " + mensaje);

miLogger("probando")


//4 Crea una función flecha esPar(n) que
//  devuelva true si n es par y false si no.
// Pruébala con 3 y 10.

const esPar =(n)=>{
     if(n%2===0){
        return true;
    } else{ 
        return false;
    }
}
console.log(esPar(11));





//5 Crea un array llamado frutas,
//  cuyo valor sea ['aguacate','uva','albaricoque'].
//• Muestra el primer y el último elemento por índice.
//• Cambia el último por 'mango'.
//• Muestra el array final.

const frutas =["aguacate", "uva", "albaricoque"];
console.log(frutas[0]);
console.log(frutas[frutas.length-1]);

frutas[2]="mango";
console.log(frutas);

//6 push / pop / unshift / shift
// Partiendo de la variable llamada cola, y cuyo valor es [],
//  simula una cola de espera:
// Añade 'Ana' y 'Pepe' al final.
// Añade 'Luisa' al inicio
// Atiende a la primera persona que llegó (elimínala y muestra su nombre).
// Muestra el estado final.

let cola= [];
cola.push("Ana");
cola.push("Pepe");
console.log(cola);
cola.unshift("Luisa");
console.log(cola);
const primeraPersonaAtendida=cola.shift();
console.log(`${primeraPersonaAtendida} la primera persona de la lista ha sido atendida`);

console.log(cola);


//7 forEach / indexOf 
// Dado const llamada items, y cuyo valor sea ['altura','base','cuadrado','bisectriz']:
//• Recorre con forEach imprimiendo índice y valor.
//• Muestra el primer índice donde aparece 'base'
//  y el índice si no se encuentra 'yuxta'

const items = ['altura','base','cuadrado','bisectriz'];
items.forEach((elem, idx)=>{
    console.log(elem, idx);
    
}
)

    console.log("Primer indice donde aparece base: " + items.indexOf("base"));
    console.log("Primer indice donde aparece yuxta: " + items.indexOf("yuxta"));
    

//8 Con la variable llamada letras,
//  y cuyo valor es ['a','b','c','d']:
// Muestra una copia de las dos primeras
//  posiciones.
// Muestra una copia de las 3 ultimas
//  posiciones.

let letras = ['a','b','c','d'];
console.log(letras.slice(0,2));
console.log(letras.slice(-3));






//9 Une [1,2] con [3,4] usando concat
//  y confirma que los originales no cambian.

let aa= [1,2];
let bb= [3,4];

let aabb= aa.concat(bb);
console.log(aabb);




//10 Con const llamada números y cuyo valor [2,5,8,12]:
//• ¿Alguno es mayor que 10? (some)
//• ¿Todos son mayores que 0? (every)
//• ¿El array contiene el 8? (includes)

const numeros = [2,5,8,12];

console.log(numeros.some(n=>n>10));
console.log(numeros.every(n=>n>1));
console.log(numeros.includes(8));



//11 Con const llamada cod, y cuyo valor sea [9,8,7]:
// Crea una copia invertida (sin modificar el original) y muéstrala.
// Une el original con guiones - en un string.

const cod = [9,8,7];
const codReverse= cod.reverse([...cod]);
console.log(codReverse);

const Unidos = cod.join("-");
console.log(Unidos);



//12 Con const llamada base, y cuyo valor es [1,2,3],
//  crea un nuevo array con los cuadrados de
//cada número.

const base = [1,2,3];

const newArray = base.map((elem)=>elem*2);



console.log(newArray);




//13 Con const llamada pagos, y cuyo valor es [10, 20, 5],
//  calcula el total acumulado.

const pagos = [10, 20, 5]
let suma =0;
pagosTotal = pagos.reduce((acc,elem)=>acc+elem,0);


console.log(pagosTotal);



14// Ordena numéricamente let, llamadadesorden,
//  y cuyo valor es [10, 2, 1, 20] en ascendente y
// luego en descendente.

let desorden = [10, 2, 1, 20];

let desordenador= desorden.sort((a,b)=>a-b);
console.log(desordenador);

let ordenar= desorden.sort((a,b)=>b-a);
console.log(ordenar);






