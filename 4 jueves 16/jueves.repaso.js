//1 
// Crea un array con 5 nombres de alumnos. Muestra
//  cada nombre junto con su posición (índice) 
// en el array

const alumnos = ["Alejandro", "Sergio", "Alvaro", "Manuel", "Pedro"];

alumnos.forEach((elem, idx)=> console.log(`Nombre: ${elem}, Posicion: ${idx}`));


//2 Declara un array con números del 1 al 10. Recorre
//  el array con un bucle y muestra cuántos 
// son pares y cuántos
// impares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares =0;
let impares =0;

for (let i=0; i<numeros.length; i++){
    if(numeros[i]%2===0){
        pares++
    } else{
        impares++
    }
        
    }
    
    console.log(pares);
    console.log(impares);
    
    
//3 Crea un objeto persona con propiedades
//  nombre, edad, ciudad y profesión. Muestra su 
// contenido y cambia una propiedad. Crea dos 
// métodos llamados saludar y caminar 
// para el objeto persona, que 
// devuelvan por consola un mensaje. 
// Convierte el objeto en uno inmutable.

const persona = {
  nombre: "Lucía",
  edad: 34,
  ciudad: "Granada",
  profesion: "arquitecta"
};

persona.nombre= "Mar";
console.log(persona);

persona.saludar= function saludo(nombre){
    console.log("Hola que tal, soy " + this.nombre)
    
}
persona.saludar()

Object.freeze(persona);

persona.nombre= "goku";
console.log(persona);


//4 4. Funciones con arrays. Crea una función 
// mostrarArray() que reciba un array y muestre cada
// elemento con su índice. 
// Prueba la función con un array de frutas.

const frutas = ["manzana", "plátano", "naranja", "kiwi", "pera"];

function mostrarArray(){
    for(let i=0; i<frutas.length; i++){
        console.log(frutas[i],i);
        
    }
}
mostrarArray();

const frutitas = ["cereza", "mango", "piña", "uva", "melón"];

frutitas.forEach((elem,idx)=>{
    console.log(elem,idx);
    
})


//5. Inventario de tienda. Crea un array de objetos
//  llamado inventario, con tres productos
//  (cada uno tiene nombre, precio y stock).
//Calcula el valor total de todos los productos 
// (precio * stock) y muéstralo.

const inventario = [
  { nombre: "Camiseta", precio: 15.99, stock: 30 },
  { nombre: "Pantalón", precio: 29.5, stock: 20 },
  { nombre: "Zapatillas", precio: 59.9, stock: 12 }
];
let sumita=0;
for(let i=0; i<inventario.length; i++){
    sumita+=inventario[i].stock*inventario[i].precio;
    if(inventario[i].nombre==="Camiseta"){
        inventario[i].stock+=10;
    }  

}
console.log(sumita);
console.log(inventario);



//6 Actualización de datos. Aumenta el stock 
// de un producto en 10 unidades.
// Añade un nuevo producto al array.
// Elimina el primero.




//7 Uso de funciones con arrays de objetos. 
// Crea una función buscarProducto(nombre) 
// que recorra el array inventario y 
// devuelva el objeto del producto con ese nombre.

const inventario10 = [
  { nombre: "Camiseta", precio: 15.99, stock: 30 },
  { nombre: "Pantalón", precio: 29.5, stock: 20 },
  { nombre: "Zapatillas", precio: 59.9, stock: 12 }
];

function buscarProducto(nombre){
  return inventario10.find(elem=> elem.nombre===nombre);
}

console.log(buscarProducto("Camiseta"));

//8. Conversión a texto 
// Convierte el inventario
//  en una cadena con formato que sigue usando map()
// y join("\n"). Producto: Ratón - Precio: 15€ - Stock: 20

const inventario20 = [
  { nombre: "Camiseta", precio: 15.99, stock: 30 },
  { nombre: "Pantalón", precio: 29.5, stock: 20 },
  { nombre: "Zapatillas", precio: 59.9, stock: 12 }
];

const inventario30= inventario20.map((elem)=>`Producto: ${elem.nombre} || precio: ${elem.precio} || stock: ${elem.stock}`).join("\n");

console.log(inventario30);
