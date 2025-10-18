// Ejercicio 1 - Debéis sumar correctamente un número y un booleano("1") usando conversión explicita con Number.
const numero = 10;
const bool = Boolean('1');
const suma = Number(numero) + Number(bool);

console.log('Ej1 →', suma);

// Ejercicio 2 - Calculadme el área de un cuadrado usando dos operadores aritméticos diferentes.
const lado = 5;

// Opción multiplicación
const areaA = lado * lado;

// Opción exponente
const areaB = lado ** 2;

console.log('Ej2 → A:', areaA, 'B:', areaB);

//Ejercicio 3 - Comprobar si el numero 25 es distinto de 22.
let num1 = 22;
let num2 = 25;

if (num1 === num2) {
  console.log(`Ej3 → Los numeros ${num1} y ${num2} son iguales`);
} else {
  console.log(`Ej3 → Los numeros ${num1} y ${num2} son distintos`);
}

/* 
Ejercicio 4.Usando if -- else if -- else, con el booleano tienePermisos = true y la edad de 18 años, 
verificar si un usuario puede acceder. Debe cumplir ambas condiciones, y sino, diferenciar entre las que no.
*/
const tienePermisos = true;
const edad = 18;

if (tienePermisos === true && edad >= 18) {
  console.log('Ej4 → Acceso CONCEDIDO');
} else if (tienePermisos === true) {
  console.log('Ej4 → Tiene permisos pero no la edad requerida');
} else if (edad >= 18) {
  console.log('Ej4 → Tiene la edad requerida pero no permisos');
} else {
  console.log('Ej4 → No cumple ninguno de los requisitos');
}

// Ejercicio 5. Usar un ternario para decidir si un alumno esta aprobado. Partimos de la nota = 6.5.
const nota = 6.5;
const estadoAlumno = nota >= 5 ? 'Aprobado' : 'Suspenso';
console.log('Ej5 →', estadoAlumno);

/*
Ejercicio 6. Con una variable de una fruta aleatoria hacer con Switch una diferenciación  de posibles 
frutas y mostrar por pantalla que cuesta cada una usando interpolación del texto en el console.log.
*/

const fruta = 'kiwi';
const precio = 1.2;

switch (fruta) {
  case 'manzana':
    console.log(
      `Ej6 → Para la fruta ${fruta} su precio es de ${precio * 1.1}€`
    );
    break;
  case 'naranja':
    console.log(
      `Ej6 → Para la fruta ${fruta} su precio es de ${precio * 0.9}€`
    );
    break;
  case 'plátano':
    console.log(
      `Ej6 → Para la fruta ${fruta} su precio es de ${precio * 1.5}€`
    );
    break;
  case 'pera':
    console.log(
      `Ej6 → Para la fruta ${fruta} su precio es de ${precio * 0.7}€`
    );
    break;
  case 'kiwi':
    console.log(
      `Ej6 → Para la fruta ${fruta} su precio es de ${precio * 1.3}€`
    );
    break;
  default:
    console.log(`Ej6 → No disponemos de la furta ${fruta}`);
    break;
}

// Ejercicio 7. Con bucle for, preséntame por pantalla una cuenta desde el numero 1 al 15.
console.log('Ej7 →');
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// Ejercicio 8. Con bucle while, preséntame una salida por consola que muestre los números del 1 al 30 que sean pares
console.log('Ej8 →');
let num = 1;
while (num <= 30) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// Ejercicio 9. Con bucle do while, simula que estas haciendo una acción hasta la vez 5, pero presentando también la vez 0
console.log('Ej9 →');
let vez = 0;
do {
  console.log(`Ejecución #${vez}`);
  vez++;
} while (vez <= 5);
