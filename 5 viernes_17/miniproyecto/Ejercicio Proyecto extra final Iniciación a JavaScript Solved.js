//////////////////////////////////
console.log('1) Definición inicial de datos');

let productos = [
  { nombre: 'Ratón', precio: 15.55, stock: 10 },
  { nombre: 'Teclado', precio: 25.25, stock: 5 },
  { nombre: 'Monitor', precio: 150.85, stock: 3 },
];

//////////////////////////////////
console.log('\n2) Mostrar inventario inicial');

productos.forEach((producto) => {
  console.log(
    `Producto: ${producto.nombre} | Precio: ${producto.precio} | Stock: ${producto.stock}`
  );
});

//////////////////////////////////
console.log('\n3) Agregar un nuevo producto');

function agregarProducto(nombre, precio, stock) {
  productos.push({ nombre: nombre, precio: precio, stock: stock });
}

console.log('Productos antes de agregar: ', productos);
agregarProducto('Impresora', 75, 4);
agregarProducto('Escaner', 55.9, 6);
agregarProducto('Altavoces 5.1', 130.99, 4);
agregarProducto('Ratón Vertical', 42.5, 8);
agregarProducto('Portatil Gaming', 1995.9, 6);
console.log('Productos tras agregar un elemento: ', productos);

//////////////////////////////////
console.log('\n4) Actualizar el stock de un producto');

function actualizarStock(nombre, cantidad) {
  if (cantidad < 0)
    return console.log('Error: No has introducido una cantidad válida');

  let existe = false;
  productos.forEach((producto) => {
    if (producto.nombre === nombre) {
      producto.stock = cantidad;
      existe = true;
      console.log(`Stock de ${nombre} actualizado correctamente.`);
    }
  });
  if (!existe)
    console.log('Error. No disponemos de ese producto en nuestro catálogo.');
}

actualizarStock('Impresora', 8); // Actualización de stock correcta
actualizarStock('Protector Pantalla', 8); // Error en actualizaciçon de stock
actualizarStock('Ratón', -8); // Error dato de cantidad

//////////////////////////////////
console.log('\n5) Calcular el valor total del inventario');

function calcularValorTotal() {
  let valorTotal = 0;
  productos.forEach((producto) => {
    valorTotal += producto.stock * producto.precio;
  });
  return valorTotal;
}

console.log(
  `El valor total de todos los productos es de ${Number(
    calcularValorTotal().toFixed(2)
  )}€`
);

//////////////////////////////////
console.log('\n6) Buscar un producto');

function buscarProducto(nombre) {
  let productoEncontrado = undefined;
  productos.forEach((producto) => {
    if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
      productoEncontrado = producto;
    }
  });
  if (productoEncontrado !== undefined) return productoEncontrado;
}

console.log(buscarProducto('Ratón'));

//////////////////////////////////
console.log('\n7) Aplicar destructuración');

let busquedaProducto = buscarProducto('Ratón');
const { nombre, precio } = busquedaProducto;
console.log(`Nombre del producto: ${nombre}\nPrecio del producto: ${precio}`);

//////////////////////////////////
console.log('\n8) Eliminar un producto');

function eliminarProducto(nombre) {
  productos.forEach((producto, index) => {
    if (producto.nombre === nombre) {
      productos.splice(index, 1);
    }
  });
}

console.log('Productos antes de eliminar: ', productos);
eliminarProducto('Teclado');
console.log('Productos tras eliminar: ', productos);

//////////////////////////////////
console.log('\n9) Mostrar el resultado final\n');

console.log('///////////////////////////////////');
console.log('Lista final de productos resultante');
console.log('///////////////////////////////////');
productos.forEach((producto, index) => {
  const { nombre, precio, stock } = producto; // Aplico destructuring
  console.log(
    `Producto ${
      index + 1
    } => Nombre: ${nombre}, Precio: ${precio}€, Stock: ${stock}`
  );
});
console.log('///////////////////////////////////');
