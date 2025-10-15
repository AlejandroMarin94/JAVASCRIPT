
//1 Declara una matriz de 3x3 que contenga números del 1 al 9
//  distribuidos por filas.
// Después, muestra la matriz completa por consola.
// A partir del array anterior, muestra únicamente el número
//  que está en la segunda fila
// y tercera columna

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

]
console.log(matriz[0][0]);
console.log(matriz[1][2]);

let suma= 0;

for (let i=0; i<matriz.length; i++){
    for (let j=0; j<matriz[i].length; j++){
    console.log(matriz[i][j]);
    suma += matriz[i][j];
    }
}
console.log(suma);

//2 Recorre un array bidimensional con dos bucles for anidados y muestra todos los
//valores en consola, uno por línea.
//Usando la misma matriz, calcula la suma total de los valores contenidos en ella y
//muestra el resultado en consola.





//3. Array tridimensional
//Crea un array tridimensional (por ejemplo, 2x2x2) y muestra uno de los valores
//internos accediendo por índices.

let ArrayTrid = [
[
    [1, 2, 3],
    [4, 5, 6]
]
];

console.log(ArrayTrid[0][1][1]);




//4. Función recursiva simple
//Crea una función recursiva que cuente hacia atrás desde 5 hasta 1 y muestre los
//números en consola.

function RecursivaSimple (n){
    if (n<0) return;

    
}


//5 5. Suma recursiva Define una función recursiva
//  que calcule la suma de los números desde 1 hasta n 
// (el valor n será pasado como parámetro).



 //6. Factorial recursivo Crea una función recursiva 
 // que calcule el factorial de un número dado. 
 // Ejemplo: factorial(5) → 120.

 


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

 
 
 

 //8 Crea un array que contenga tres objetos 
 // persona con diferentes valores. Usando el array 
 // anterior, recorre todos los objetos y muestra 
 // el valor de cada propiedad nombre.



 //9. Desestructuración de array Crea un array con tres 
 // colores. Usa desestructuración para asignar cada color 
 // a una variable distinta y muéstralas por consola.



 //10 Desestructuración parcial Usa desestructuración
 //  para obtener solo el primer y el tercer elemento
 // de un array de tres números.

  


  

  //11 Desestructuración de objetos Usa el objeto persona
  //  y aplica desestructuración para extraer las propiedades
  //  nombre y edad en variables separadas.
//


 //12. Desestructuración con nombre cambiado Usa
 //  desestructuración para obtener las propiedades
 //  del objeto persona, pero asignando nuevos nombres
 //  a las variables (nombrePersona, edadPersona
 
    
 