
//1//
let curso = "JS Básico";
function mostrar(){
    let tema= "Funciones";

}
mostrar();

//2.2// Crea una función que reciba
//  un nombre y devuelva un saludo que lo incluya.

function saludar(nombre){
let saludo = `Hola, ${nombre}`;
return saludo
}

console.log(saludar("Alejandro"));

function saludarSinReturn(nombre){
    console.log(`Hola que tal ${nombre}`)
}

console.log(saludarSinReturn("Alejandro"))

//2.3 Escribe una función llamada sumar(a, b)
//  que devuelva la suma de dos números.
//  Guarda el resultado en una variable
//  y muéstralo por consola.

function sumar(a, b){
    let sumatorio= a + b
    return sumatorio
}
console.log(sumar(5, 5));

function sumarno(a, b){
    console.log(a+b)
}
sumarno(3,5);

//2.4 Escribe una función llamada
//  mostrarCurso() que use una variable
//  global llamada curso y una variable local
//  llamada tema. Devuelve un string
//  que combine ambas y muéstralo
//  por consola.

let cursito = "Javascript"

function mostrarCurso(){
    let temita = "funciones"
    let union = cursito+ "-" + temita;
    return union

}
console.log(mostrarCurso());

//2.5 Escribe una función llamada
// multiplicar(a, b) que devuelva
//  el producto de dos números
//  Guarda el resultado en una
//  variable y muéstralo por consola.

function multiplicar(a, b){
    let multiplicacion = a*b
    return multiplicacion;
}
console.log(multiplicar(5, 3));

function multiplicarno(a,b){
    console.log(a*b);
}
console.log(multiplicarno(3, 3))


//2.6 Crea una función llamada
//  presentar(nombre, edad)
//  que devuelva el string
//  "Me llamo <nombre> y tengo <edad> años".
//  Guarda el retorno y muéstralo
//  por consola.

function presentar(nombre, edad){
    let presentacion =`Me llamo ${nombre} y tengo ${edad} años`;
    return presentacion;

}
console.log(presentar("Alejandro","31"))

//3 Declara una constante miLogger
//  y asígnale una función que reciba
//  un mensaje y lo imprima
// con el prefijo LOG:.
// Llama a miLogger('probando').


const miLogger= function(mensajito){
    let mensaje = "LOG" + mensajito;
    return mensaje;
}
console.log(miLogger("probando"));

const mifuturo= (apellido) => console.log("Me llamo Alejandro "+ apellido);

console.log(mifuturo("Marin"));


//4 Crea una función flecha esPar(n) que
//  devuelva true si n es par y false si no.
// Pruébala con 3 y 10.

const esPar = (n) => n %2 ===0;

console.log(esPar(5))

//5 Crea un array llamado frutas,
//  cuyo valor sea ['aguacate','uva','albaricoque'].

let frutas = ["aguacate", "uva", "albaricoque"]
console.log(frutas[0]);
console.log(frutas[frutas.length -1]);

//6 push / pop / unshift / shift
// Partiendo de la variable llamada cola, y cuyo valor es [],
//  simula una cola de espera:
// Añade 'Ana' y 'Pepe' al final.
// Añade 'Luisa' al inicio
// Atiende a la primera persona que llegó (elimínala y muestra su nombre).
// Muestra el estado final.

let cola=[]
cola.push("Ana");
cola.push("Pepe");
cola.unshift("Luisa");



console.log(cola)
const PrimeraPersonaAtendida = cola.shift();
console.log("primera persona atendida", PrimeraPersonaAtendida);
console.log(cola)


//7 forEach / indexOf 
// Dado const llamada items, y cuyo valor sea ['altura','base','cuadrado','bisectriz']:
//• Recorre con forEach imprimiendo índice y valor.
//• Muestra el primer índice donde aparece 'base'
//  y el índice si no se encuentra 'yuxta'

const items =["altura", "base", "cuadrado", "bisectriz"]
items.forEach ((valor, indice)=>{
    console.log("Valor e indice:", valor, "-", indice);

}
)

console.log("Primer indice donde aparece base:", items.indexOf("base"));
console.log("Primer indice donde aparece yuxta:", items.indexOf("yuxta"));

//8 Con la variable llamada letras,
//  y cuyo valor es ['a','b','c','d']:
// Muestra una copia de las dos primeras
//  posiciones.
// Muestra una copia de las 3 ultimas
//  posiciones.

let letras = ["a", "b", "c", "d"]

const copiaLetras = letras.slice(0,2)
console.log("Muestra las dos primeras posiciones", copiaLetras);
const copiaLetras2 = letras.slice(-3)

console.log("Muestra una copia de las 3 ultimas posiciones", copiaLetras2);

//9 Une [1,2] con [3,4] usando concat
//  y confirma que los originales no cambian.

let numerito1= [1,2]
let numerito2= [3,4]

let valoresUnidos= numerito1.concat(numerito2);

console.log("Concatenacion de numeros", valoresUnidos);
console.log(numerito1);
console.log(numerito2);

//10 Con const llamada números y cuyo valor [2,5,8,12]:
//• ¿Alguno es mayor que 10? (some)
//• ¿Todos son mayores que 0? (every)
//• ¿El array contiene el 8? (includes)

const numerados = [2,5,8,12]
console.log("Alguno es mayor que 10?", numerados.some(num => num > 10))
console.log("Todos son mayores que 0?", numerados.every(num => num > 0))
console.log("El array contiene el número 8?", numerados.includes(8))

//11 Con const llamada cod, y cuyo valor sea [9,8,7]:
// Crea una copia invertida (sin modificar el original) y muéstrala.
// Une el original con guiones - en un string.

const cod = [9,8,7];

const copiaInvertida = [...cod].reverse();
console.log("Copia invertida sin modificar el original", copiaInvertida );
console.log("Original en string separado por guiones", cod.join("-"));


//12 Con const llamada base, y cuyo valor es [1,2,3],
//  crea un nuevo array con los cuadrados de
//cada número.

const base= [1,2,3]

const baseCuadrado= base.map((elem)=> elem**2);

console.log("New array con los elementos al cuadrado", baseCuadrado);

//13 Con const llamada pagos, y cuyo valor es [10, 20, 5],
//  calcula el total acumulado.

const pagos = [10, 20, 5]

const totalAcumulado= pagos.reduce((acc, num)=> acc + num, 0);

console.log("Este es el total acumulado", totalAcumulado);

14// Ordena numéricamente let, llamadadesorden,
//  y cuyo valor es [10, 2, 1, 20] en ascendente y
// luego en descendente.

let llamadaDesorden = [10, 2, 1, 20];
const OrdenAscedente = llamadaDesorden.sort((num1, num2)=> num1 - num2);
console.log("orden descendente", llamadaDesorden.sort((num1, num2) => num2-num1));

console.log(OrdenAscedente);



