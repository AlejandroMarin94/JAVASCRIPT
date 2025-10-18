// 9 de octubre de 2025
// =============================================================
// EJEMPLOS BÁSICOS Y COMPLETOS — MÓDULO: JavaScript Básico
// =============================================================

// -------------------------------------------------------------
// ESTRUCTURA DEL CÓDIGO, COMENTARIOS Y PUNTO Y COMA
// -------------------------------------------------------------
console.log("=== Estructura del código ==="); // sentencia
// Comentario de una línea
/* Comentario
   de varias líneas */
console.log("Comentarios OK");
console.warn("Mensaje tipo advertencia");
console.error("Mensaje para mostrar errores");

// -------------------------------------------------------------
// VARIABLES Y CONSTANTES
// -------------------------------------------------------------
console.log("\n=== Variables y constantes ===");
let variableEditable = "Hola";
const CONSTANTE_PI = 3.1416;
variableEditable = "Hola de nuevo";
console.log(variableEditable, CONSTANTE_PI);

// -------------------------------------------------------------
// PALABRAS RESERVADAS: (solo recordatorio, no se usan como nombres)
// (break, case, catch, class, const, continue, debugger, default, delete…)
// -------------------------------------------------------------

// -------------------------------------------------------------
// ESTILO DE NOMBRADO
// camelCaseType, PascalCase (Clases), snake_case, kebab-case (HTML/CSS), UPPER_SNAKE_CASE (Constantes)
// -------------------------------------------------------------

// -------------------------------------------------------------
// TIPOS DE DATOS: PRIMITIVOS Y COMPLEJOS
// -------------------------------------------------------------
console.log("\n=== Tipos de datos ===");
let s = "texto";           // string
let n = 42;                // number
let b = true;              // boolean
let u;                     // undefined
let nl = null;             // null
let obj = { a: 1, b: 2, c: 3 };        // objeto
let arr = [1, 2, 3];       // array
const fn = function() {};   // función
console.log(typeof s, typeof n, typeof b, typeof u, typeof nl, typeof obj, Array.isArray(arr), typeof fn);

// -------------------------------------------------------------
// 6) VALOR VS REFERENCIA
// -------------------------------------------------------------
console.log("\n=== Valor vs Referencia ===");
// Primitivos: por valor
let x = 5;
let y = x; // copia
y = 99;
console.log("x:", x, "y:", y); // x no cambia

// Objetos/Arrays: por referencia
let persona1 = { nombre: "Alejandro" };
let persona2 = persona1;  // referencia al mismo objeto
persona2.nombre = "Luis";
console.log("persona1:", persona1, "persona2:", persona2); // ambas cambian

// Copias independientes (shallow)
let persona3 = { ...persona1 }; // spread
persona3.nombre = "Lola";
console.log("persona1:", persona1, "persona3:", persona3);


// -------------------------------------------------------------
// CONCATENACION VS INTERPOLACION
// -------------------------------------------------------------
console.log("\n=== Concatenación vs Interpolación ===");

// DEFINIMOS VARIABLES Y CONSTANTES
let nameUser = "Alejandro García";
const AGE = 45
const BASEURL = "http://localhost:5173";
let idUser = "097s9a87d987d897sd897d";
let idFavorite = "9879087sd878sd78897";

// TEXTO CONCATENADO
console.log("El profesor se llama "+nameUser+" y tiene "+AGE+" años");

let urlGeneradaConcatenada = BASEURL+"/api/user/"+idUser+"/profile/"+idFavorite;
console.log(urlGeneradaConcatenada);


// TEXTO INTERPOLADO
let url1 = `${BASEURL}/profile`;
let url2 = `${BASEURL}/products`;
let url3 = `${BASEURL}/favorites`;

console.log(url1);
console.log(url2);
console.log(url3);

let urlGeneradaInterpolada = `${BASEURL}/api/user/${idUser}/profile/${idFavorite}`;
console.log(urlGeneradaInterpolada)
