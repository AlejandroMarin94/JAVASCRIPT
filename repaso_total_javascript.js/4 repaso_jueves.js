//1 
// Crea un array con 5 nombres de alumnos. Muestra
//  cada nombre junto con su posición (índice) 
// en el array

const nombres= ["Alejandro","Sergio","Manuel","Ivan", "Alvaro"];

function mostrarArray(nombres){
    for(let i=0; i<nombres.length; i++){
        console.log(nombres[i], i);
    }
}
mostrarArray(nombres);

//2 Declara un array con números del 1 al 10. Recorre
//  el array con un bucle y muestra cuántos 
// son pares y cuántos
// impares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function NumerosPares(numeros){
    let pares =0;
    let impares =0;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] %2===0){ pares++;}
        else { impares++;
    }
    

}
console.log(pares);
console.log(impares);
}
NumerosPares(numeros);



//3 Crea un objeto persona con propiedades
//  nombre, edad, ciudad y profesión. Muestra su 
// contenido y cambia una propiedad. Crea dos 
// métodos llamados saludar y caminar 
// para el objeto persona, que 
// devuelvan por consola un mensaje. 
// Convierte el objeto en uno inmutable.

const persona = {
  nombre: "Alejandro",
  edad: 31,
  ciudad: "Madrid",
  profesion: "Desarrollador web"
};
console.log(persona);
persona.ciudad= "Málaga";
console.log(persona);
persona.caminar= function(){
    return "Estoy dando un paseo";
}
console.log(persona.caminar());
persona.saludar=function(){
    return "¿Hola que tal estás?"
}
console.log(persona.saludar());
Object.freeze(persona);
persona.edad=50;
console.log(persona);






//4 4. Funciones con arrays. Crea una función 
// mostrarArray() que reciba un array y muestre cada
// elemento con su índice. 
// Prueba la función con un array de frutas.

const frutas = ["Manzana", "Banana", "Uva", "Piña", "Fresa", "Sandía"];

function MostrarArray(frutas){
    for(let i=0; i<frutas.length; i++){
        console.log(frutas[i],i);
    }
}
MostrarArray(frutas);


//5. Inventario de tienda. Crea un array de objetos
//  llamado inventario, con tres productos
//  (cada uno tiene nombre, precio y stock).
//Calcula el valor total de todos los productos 
// (precio * stock) y muéstralo.

const inventario = [
  {
    nombre: "Camiseta",
    precio: 15.99,
    stock: 30
  },
  {
    nombre: "Pantalón",
    precio: 29.99,
    stock: 20
  },
  {
    nombre: "Zapatillas",
    precio: 59.99,
    stock: 10
  }
];
function ValorTotal(inventario){
    let total =0;
    for(let i=0; i<inventario.length;i++){
        total+=inventario[i].precio* inventario[i].stock;
    }
    console.log(total);
}
ValorTotal(inventario);
    
        




//6 Actualización de datos. Aumenta el stock 
// de un producto en 10 unidades.
// Añade un nuevo producto al array.
// Elimina el primero.

inventario[2].stock =50;
console.log(inventario);

inventario.push({nombre: "Gorra",
  precio: 12.99,
  stock: 15});

  inventario.shift();
  console.log(inventario);







//7 Uso de funciones con arrays de objetos. 
// Crea una función buscarProducto(nombre) 
// que recorra el array inventario y 
// devuelva el objeto del producto con ese nombre.

function buscarProducto(nombre){
    for(let i=0; i<inventario.length; i++){
        if(inventario[i].nombre === nombre){
            console.log(nombre);
            

            

    }
    
}
}
buscarProducto("Gorra");





//8. Conversión a texto 
// Convierte el inventario
//  en una cadena con formato que sigue usando map()
// y join("\n"). Producto: Ratón - Precio: 15€ - Stock: 20

const TextoInventario = inventario.map(producto=>`Producto: ${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock}`).join("\n");
console.log(TextoInventario);