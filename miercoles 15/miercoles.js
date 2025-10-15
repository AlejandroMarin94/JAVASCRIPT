//1 Declara una matriz de 3x3 que contenga números del 1 al 9 distribuidos por filas.
// Después, muestra la matriz completa por consola.
// A partir del array anterior, muestra únicamente el número que está en la segunda fila
// y tercera columna

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

];

console.log(matriz[1]);



let suma=0

for ( let i = 0; i<matriz.length; i++){
    for( let j = 0; j<matriz[i].length; j++){
    console.log(matriz[i][j]);

        suma += matriz[i][j];
    }
    
}
console.log(matriz[1][2]);
console.log(suma);



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