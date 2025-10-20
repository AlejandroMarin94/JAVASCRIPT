//1 
// Crea un array con 5 nombres de alumnos. Muestra
//  cada nombre junto con su posición (índice) 
// en el array

const alumnos = ["Lucía", "Carlos", "María", "Javier", "Sofía"];

function MostrarNombre(){
    for(let i=0; i<alumnos.length; i++){
        console.log(i,alumnos[i]);
        
    }
}
   MostrarNombre();

//2 Declara un array con números del 1 al 10. Recorre
//  el array con un bucle y muestra cuántos 
// son pares y cuántos
// impares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares=0;
let impares=0;

function MostrarPares(){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] %2===0){
            pares++
        }
        else{impares++}
    }
    console.log(pares);
    console.log(impares);
    
    
}
MostrarPares();

  
//3 Crea un objeto persona con propiedades
//  nombre, edad, ciudad y profesión. Muestra su 
// contenido y cambia una propiedad. Crea dos 
// métodos llamados saludar y caminar 
// para el objeto persona, que 
// devuelvan por consola un mensaje. 
// Convierte el objeto en uno inmutable.


const persona = {
  nombre: "Alejandro",
  edad: 32,
  ciudad: "Madrid",
  profesion: "Desarrollador web"
};

persona.ciudad="Malaga";
persona.saludar= function Saludar(){
    console.log(`Hola que tal estas soy ${this.nombre}`);
    
}
persona.caminar= function Caminar(){
    console.log("Estoy paseando");
    
}
Object.freeze(persona);

//4 4. Funciones con arrays. Crea una función 
// mostrarArray() que reciba un array y muestre cada
// elemento con su índice. 
// Prueba la función con un array de frutas.
const frutas = ["manzana", "plátano", "naranja", "kiwi", "sandía", "uva"];

function MostrarIndice(){
    for(let i=0; i<frutas.length; i++){
        console.log(i, frutas[i]);
        
    }
}
MostrarIndice();

//5. Inventario de tienda. Crea un array de objetos
//  llamado inventario, con tres productos
//  (cada uno tiene nombre, precio y stock).
//Calcula el valor total de todos los productos 
// (precio * stock) y muéstralo.

const inventario = [
  {
    nombre: "Camiseta",
    precio: 15.99,
    stock: 25
  },
  {
    nombre: "Pantalón",
    precio: 29.99,
    stock: 18
  },
  {
    nombre: "Zapatillas",
    precio: 59.99,
    stock: 12
  }
];
let suma=0
function ValorTotal(){
    for(let i=0; i<inventario.length; i++){
        suma+=inventario[i].precio*inventario[i].stock;

    }
    console.log(suma);
    
}
ValorTotal();

   



//6 Actualización de datos. Aumenta el stock 
// de un producto en 10 unidades.
// Añade un nuevo producto al array.
// Elimina el primero.
inventario[2].stock+= 10;
console.log(inventario);
inventario.push({nombre: "cinturon", precio: 50, stock:5,});
console.log(inventario);
inventario.shift();
console.log(inventario);



//7 Uso de funciones con arrays de objetos. 
// Crea una función buscarProducto(nombre) 
// que recorra el array inventario y 
// devuelva el objeto del producto con ese nombre.

function buscarProducto(nombre){
    for(let i=0;i<inventario.length; i++){
        return inventario.find(producto=>producto.nombre===nombre);
    }

}
console.log(buscarProducto("Pantalón"));


//8. Conversión a texto 
// Convierte el inventario
//  en una cadena con formato que sigue usando map()
// y join("\n"). Producto: Ratón - Precio: 15€ - Stock: 20

const ConvertirTexto= inventario.map(inventario=>{
    return `Producto: ${inventario.nombre} - Precio: ${inventario.precio} - Stock: ${inventario.stock}`
}).join("\n");

console.log(ConvertirTexto);
