
//1 Declara una matriz de 3x3 que contenga números del 1 al 9 distribuidos por filas.
// Después, muestra la matriz completa por consola.
// A partir del array anterior, muestra únicamente el número que está en la segunda fila
// y tercera columna

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

console.log(matriz[1][0]);




//2 Recorre un array bidimensional con dos bucles
//  for anidados y muestra todos los
//valores en consola, uno por línea.
//Usando la misma matriz, calcula la suma total de los valores contenidos en ella y
//muestra el resultado en consola.
for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        console.log(matriz[i][j]);
        
    }
}

let matriz2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
let suma= 0;
for (let i=0;i<matriz2.length; i++){
    for(let j=0; j<matriz2[i].length; j++){
        suma+=matriz2[i][j];
    }
        
      
        
    
}
console.log(suma);







//3. Array tridimensional
//Crea un array tridimensional (por ejemplo, 2x2x2) y muestra uno de los valores
//internos accediendo por índices.

const cubo = [
  [ 
    [1, 2],
    [3, 4]
  ],
  [ 
    [5, 6],
    [7, 8]
  ]
];

console.log(cubo[0][1][0]);





//4. Función recursiva simple
//Crea una función recursiva que cuente hacia atrás desde 5 hasta 1 y muestre los
//números en consola.

function CuentaAtras(n){
    if(n<1) return 0;
    console.log(n);
    return  CuentaAtras(n-1);
}
console.log(CuentaAtras(5));

    
    




//5 5. Suma recursiva Define una función recursiva
//  que calcule la suma de los números desde 1 hasta n 
// (el valor n será pasado como parámetro).

function SumaRecursiva(n){
    if(n<1) return 0;
    return n+ SumaRecursiva(n-1);

}
console.log(SumaRecursiva(5));


   

 //6. Factorial recursivo Crea una función recursiva 
 // que calcule el factorial de un número dado. 
 // Ejemplo: factorial(5) → 120.

 function Factorial(n){
    if(n<1) return 1;
    return n* Factorial(n-1);
 }
 console.log(Factorial(5));
 

 
 



 // 7. Objeto básico Crea un objeto llamado persona
 //  con las propiedades nombre, edad y ciudad.
 //  Después, muestra los valores de cada propiedad
 //  en la consola. Usando el objeto anterior, 
 // añade una nueva propiedad profesión y muestra 
 // el objeto actualizado. Modifica el valor
 //  de la propiedad edad en el objeto persona y 
 // comprueba el cambio en consola.Añade al objeto 
 // persona un método saludar() que devuelva un 
 // mensaje con su nombre.

 const persona = {
  nombre: "Alejandro",
  edad: 30,
  ciudad: "Cártama"
};
console.log(persona.nombre);
console.log(persona.edad);
persona["profesion"]="Estudiante";
console.log(persona);
persona.edad=31;
console.log(persona);

persona["saludo"]= function saludar(){
    console.log(`Hola me llamo ${this.nombre}` );
    
}

persona.saludo()

persona.caminar = function caminar(){
    console.log("Hola, estoy dando un paseo");
}
persona.caminar();



 //8 Crea un array que contenga tres objetos 
 // persona con diferentes valores. Usando el array 
 // anterior, recorre todos los objetos y muestra 
 // el valor de cada propiedad nombre.

 const personas = [
  {
    nombre: "Alejandro",
    edad: 30,
    ciudad: "Cártama"
  },
  {
    nombre: "Lucía",
    edad: 25,
    ciudad: "Granada"
  },
  {
    nombre: "Carlos",
    edad: 40,
    ciudad: "Sevilla"
  }
];
       
for(let i=0; i<personas.length; i++){
    console.log(personas[i].nombre);
    
}


 //9. Desestructuración de array Crea un array con tres 
 // colores. Usa desestructuración para asignar cada color 
 // a una variable distinta y muéstralas por consola.
 const colores = ["rojo", "azul", "verde"];

 const [a, b,c]=colores;
 console.log(a);
 
 
 //10 Desestructuración parcial Usa desestructuración
 //  para obtener solo el primer y el tercer elemento
 // de un array de tres números.
const frutitas = ["manzana", "plátano", "naranja"];

const [ primera, ,tercera] = frutitas;
console.log(primera);



  //11 Desestructuración de objetos Usa el objeto persona
  //  y aplica desestructuración para extraer las propiedades
  //  nombre y edad en variables separadas.
//
const personilla = {
  edad: 30,
  profesion: "Desarrollador web",
  lugar: "Cártama"
};
const {edad, profesion,lugar}=personilla;
console.log(lugar);


 //12. Desestructuración con nombre cambiado Usa
 //  desestructuración para obtener las propiedades
 //  del objeto persona, pero asignando nuevos nombres
 //  a las variables (nombrePersona, edadPersona

 const personitas = {
  nombre: "Lucía",
  añitos: 28,
  trabajo: "Diseñadora gráfica",
  LUGAR: "Málaga"
};

 const {nombre:nombrePersona, añitos:edadPersona, trabajo, LUGAR}=personitas

 console.log(nombrePersona);
 
    
 