
//1 Declara una matriz de 3x3 que contenga números del 1 al 9 distribuidos por filas.
// Después, muestra la matriz completa por consola.
// A partir del array anterior,
//  muestra únicamente el número que está en la segunda fila
// y tercera columna

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

console.log(matriz[0][0]);
console.log(matriz[1][2]);


  for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        console.log(matriz[i][j]);
        
        
    }
  }

  let sumaTotal= 0

  for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        sumaTotal += matriz[i][j];
        
        
    }
  }
  console.log(sumaTotal);
  



//2 Recorre un array bidimensional con dos bucles
//  for anidados y muestra todos los
//valores en consola, uno por línea.
//Usando la misma matriz, calcula la suma total 
// de los valores contenidos en ella y
//muestra el resultado en consola.





//3. Array tridimensional
//Crea un array tridimensional (por ejemplo, 2x2x2)
//  y muestra uno de los valores
//internos accediendo por índices.

let matriz2 = [

    [
    [1, 2, 3],
    [11, 22, 33]
    ],


    [
    [4, 5, 6],
    [44, 55, 66]
    ],

    [
    [7, 8, 9] ,
    [77, 88, 99]
    ]

];

console.log(matriz2[0][1][1]);



 


//4. Función recursiva simple
//Crea una función recursiva que cuente hacia
//  atrás desde 5 hasta 1 y muestre los
//números en consola.

function cuentaAtras(n){
    if(n<0) return;
    console.log(n);
    cuentaAtras(n-1);
}
cuentaAtras(10);


//5 5. Suma recursiva Define una función recursiva
//  que calcule la suma de los números desde 1 hasta n 
// (el valor n será pasado como parámetro).

function SumaRecursiva(n){
  if(n<=1)return n;
  return n + SumaRecursiva(n-1);


}
console.log(SumaRecursiva(15));


 //6. Factorial recursivo Crea una función recursiva 
 // que calcule el factorial de un número dado. 
 // Ejemplo: factorial(5) → 120.

  function Factorial(n){
    if(n<1) return 1;
    return n* Factorial(n-1);
  }
Factorial(5);

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

  persona = {
    nombre: "Alejandro",
    edad: 31,
    ciudad: "Málaga"

  }
persona.profesion= "estudiando";
console.log(persona);
persona.edad=35;
console.log(persona);

persona.saludar= function Saludar(){
return `Hola me llamo ${this.nombre}`
}
console.log(persona.saludar());





 //8 Crea un array que contenga tres objetos 
 // persona con diferentes valores. Usando el array 
 // anterior, recorre todos los objetos y muestra 
 // el valor de cada propiedad nombre.
 const personas = [
  {
    nombre: "Lucía",
    edad: 28,
    ciudad: "Sevilla"
  },
  {
    nombre: "Carlos",
    edad: 35,
    ciudad: "Valencia"
  },
  {
    nombre: "María",
    edad: 42,
    ciudad: "Bilbao"
  }
];

function MostrarNombre(personas){
  for(let i =0; i<personas.length;i++){
    console.log(personas[i].nombre);
    
    
  }
}
MostrarNombre(personas);






 //9. Desestructuración de array Crea un array con tres 
 // colores. Usa desestructuración para asignar cada color 
 // a una variable distinta y muéstralas por consola.

 const colores = [ "rojo", "amarillo", "azul"];
const [a,b,c] = colores;
console.log(a);
console.log(b);
console.log(c);

 //10 Desestructuración parcial Usa desestructuración
 //  para obtener solo el primer y el tercer elemento
 // de un array de tres números.

 const number =[1,2,3];
 const [uno, ,tres] = number
 console.log(uno);
 console.log(tres);
 
 

  

  //11 Desestructuración de objetos Usa el objeto persona
  //  y aplica desestructuración para extraer las propiedades
  //  nombre y edad en variables separadas.

  persona = {
    nombre: "Alejandro",
    edad: 31,
  }
 const {nombre,edad} = persona;
 console.log(nombre);
 console.log(edad);
 
 
 
 
 

 //12. Desestructuración con nombre cambiado Usa
 //  desestructuración para obtener las propiedades
 //  del objeto persona, pero asignando nuevos nombres
 //  a las variables (nombrePersona, edadPersona

  personita = {
    nombrecito: "Mar",
    años: 29,
  }
 const {nombrecito:nombrePersona,años:añosPersona} = personita;
 console.log(nombrePersona);
 console.log(añosPersona);
 
    
 