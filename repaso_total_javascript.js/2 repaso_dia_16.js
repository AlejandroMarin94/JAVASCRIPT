
//1//


//2.2// Crea una función que reciba
//  un nombre y devuelva un saludo que lo incluya.

function saludar(nombre){
    console.log(`Hola que tal estas ${nombre}`);
}

saludar("Alejandro");




//2.3 Escribe una función llamada sumar(a, b)
//  que devuelva la suma de dos números.
//  Guarda el resultado en una variable
//  y muéstralo por consola.

function sumar(a,b){
    return a+b;
}
let resultado= sumar(3,2);
console.log(resultado);


//2.4 Escribe una función llamada
//  mostrarCurso() que use una variable
//  global llamada curso y una variable local
//  llamada tema. Devuelve un string
//  que combine ambas y muéstralo
//  por consola.

let curso = "clase";

function mostrarCurso(){
    let tema= "matematicas";
    console.log(`He pasado de ${curso} y he aprobado ${tema}`);

}

mostrarCurso();


//2.5 Escribe una función llamada
// multiplicar(a, b) que devuelva
//  el producto de dos números
//  Guarda el resultado en una
//  variable y muéstralo por consola.

function multiplicar(a,b){
    return a*b;
}
console.log(multiplicar(3,2));



//2.6 Crea una función llamada
//  presentar(nombre, edad)
//  que devuelva el string
//  "Me llamo <nombre> y tengo <edad> años".
//  Guarda el retorno y muéstralo
//  por consola.

function presentar(nombre, edad){
    return (`Hola me llamo ${nombre} y tengo ${edad} años`);
    
}
let mensajito =presentar("Alejandro",31);
console.log(mensajito);





//3 Declara una constante miLogger
//  y asígnale una función que reciba
//  un mensaje y lo imprima
// con el prefijo LOG:.
// Llama a miLogger('probando').


    
const miLogger = (mensajito) => {
    console.log(`LOG: ${mensajito}`);

}

miLogger("probando");


//4 Crea una función flecha esPar(n) que
//  devuelva true si n es par y false si no.
// Pruébala con 3 y 10.

let esPar = (n) =>{
    if(n %2 ===0);
    return "true";
    }


    console.log(esPar(10));

//5 Crea un array llamado frutas,
//  cuyo valor sea ['aguacate','uva','albaricoque'].

let frutas = [ "aguacate", "uva", "albaricoque" ]

console.log(frutas[0]);


//6 push / pop / unshift / shift
// Partiendo de la variable llamada cola, y cuyo valor es [],
//  simula una cola de espera:
// Añade 'Ana' y 'Pepe' al final.
// Añade 'Luisa' al inicio
// Atiende a la primera persona que llegó (elimínala y muestra su nombre).
// Muestra el estado final.

let cola = []
cola.push("Ana");
cola.push("Pepe");
console.log(cola);
cola.unshift("Luisa");
console.log(cola);

const PrimeraPersonaAtendida = cola.shift()
console.log("Primera persona atendida", PrimeraPersonaAtendida);
console.log(cola);






//7 forEach / indexOf 
// Dado const llamada items, y cuyo valor sea ['altura','base','cuadrado','bisectriz']:
//• Recorre con forEach imprimiendo índice y valor.
//• Muestra el primer índice donde aparece 'base'
//  y el índice si no se encuentra 'yuxta'

const items = ["altura", "base", "cuadrado", "bisectriz"];

items.forEach((elemento,idx)=>{
    console.log(elemento,idx);
});

console.log(items.indexOf("base"));
console.log(items.indexOf("yuxta"));






//8 Con la variable llamada letras,
//  y cuyo valor es ['a','b','c','d']:
// Muestra una copia de las dos primeras
//  posiciones.
// Muestra una copia de las 3 ultimas
//  posiciones.
let letras = ['a','b','c','d']
console.log(letras.slice(0,2));
console.log(letras.slice(-3));


//9 Une [1,2] con [3,4] usando concat
//  y confirma que los originales no cambian.

let variable1= [1,2];
let variable2= [3,4];

let Unidos= variable1.concat(variable2);
console.log(Unidos);




//10 Con const llamada números y cuyo valor [2,5,8,12]:
//• ¿Alguno es mayor que 10? (some)
//• ¿Todos son mayores que 0? (every)
//• ¿El array contiene el 8? (includes)

const numeros = [2,5,8,12] 
const NumeroPar= numeros.some(n=>n %2===0);
console.log(NumeroPar);
const MayorQue = numeros.every(n=>n>0);
console.log(MayorQue);
const OchoInc = numeros.includes(8);
console.log(OchoInc);



//11 Con const llamada cod, y cuyo valor sea [9,8,7]:
// Crea una copia invertida (sin modificar el original) y muéstrala.
// Une el original con guiones - en un string.

const cod =[9,8,7];
const CopiaInvertida = [...cod].reverse();
console.log(CopiaInvertida);

const Union = cod.join("-");
console.log(Union);




//12 Con const llamada base, y cuyo valor es [1,2,3],
//  crea un nuevo array con los cuadrados de
//cada número.

const base = [1,2,3]
const arrayCuadrado = base.map(n=>n**2);
console.log(arrayCuadrado);




//13 Con const llamada pagos, y cuyo valor es [10, 20, 5],
//  calcula el total acumulado.

const pagos = [10, 20, 5];
const PagosAcumulados = pagos.reduce((acc, n)=> acc +n, 0);
console.log(PagosAcumulados);




14// Ordena numéricamente let, llamadadesorden,
//  y cuyo valor es [10, 2, 1, 20] en ascendente y
// luego en descendente.

let desorden = [ 10, 2, 1, 20];
let Ascendente = desorden.sort((a,b)=> a-b);
console.log(Ascendente);
let Descendente = desorden.sort((a,b)=> b-a);
console.log(Descendente);







