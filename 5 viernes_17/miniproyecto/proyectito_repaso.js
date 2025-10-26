
//1. Definición inicial de datos 
// Crea un array llamado productos que 
// contenga tres objetos. 
// Cada objeto representará un producto 
// y debe tener las propiedades: nombre, precio, stock.

const productos =[
    { nombre: "consola",
        precio: 500,
        stock: 280,
    },
    { nombre: "television",
        precio: 783,
        stock: 150,
    },
    { nombre: "ordenador",
        precio: 1799,
        stock: 689,
    }
]


2// Recorre el array productos con un bucle
//  y muestra cada producto formateado así: 
// Producto: Ratón | Precio: 15€ | Stock: 10
  
productos.forEach(productos =>{
    console.log(`Productos: ${productos.nombre} | precio: ${productos.precio} | stock: ${productos.stock}`);
    
})

//3 Agregar un nuevo producto Crea una función 
// agregarProducto(nombre, precio, stock) que añada
//  un nuevo objeto al array productos.

function agregarProducto(nombre, precio, stock){
    productos.push({nombre, precio, stock});
}

agregarProducto("ps5", 499, 135);
console.log(productos);


//4Actualizar el stock de un producto Crea una 
// función actualizarStock(nombre, cantidad) que 
// aumente o reduzca el stock de un producto según 
// el valor indicado. Si el producto no existe, 
// muestra un mensaje de error.

function ActualizarStock(nombre, cantidad){
    for (let i=0; i<productos.length; i++){
    
    if( productos[i].nombre === nombre){
        productos[i].stock=cantidad
        return
    }
    
    }
    console.log("Error ese producto no existe");
    
}
  ActualizarStock("ps8",0)
 
  
        



//5 Calcular el valor total del inventario 
// Crea una función calcularValorTotal() que recorra 
// todos los productos y calcule la suma total 
// de precio * stock.

function calcularValorTotal(){
    let valorTotal=0;
    productos.forEach(productos=>{
        valorTotal+= productos.stock * productos.precio
    })
    return valorTotal;
}
console.log(calcularValorTotal());


//6 Buscar un producto Crea una función 
// buscarProducto(nombre) que busque un producto 
// por su nombre y devuelva el objeto completo.

function buscarProducto(nombre){
    return productos.find(elemento => elemento.nombre === nombre)
}

console.log( buscarProducto("ps5"));


//7 7. Aplicar desestructuración Usa desestructuración 
// para mostrar el nombre y precio del producto 
// encontrado en el punto anterior.
let busquedaProducto = buscarProducto("ps5");
const { nombre, precio} = busquedaProducto

console.log("El nombre del articulo es " + nombre);
console.log("El precio del articulo es " + precio);




//88. Eliminar un producto Crea una función 
// eliminarProducto(nombre) que elimine un producto
//  del array según su nombre.

function eliminarProducto(nombre){
    productos.forEach((element,i)=>{
        if(element.nombre=== nombre)
            { productos.splice(i, 1)
    
    }
           
      
    })
     
    }


eliminarProducto("television");
console.log(productos);

//99. Mostrar el resultado final Muestra por consola
// la lista final de productos después de tod