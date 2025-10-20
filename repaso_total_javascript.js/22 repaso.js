
//1//


//2.2// Crea una función que reciba
//  un nombre y devuelva un saludo que lo incluya.

function Saludar(nombre){
    console.log("Hola como estás " + nombre);
    
}
Saludar("Alejandro");


//2.3 Escribe una función llamada sumar(a, b)
//  que devuelva la suma de dos números.
//  Guarda el resultado en una variable
//  y muéstralo por consola.

let Sumados= function Sumarte(a,b){
    return a + b;

}
console.log(Sumados(3,5));;






//2.4 Escribe una función llamada
//  mostrarCurso() que use una variable
//  global llamada curso y una variable local
//  llamada tema. Devuelve un string
//  que combine ambas y muéstralo
//  por consola.

let curso = "tercero";

function mostrarCurso(){
    let tema= "matematicas";
    console.log(`Este ${curso}, tiene ${tema}`
);   
}

mostrarCurso();






//2.5 Escribe una función llamada
// multiplicar(a, b) que devuelva
//  el producto de dos números
//  Guarda el resultado en una
//  variable y muéstralo por consola.

let producto=function multiplicar(a,b){
    return a*b;
    
}
console.log(producto(3,3));




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


const miLogger = function Mensajeiimprimir(llamada){
    console.log(`LOG: ${llamada}`);
    
}
miLogger("probando");


    



//4 Crea una función flecha esPar(n) que
//  devuelva true si n es par y false si no.
// Pruébala con 3 y 10.

const Espar= (n)=>{
    if(n %2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(Espar(10));

// OTRA OPCION //
const Espares= (n)=> n%2===0;
console.log(Espares(3));



//5 Crea un array llamado frutas,
//  cuyo valor sea ['aguacate','uva','albaricoque'].
//• Muestra el primer y el último elemento por índice.
//• Cambia el último por 'mango'.
//• Muestra el array final.

let frutas= [ "aguacate", "uva", "albaricoque"];
console.log(frutas[0]);
console.log(frutas[2]);
frutas[2]="mango";
console.log(frutas);







//6 push / pop / unshift / shift
// Partiendo de la variable llamada cola, y cuyo valor es [],
//  simula una cola de espera:
// Añade 'Ana' y 'Pepe' al final.
// Añade 'Luisa' al inicio
// Atiende a la primera persona que llegó (elimínala y muestra su nombre).
// Muestra el estado final.

let cola = [];
cola.push("Ana");
cola.push("Pepe");
console.log(cola);
cola.unshift("Luisa");
console.log(cola);
const PrimeraPersonaAtendida= cola.shift("Luisa");
console.log("Luisa ha sido atendida", PrimeraPersonaAtendida);
console.log(cola);




//7 forEach / indexOf 
// Dado const llamada items, y cuyo valor sea ['altura','base','cuadrado','bisectriz']:
//• Recorre con forEach imprimiendo índice y valor.
//• Muestra el primer índice donde aparece 'base'
//  y el índice si no se encuentra 'yuxta'

const items= ['altura','base','cuadrado','bisectriz'];
items.forEach((elemento,idx)=>{
    console.log(`Indice: ${idx}, Elemento: ${elemento}`);
    
    
})
console.log(items.indexOf("base"));
console.log(items.indexOf("yuxta"));










//8 Con la variable llamada letras,
//  y cuyo valor es ['a','b','c','d']:
// Muestra una copia de las dos primeras
//  posiciones.
// Muestra una copia de las 3 ultimas
//  posiciones.

let letras = ['a','b','c','d'];
console.log(letras[0]);
console.log(letras[1]);
console.log(letras[letras.length-1]);

let ultimos = letras.slice(-3);


console.log(ultimos);






//9 Une [1,2] con [3,4] usando concat
//  y confirma que los originales no cambian.

let concat1= [1,2];
let concat2=[3,4];

let concatUnidos= concat1.concat(concat2);
console.log(concatUnidos);







//10 Con const llamada números y cuyo valor [2,5,8,12]:
//• ¿Alguno es mayor que 10? (some)
//• ¿Todos son mayores que 0? (every)
//• ¿El array contiene el 8? (includes)

const numerillos = [2,5,8,12]
const numeroMayor=numerillos.some(function(n){
   return n>10;
})
console.log(numeroMayor);

const TodosMayores= numerillos.every(function(n){
    return n>0;
})
console.log(TodosMayores);

const Included= numerillos.includes(8)
console.log(Included);








//11 Con const llamada cod, y cuyo valor sea [9,8,7]:
// Crea una copia invertida (sin modificar el original) y muéstrala.
// Une el original con guiones - en un string.


const cod = [9,8,7];
const invertida = [...cod].reverse()
console.log(invertida);
const guiones= cod.join("-");
console.log(guiones);






//12 Con const llamada base, y cuyo valor es [1,2,3],
//  crea un nuevo array con los cuadrados de
//cada número.


const base= [1,2,3];
const Basecuadrado= base.map(n=>n**2);
console.log(Basecuadrado);



//13 Con const llamada pagos, y cuyo valor es [10, 20, 5],
//  calcula el total acumulado.
const pagos = [10, 20, 5];
let suma=0;
const pagosAcumulados= pagos.map(n=>suma+=n);
console.log(pagosAcumulados);







14// Ordena numéricamente let, llamadadesorden,
//  y cuyo valor es [10, 2, 1, 20] en ascendente y
// luego en descendente.

let desorden= [10, 2, 1, 20];

let ordenados= desorden.sort((a,b)=>{
   return a-b;
})
console.log(ordenados);

let desordenados= desorden.sort((a,b)=>{
    return b-a;
})
console.log(desordenados);









