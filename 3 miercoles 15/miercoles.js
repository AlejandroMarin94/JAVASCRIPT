
//1 Declara una matriz de 3x3 que contenga números del 1 al 9 distribuidos por filas.
// Después, muestra la matriz completa por consola.
// A partir del array anterior, muestra únicamente el número que está en la segunda fila
// y tercera columna

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

];

console.log(matriz[1][2]);



let suma=0

for ( let i = 0; i<matriz.length; i++){
    for( let j = 0; j<matriz[i].length; j++){
    console.log(matriz[i][j]);

      
    }
    
}
console.log(matriz[1][2]);
console.log(matriz[i][j]);



//2 Recorre un array bidimensional con dos bucles for anidados y muestra todos los
//valores en consola, uno por línea.
//Usando la misma matriz, calcula la suma total de los valores contenidos en ella y
//muestra el resultado en consola.





//3. Array tridimensional
//Crea un array tridimensional (por ejemplo, 2x2x2) y muestra uno de los valores
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

console.log(matriz2[0][0][1]);

//4. Función recursiva simple
//Crea una función recursiva que cuente hacia atrás desde 5 hasta 1 y muestre los
//números en consola.

function ContarAtras(n){
    if (n<0) return
    console.log(n)
    ContarAtras(n -1)

}
ContarAtras(5);

//5 5. Suma recursiva Define una función recursiva
//  que calcule la suma de los números desde 1 hasta n 
// (el valor n será pasado como parámetro).

function SumarHastaN(n){
    if (n <= 1) return n;
    return n + SumarHastaN(n-1);
}
 console.log(SumarHastaN(5));

 //6. Factorial recursivo Crea una función recursiva 
 // que calcule el factorial de un número dado. 
 // Ejemplo: factorial(5) → 120.

 function Factorial25 (n){
    if (n === 0) return 1;
    return n* Factorial25(n-1);
 }

 console.log(Factorial25(4));


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
    edad: 31,
    ciudad: "Málaga"
 }

 console.log(persona.nombre);
 console.log(persona.edad);
 console.log(persona.ciudad);
 persona["profesión"] = "Desarrolador";
 console.log(persona);
 persona.edad = 40;
 console.log(persona);
 
 persona.saludar= function(){
    return "Hola, soy " + this.nombre;
 };

 console.log(persona.saludar());

 //8 Crea un array que contenga tres objetos 
 // persona con diferentes valores. Usando el array 
 // anterior, recorre todos los objetos y muestra 
 // el valor de cada propiedad nombre.

 let familia = [
    {nombre: "Alejandro", edad: 31},
    {nombre: "Carmen", edad: 33},
    {nombre: "Ricardo", edad: 29}

 ]
 console.log(familia); 

 function MostrarNombre(familia){
    familia.forEach(persona =>{
        console.log(persona.nombre);
    })
 }
 MostrarNombre(familia);

 //9. Desestructuración de array Crea un array con tres 
 // colores. Usa desestructuración para asignar cada color 
 // a una variable distinta y muéstralas por consola.

 const colores = ["rojo", "amarillo", "verde"]

 const [color1, color2, color3] = colores

 console.log(color3);

 //10 Desestructuración parcial Usa desestructuración
 //  para obtener solo el primer y el tercer elemento
 // de un array de tres números.

  const numerico = [5, 8, 12,]
    const  [numero1, , numero3] = numerico;

  console.log(numero3);

  

  //11 Desestructuración de objetos Usa el objeto persona
  //  y aplica desestructuración para extraer las propiedades
  //  nombre y edad en variables separadas.
//
 persona = {
    nombre: "Alejandro",
    edad: 31,

 }
 const {nombre, edad: AñosDeVida} = persona;
 console.log(persona);

 //12. Desestructuración con nombre cambiado Usa
 //  desestructuración para obtener las propiedades
 //  del objeto persona, pero asignando nuevos nombres
 //  a las variables (nombrePersona, edadPersona
 
    
 