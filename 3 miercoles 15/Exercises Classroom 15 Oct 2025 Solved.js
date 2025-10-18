console.log("=== Solución ejercicios clase 15-Octubre-2025 ===");

/////////////////////////////////////
console.log("\n1) Crear un array bidimensional");

const matriz = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Matriz completa: ", matriz);
console.log("Numero fila 2 Columna 3: ", matriz[1][2]);


/////////////////////////////////////
console.log("\n2) Recorrido completo");

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento fila ${i}, columna: ${j}: `,matriz[i][j]); 
  }
}

let sumaTotal = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
   sumaTotal += matriz[i][j];
  }
}

console.log("Suma de todos los elementos de la matriz: ",sumaTotal);


/////////////////////////////////////
console.log("\n3) Array tridimensional");

const matrizCubo = [
  [[1,2], [5,7]],
  [[6,3], [9,8]]
];

for (let i = 0; i < matrizCubo.length; i++) {
  for (let j = 0; j < matrizCubo[i].length; j++) {
    for (let k = 0; k < matrizCubo[i][j].length; k++) {
      console.log(`Elemento fila ${i}, columna: ${j}, dim: ${k}: `,matrizCubo[i][j][k]); 
    }
  }
}


/////////////////////////////////////
console.log("\n4) Función recursiva simpole");

function cuentaAtras(num = 5) {
  if (num === 0) return;
  console.log(num);
  cuentaAtras(num-1);
}

cuentaAtras();


/////////////////////////////////////
console.log("\n5) Suma recursiva");

function sumaHastaN(n) {
  if (n <= 1) return n;
  return n + sumaHastaN(n-1)
}

console.log(sumaHastaN(5)); //15
// 5 + sumaHastaN(4) = 4 + sumaHastaN(3) = 3 + sumaHastaN(2) = 2 + sumaHastaN(1) = 1 


/////////////////////////////////////
console.log("\n6) Factorial recursivo");

function factorial(num) {
  if ( num === 0) return 1;
  return num * factorial( num - 1)
}

console.log(factorial(5)); //120


/////////////////////////////////////
console.log("\n7) Objeto básico");

const persona = {
  nombre: "Alejandro",
  edad: 40,
  ciudad: "Benalmádena"
} 

console.log("PERSONA:");
console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);
console.log("Ciudad: ", persona.ciudad);

persona.profesion = "Teacher Tech";
console.log("Objeto persona con profesión añadida: ", persona);

persona.edad = 45;
console.log("Objeto persona con edad actualizada: ", persona)

persona.saludar = function() {
  return `Hola, soy ${this.nombre}`;
}
console.log("Función saludar del objeto persona: ",persona.saludar());


/////////////////////////////////////
console.log("\n8) Array de objetos");

const familia = [
  {nombre: "Alejandro", edad: 45},
  {nombre: "Vanessa", edad: 45},
  {nombre: "Helena", edad: 10}
]

familia.forEach(persona => {
  console.log(persona.nombre);
})


/////////////////////////////////////
console.log("\n9) Desectructuración de arrays");

let colores = ["azul", "verde", "rojo"];

const [color1, color2, color3] = colores;

console.log("Colores en variables por desectructuring: ",color1, color2, color3);


/////////////////////////////////////
console.log("\n10) Desectructuración parcial");

let numeros = [246, 89, 53];

const [n1, ,n3] = numeros;

console.log("Numeros primero y tercero en variables por desectructuring: ",n1, n3);


/////////////////////////////////////
console.log("\n11) Desectructuración de objetos");

const {nombre, edad } = persona;

console.log("Propiedades de objeto en variables separadas por desectructuring: ",nombre, edad);


/////////////////////////////////////
console.log("\n12) Desectructuración con nombre cambiado");

const {nombre: nombrePersona, edad: edadPersona } = persona;

console.log("Propiedades de objeto en variables separadas y con nombre cambiado por desectructuring: ",nombrePersona, edadPersona);