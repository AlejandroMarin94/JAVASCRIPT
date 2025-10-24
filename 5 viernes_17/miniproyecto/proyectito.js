

let productos = [
    {
    nombre: "pelota",
    precio: 15,
    stock:3,
    }

]

productos.forEach(({nombre,precio,stock})=>
{console.log(`Producto: ${nombre} | precio:${precio} | stock:${stock}`);

})

function agregarProducto(nombre, precio, stock) {
  productos.push({ nombre, precio, stock });
}

agregarProducto("raqueta",20,8);
console.log(productos);



function ActualizarStock(nombre, stock){
    for(let i=0; i<productos.length; i++){
        if(productos[i].nombre ===nombre){
            productos[i].stock = stock;
        }
    }
}
ActualizarStock("pelota",0);
console.log(productos);

let suma=0;

function calcularValorTotal(){
    for(let i=0; i<productos.length; i++){
        suma += productos[i].precio * productos[i].stock;
    }
    return suma;
     

    }
 let totalInventario= calcularValorTotal()
 console.log(totalInventario);

 function BuscarProducto(nombre){
    for(let i=0; i<productos.length; i++){
        if(productos[i].nombre ===nombre){
            console.log(productos[i]);
        }
    }
 }
 let busqueda =BuscarProducto()
 BuscarProducto("pelota");



 
const { nombre, precio} =productos[0];
console.log(nombre,precio);


function EliminarProducto(nombre){
    for( let i=0; i<productos.length; i++){
        if( productos[i].nombre===nombre){
            productos.splice(i,1);
            console.log(`El producto ${nombre} ha sido eliminado`);
            return;
        }
    }
}
EliminarProducto("pelota");
console.log(productos);

 