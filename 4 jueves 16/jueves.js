//1 
// Crea un array con 5 nombres de alumnos. Muestra
//  cada nombre junto con su posición (índice) 
// en el array

let alumnos = [ "Alejandro", "Carmen", "Ricardo", "Pepe", "Manuel"]

function MostarNombre(alumnos){
    alumnos.forEach((elemento, idx)=>{
        console.log(idx, elemento);
    })
}

MostarNombre(alumnos);

//2 Declara un array con números del 1 al 10. Recorre
//  el array con un bucle y muestra cuántos 
// son pares y cuántos
// impares.

let Numeros = [ 1, 2, 3, 4, 6, 7, 8, 9, 10]

let pares = 0;
let impares =0;

for  (let i = 0; i< Numeros.length; i++){
    if(Numeros[i] %2===0){
        pares++;
    } else {
        impares++;
    }
    
}

console.log(pares);

//3 Crea un objeto persona con propiedades
//  nombre, edad, ciudad y profesión. Muestra su 
// contenido y cambia una propiedad. Crea dos 
// métodos llamados saludar y caminar 
// para el objeto persona, que 
// devuelvan por consola un mensaje. 
// Convierte el objeto en uno inmutable.


const alumno = {
    nombre: "Alejandro",
    edad: 31,
    ciudad: "Málaga",
    profesion: "estudiante"
}


console.log(alumno);
alumno.edad = 32;
console.log(alumno);

function saludar(){
    console.log(`Hola soy ${alumno.nombre} y tengo ${alumno.edad} años `)
}

function caminar(){
    console.log("Hola, estoy dando un paseo");
}

saludar();
caminar();

//4 4. Funciones con arrays. Crea una función 
// mostrarArray() que reciba un array y muestre cada
// elemento con su índice. 
// Prueba la función con un array de frutas.


let frutas = ["uva", "fresa", "melon"]

function mostrarArray(){
    for(let i =0; i< frutas.length; i++){
        console.log(i, frutas[i]);
    }

}
mostrarArray()

let frutitas = ["uvita", "fresita", "meloncito"]

function mostrarFrutita(){
    frutitas.forEach((elemento, idx)=>
    {console.log(idx, elemento)

    })
}
mostrarFrutita();

//5. Inventario de tienda. Crea un array de objetos
//  llamado inventario, con tres productos
//  (cada uno tiene nombre, precio y stock).
//Calcula el valor total de todos los productos 
// (precio * stock) y muéstralo.


let inventario = [
    { nombre: "balon",
      precio: 15,
      stock: 20,
    },
    { nombre: "raqueta",
      precio: 13,
      stock: 25,
    },

    {nombre:"gafas",
      precio: 5,
      stock: 2,
    },
]
let valor = 0
function ValorTotal(){
    inventario.forEach(producto=>{
        valor += producto.precio*producto.stock;
    }
    )
    
}
ValorTotal();

//6 Actualización de datos. Aumenta el stock 
// de un producto en 10 unidades.
// Añade un nuevo producto al array.
// Elimina el primero.

inventario.forEach(producto =>{
    if (
        producto.nombre=== "balon")
    { producto.stock += 10;}
})

console.log(inventario);

//7 Uso de funciones con arrays de objetos. 
// Crea una función buscarProducto(nombre) 
// que recorra el array inventario y 
// devuelva el objeto del producto con ese nombre.

function buscarProducto(nombre){
    return inventario.find(producto=> producto.nombre===nombre);
}


console.log(buscarProducto("balon"));

//8. Conversión a texto 
// Convierte el inventario
//  en una cadena con formato que sigue usando map()
// y join("\n"). Producto: Ratón - Precio: 15€ - Stock: 20