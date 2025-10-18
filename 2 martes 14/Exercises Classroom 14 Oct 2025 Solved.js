console.log("=== Solución ejercicios clase 14-Octubre-2025 ===");

console.log("\n1) Ámbito local y global");

let curso = "JS Básico";

function mostrar() {
  let tema = "funciones";
  console.log("Variable global: ", curso);
  console.log("Variable local: ", tema);
}

mostrar();
// comentada para evitar el fallo
//console.log(tema); // Da ReferenceError: tema is not defined

///////////////////////////////////////
console.log("\n2) Return en funciones");

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

const message = saludar("Juan");
console.log("Llamada a funcion saludar: ", message);

function saludarSinReturn(nombre) {
  console.log(`Hola, ${nombre}`);
}

console.log(saludarSinReturn("Pepe"));

///////////////////////////////////////
console.log("\n3) Funcion primera clase");

const miLogger = (message) => console.log("LOG: ", message);

miLogger("probando");


///////////////////////////////////////
console.log("\n4) Funcion flecha");

const esPar = (num) => num % 2 === 0;

console.log("Funcion esPar con 3: ",esPar(3));
console.log("Funcion esPar con 10: ",esPar(10));


///////////////////////////////////////
console.log("\n5) Arrays: creación y acceso");

let frutas = ["aguacate", "uva", "albaricoque"];

console.log("Elemento en el primer indice: ", frutas[0]);
console.log("Elemento en el último indice: ", frutas[frutas.length - 1]);

frutas[frutas.length - 1] = "mango";
console.log("Array completo con último elemento cambiado: ", frutas);


///////////////////////////////////////
console.log("\n6) push / pop / unshift / shift");

let cola = [];
cola.push("Ana");
cola.push("Pepe");
cola.unshift("Luisa");

console.log("Cola antes de comenzar a atender: ", cola);

const primeraPersonaAtendida = cola.shift();
console.log("Primera persona atendida: ", primeraPersonaAtendida);

console.log("Cola restante por atender: ", cola);


///////////////////////////////////////
console.log("\n7) forEach / indexOf");

const items = ["altura", "base", "cuadrado", "bisectriz"];

items.forEach((item, index) => {
    console.log("Valor e índice: ", item, "-", index);
})

console.log("Índice donde aparece 'base': ", items.indexOf("base"));
console.log("Índice donde aparece 'yuxta': ", items.indexOf("yuxta"));


///////////////////////////////////////
console.log("\n8) slice");

let letras = ["a", "b", "c", "d"];

const copiaLetras = letras.slice(0, 2);
console.log("Copia con las 2 primeras posiciones: ", copiaLetras);

const copiaLetras2 = letras.slice(-3);
console.log("Copia con las 3 últimas posiciones: ", copiaLetras2);


///////////////////////////////////////
console.log("\n9) concat");

const numeros1 = [1, 2];
const numeros2 = [3, 4];

const valoresUnidos = numeros1.concat(numeros2);

console.log("Array con valores concatenados: ",valoresUnidos);
console.log("Primer array de números original: ", numeros1);
console.log("Segundo array de números original: ", numeros2);


///////////////////////////////////////
console.log("\n10) some / every / includes");

const numeros = [2, 5, 8, 12];

console.log("¿Algúno es mayor que 10?: ", numeros.some(num => num > 10));
console.log("¿Todos son mayores que 0?: ", numeros.every(num => num > 0));
console.log("¿El array contiene el 8?: ", numeros.includes(8));


///////////////////////////////////////
console.log("\n11) reverse / join");

const cod = [9, 8, 7];

const copiaInvertida = [...cod].reverse();
console.log("Copia invertida de cod: ", copiaInvertida);

console.log("Original en String separado por guiones: ", cod.join("-"));


///////////////////////////////////////
console.log("\n12) map");

const base = [1, 2, 3];

const newArray = base.map((elem) => elem**2);
console.log("Array 'base' elevado al cuadrado: ", newArray);


///////////////////////////////////////
console.log("\n13) reduce");

const pagos = [10, 20, 5];

const totalAcumulado = pagos.reduce((acc, num) => acc + num, 0);
console.log("Total acumulado de pagos: ", totalAcumulado);


///////////////////////////////////////
console.log("\n14) sort");

let desorden = [10, 2, 1, 20];

console.log("Variable 'desorden' ordenada ascendente: ", desorden.sort((num1, num2) => num1 - num2));
console.log("Variable 'desorden' ordenada descendente: ", desorden.sort((num1, num2) => num2 - num1));