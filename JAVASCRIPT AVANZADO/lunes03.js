/*
//#### 1. Crea una función pura
// llamada descuento que reciba un precio
// y devuelva el precio con un 10% de descuento.

console.log("(1)============================================(1)");

function descuento(precio) {
  return precio - precio * 0.1;
}

console.log(descuento(50));

console.log("(2)============================================(2)");
//#### 2. Dada una persona:
// `{nombre: "Lucia", edad: 30}`,crea una nueva
// persona llamada nuevaLucia que tenga la misma
// edad pero cambie su nombre a "Lucía Pérez",
// sin modificar el objeto original.

const persona = {
  nombre: "Lucia",
  edad: "30",
};

const nuevaPersona = { ...persona, nombre: "Lucía Perez" };

console.log(nuevaPersona);

console.log("(3)============================================(3)");

//#### 3. Usa una función de orden
// superior `(operar)` para multiplicar dos números.

const operando = (a, b, op) => op(a, b);
console.log(operando(3, 2, (x, y) => x * y));

4; // #### 4. Define dos funciones,
// `doble e incrementar`, y compónlas (como en `compose`)
// para crear una nueva función que primero duplique
// un número y luego le sume 1.

console.log("(4)============================================(4)");

const doble = (x) => x * 2;
const sumar = (x) => x + 1;

const unidas = (x) => sumar(doble(x));

console.log(unidas(5));

function multiplicando(x) {
  return x * 2;
}

function sumando(y) {
  return y + 1;
}

const union = (x) => sumando(multiplicando(x));
console.log(union(8));

//5 #### 5. Crea una clase `Coche` con un
//  constructor que reciba `marca` y `modelo`.
// ñade un método `arrancar()` que devuelva
//  `"El coche <marca> ha arrancado"`.

console.log("(5)============================================(5)");

class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar() {
    return `El coche ${this.marca} ha arrancado`;
  }

  getInfo() {
    return `El coche es ${this.marca} y es el modelo ${this.modelo}`;
  }

  static tipo() {
    return "El vehiculo es terrestre";
  }
}
const cocheUno = new Coche("Toyota", "Corolla");

console.log(cocheUno.arrancar());
console.log(Coche.tipo());

console.log("(6)============================================(6)");
//6 #### 6. Añade un método estático `tipos()`
//  a la clase `Coche` que devuelva `"Vehículo terrestre"`.

console.log("(7)============================================(7)");
//7 #### 7. Crea una clase `CocheElectrico`
// que herede de `Coche` y tenga un campo adicional
// `bateria`. Sobrescribe el método `arrancar()`
// para incluir ese dato.

class cocheElectrico extends Coche {
  constructor(marca, modelo, bateria) {
    super(marca, modelo);
    this.bateria = bateria;
  }

  arrancar() {
    return `El coche es ${this.marca} ${this.modelo} ha arrancado con ${this.bateria}%`;
  }
}

const electrico = new cocheElectrico("Toyota", "Corolla", 50);

console.log(electrico.arrancar());

//8 #### 8 . Añade un getter `info` a la
// clase `Coche` que devuelva una cadena con la
// marca y el modelo.

console.log("(8)============================================(8)");

const cochecito = new Coche("Toyota", "Corolla");
console.log(cochecito.getInfo());

//  #### 9 . Crea una clase `CajaFuerte`
// con un campo privado `#codigo` inicializado en
// `4321`. Añade un getter `codigo` para acceder al valor.

console.log("(9)============================================(9)");

class CajaFuerte {
  #codigo = 4321;

  getCodigo() {
    return this.#codigo;
  }
}

const clave = new CajaFuerte();
console.log(clave.getCodigo());

console.log("(10)============================================(10)");
// 10 #### 10. Implementa una función
// `crearSuperMascota(nombre)` que combine
// las capacidades de un objeto `volador` y un
// objeto `nadador`, y pruébala.

const volador = {
  volar() {
    return "Estoy volando";
  },
};

const nadador = {
  nadar() {
    return "Estoy nadando";
  },
};

function crearSuperMascota(nombre) {
  return {
    nombre,
    ...volador,
    ...nadador,
  };
}

const perro = crearSuperMascota("Lola");
console.log(perro.volar());
console.log(perro.nadar());
console.log(perro.nombre);

//11 #### 11. Crea un objeto `animal` con un método `sonido()`
// que muestre `"Hace un sonido"`. Luego crea otro objeto `gato`
// con `Object.create(animal)` y añade un método `maullar()` que diga `"Miau"`.

console.log("(11)============================================(11)");
console.log("(12)============================================(12)");

const animal = {
  sonido() {
    console.log("Hace un sonido");
  },
};

const gato = Object.create(animal);
gato.maullar = function () {
  console.log("Miau");
};

gato.maullar();
// #### 12. Usa `Object.assign` para combinar
// tres objetos (`a`, `b`, `c`) en uno solo.

const a = { a: "Hola" };
const b = { b: "soy un" };
const c = { c: "desarrolador" };

const frase = Object.assign({}, a, b, c);

console.log(frase);

//13 #### 13. Crea un objeto `caja` con dos propiedades,
//  séllalo con `Object.seal()` e intenta añadir una nueva propiedad. ¿Qué ocurre?.

console.log("(13)============================================(13)");

const caja = {
  color: "rojo",
  forma: "cuadrada",
};

Object.seal(caja);
caja.color = "verde";
console.log(caja);
//caja.contenido = "dinero";
console.log(caja);

//14 #### 14 . Comprueba con `hasOwnProperty` si el objeto `
// gato` tiene su propio método `maullar` y si hereda `sonido`.

console.log("(14)============================================(14)");

console.log(gato.hasOwnProperty("maullar"));
console.log(gato.hasOwnProperty("sonido"));

//15 #### 15 . Crea un `Set` con los valores `[1, 2, 2, 3, 4]`,
// elimina el número 3 y comprueba si el número 4 está presente.

console.log("(15)============================================(15)");

const valores = new Set([1, 2, 2, 3, 4]);
valores.delete(3);
console.log(valores);

console.log(valores.has(4));

//16 #### 16 . Añade al `Set` anterior el número 5 y
// muestra todos los valores como un array.

console.log("(16)============================================(16)");

valores.add(5);
console.log([...valores]);

//17 #### 17 . Crea un `WeakSet` y añade dentro dos
// objetos diferentes (`{nombre: "A"} y {nombre: "B"}`).

console.log("(17)============================================(17)");

const ws = new WeakSet();

const objetoA = { nombre: "Alejandro" };
const objetoB = { nombre: "Mar" };

ws.add(objetoA, objetoB);
console.log(ws.has(objetoA, objetoB));

//18 #### 18 . Crea un `Map` que relacione nombres de
// animales con su tipo (por ejemplo "perro" → "mamífero"),
// y muestra el tamaño del `Map`.

console.log("(18)============================================(18)");

const nombresAnimales = new Map();

nombresAnimales.set("perro", "mamifero");
nombresAnimales.set("ballena", "mamifero");
nombresAnimales.set("gato", "mamifero");

console.log(nombresAnimales.get(`perro`));
console.log(nombresAnimales.size);

//19 #### 19 . Crea un `Map` donde las claves sean
// objetos (por ejemplo `{ id: 1 }`) y los valores sean nombres.

console.log("(19)============================================(19)");

const claves = new Map();

const clave1 = { id: 1 };
const clave2 = { id: 2 };

claves.set(clave1, "Alejandro");
claves.set(clave2, "Mar");

console.log("Map completo :", claves);
console.log("Map clave1: ", claves.get(clave1));

//20 #### 20 . Usa un `WeakMap` para asociar un
// objeto usuario con un token `"abc123"`.
console.log("(20)============================================(20)");

const objetito = new WeakMap();
const usuario = {};

objetito.set(usuario, "abc123");
objetito.has(usuario);
console.log(objetito.has(usuario));

console.log("(21)============================================(21)");

//21 #### 21 . Combina con spread los arrays `[1, 2], [3, 4] y [5, 6]`
//  en uno solo.

const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const copia = [...array1, ...array2, ...array3];

console.log(copia);

console.log("(22)============================================(22)");

//#### 22 Usa rest para extraer el primer y segundo elemento
// de `[10, 20, 30, 40]` y guardar el resto en otra variable.

const array5 = [10, 20, 30, 40];
const [primero, segundo, ...resto] = array5;

console.log(primero, segundo);
console.log(resto);

console.log("(23)============================================(23)");

// #### 23 . Usa `flat()` sobre `[1, [2, [3, [4]]]]`
// para obtener `[1, 2, 3, 4]`.

const array6 = [1, [2, [3, [4]]]];
console.log(array6.flat(3));

console.log("(24)============================================(24)");

// 24 #### 24 . Usa `flatMap()` sobre `[2, 4, 6]`
// para crear un nuevo array que contenga el número original y su mitad.

const array10 = [2, 4, 6];

const arrayNuevo = array10.flatMap((n) => [n, n / 2]);

console.log(arrayNuevo);

console.log("(25)============================================(25)");

// 25 #### 25 . Crea un `Map` y recórrelo con
// un bucle `for...of` mostrando cada `clave` y `valor`.

const nuevoArray = [
  ["a", 1, 3],
  ["b", 2, 4],
  ["c", 3, 5],
];
for (const [k, v] of nombresAnimales) {
  console.log(k, v);
}
for (const [k, v, y] of nuevoArray) {
  console.log(k, v, y);
}

//26 #### 26 . Crea un `setInterval` que aumente
// un contador y lo detenga automáticamente al llegar a 5.

/*let contador = 0;
const intervalo = setInterval(()=>{
contador++;
console.log( `${contador}`)

if(contador ===5){
  clearInterval(intervalo)
  console.log("Intervalo detenido")
}
},1000);


// 27 #### 27 . Crea un `setTimeout` que muestre un mensaje
//  tras 3 segundos, y luego cancélalo antes de que se ejecute.

const mensaje = setTimeout(() => {
  console.log("Este es el mensaje");
}, 3000);

clearTimeout(mensaje);
console.log("El contador se ha cancelado antes de ejecutarse");

//28 #### 28 . Crea una función que simule añadir y eliminar
// un listener (usa `addEventListener` y `removeEventListener` con un click).

function añadir() {
  const gestionClick = () => console.log("Click hecho");
  document.addEventListener("click", gestionClick);
  setTimeout(() => {
    document.removeEventListener("click", gestionClick);
    console.log("Eventlistener borrado");
  }, 3000);
}
//añadir()

//#### 29 . Usa `try/catch` para capturar el error de convertir
// a número un texto no numérico.

try {
  let texto = "1";
  let conversion = Number(texto);
  if (isNaN(conversion)) throw new Error("No se ha podido convertir a numero");
  console.log("Conversion exitosa");
} catch (error) {
  console.log(error.message);
}

//30 #### 30 . Crea una clase `ProductoError` que extienda de Error
// y una función `validarPrecio(precio)` que lance esa clase de error si el
// precio es menor que 0. Tip: En el constructor(msg) tendrás que incorporar
// super(msg).

class ProductoError extends Error {
  constructor(msg) {
    super(msg);
  }
}

function validarPrecio(precio) {
  if (precio < 0) {
    throw new ProductoError("El precio no es adecuado");
  }
  return { precio };
}

try {
  validarPrecio(-3);
} catch (error) {
  if (error instanceof ProductoError) {
    console.log(`Error del precio: ${error.message}`);
  } else {
    console.log((`Otro error:`, error.message));
  }
}

//31 #### 31 . Haz una función `abrirArchivo(nombre)`
// que lance un error si el nombre está vacío.

function abrirArchivo(nombre) {
  if (!nombre) {
    throw new Error("Introduce un nombre");
  }
  return nombre;
}

try {
  abrirArchivo();
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Proceso finalizado");
}

//32 #### 32 . Crea un `try/catch` con `finally` que siempre muestre
// "Proceso finalizado".

//33 .Lanza un error genérico con `throw new Error("Algo salió mal")`
// y captúralo para mostrar su nombre y mensaje.

try {
  throw new Error("Algo salio mal");
} catch (error) {
  console.log(
    "Hay un error en la obtencion de datos: ",
    error.name,
    error.message
  );
}

// #### 34 . Crea una función con `callback` que simule
// leer un archivo y devuelva "Leído correctamente" tras 100 ms.

function enviarPeliculas(callback) {
  setTimeout(() => {
    callback("Leido correctamente");
  }, 100);
}

enviarPeliculas((resultado) => {
  console.log(resultado);
});

//35 #### 35 . Crea una `Promesa` que se resuelva con "Promesa lista"
//  tras 150 ms y muéstralo con `.then`.

const promesa = new Promise((resolve, reject) => {
  const promesa = true;

  if (promesa) {
    setTimeout(() => resolve("Promesa lista"), 3000);
  } else {
    reject("No disponible");
  }
});

promesa
  .then((resultado) => console.log(resultado))
  .catch((resultado) => console.log(resultado));

//36 #### 36 . Crea una `Promesa` que falle con "no disponible"
//  y captura el error con `.catch`.

//#### 37 . Usa `async/await` para esperar a una promesa
// que tarda 200 ms y muestra `"terminado"` dentro de un try/catch.

function esperar(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function esperando() {
  try {
    await esperar(1000);
    console.log("Terminado");
  } catch (error) {
    console.log("No ha funcionado");
  }
}
esperando();
*/
// #### 38 . Crea un objeto llamado `persona` con las propiedades: `nombre, edad, y
// ciudad`. Convierte el objeto a una `cadena JSON` y muéstralo por consola.

console.log("(38)============================================(38)");


const personita = {
  nombre: "Cristiano Ronaldo",
  edad: 38,
  ciduad: "Málaga"
};

const conversionJson = JSON.stringify(personita);
console.log(typeof conversionJson);
console.log(conversionJson);


// #### 39 . Toma la cadena JSON `{"nombre":"Ana","edad":25,"ciudad":"Madrid"}`
// y conviértela de nuevo a un objeto. Muestra el valor de nombre por consola.

console.log("(40)============================================(40)");


const cadena1 = '{"nombre":"Ana","edad":25,"ciudad":"Madrid"}';

const objetoConvertido = JSON.parse(cadena1);
console.log(objetoConvertido);
console.log(typeof objetoConvertido);
console.log(objetoConvertido.nombre);


// #### 40 . Crea un array de objetos `alumnos` con tres elementos,
// cada uno con propiedades `nombre y nota`. Convierte el array `a JSON`
// y muéstralo. Luego, conviértelo de nuevo `a un array` y recorre los nombres
// de los alumnos con un `for`.
//*
console.log("(40)============================================(40)");

const alumnos = [
  { nombre: "Lucía", nota: 8.5 },
  { nombre: "Carlos", nota: 7.2 },
  { nombre: "Elena", nota: 9.1 },
];

const alumnosConvertidos = JSON.stringify(alumnos);
console.log(typeof alumnosConvertidos);

const alumnosConvertidosNuevo = JSON.parse(alumnosConvertidos);
console.log(typeof alumnosConvertidosNuevo);

for (const alumno of alumnosConvertidosNuevo) {
  console.log(alumno.nombre);
}


//41 #### 41 . Prueba a `convertir a JSON` un 
// `objeto` que contenga una `función`. Observa qué ocurre 
// con la función en la conversión.

console.log("(41)============================================(41)");


const jugador ={
  chutar(){
    console.log("Ha chutado el balon");
    
  }
}

const jugadorConvertido = JSON.stringify(jugador);
console.log(jugadorConvertido);

// 42 #### 42 . Declara una variable `puntos` sin valor 
// `(undefined)`. `Usa puntos ?? 0` para mostrar un valor por 
// defecto en consola.

console.log("(42)============================================(42)");


let puntos;
let resultado = puntos ?? 0

console.log(resultado);

// #### 43 . Declara `let valor = 0`. 
// Imprime el resultado de `valor ?? 10` y explica por 
// qué no se reemplaza por 10.

console.log("(43)============================================(43)");

let valor = 0;

let valorNuevo = valor ?? 10;

console.log("Explicacion: No se reemplaza por 10 porque 0 no es null ni undefined, Resultado:", valorNuevo);

// #### 44 . Declara `let nombreUsuario = null`.
// Usa `nombreUsuario ?? "Invitado"` para mostrar un nombre por defecto.

console.log("(44)============================================(44)");

let nombreUsuario = null;

nombreUsuarioInvitado = nombreUsuario ?? "Usuario Invitado"

console.log(nombreUsuarioInvitado);

// #### 45 . Crea una función `obtenerDescuento(precio)` 
// que devuelva precio \* 0.1, pero si precio es null o undefined, 
// devuelva 0.

console.log("(45)============================================(45)");


const obtenerDescuento = ((precio)=>{
  return (precio ?? 0) *0.1
  
  
})

console.log(obtenerDescuento(10));
console.log(obtenerDescuento());

// #### 46 . Crea un objeto
//  `libro = { titulo: "1984", autor: { nombre: "Orwell" } }`.
//  Muestra en consola: `libro?.autor?.nombre` y 
// `libro?.editorial?.nombre ?? "Sin editorial"`

console.log("(46)============================================(46)");

const libro = {
  titulo: "1984",
  autor: {
    nombre: "Orwell"
  }
};

console.log(libro?.autor?.nombre);
console.log(libro?.editorial?.nombre ?? "Sin editorial");

// #### 47 . Declara un objeto vacío {} y 
// prueba a acceder a `obj?.datos?.valor` sin que dé error. 
// Intenta acceder si el ? para ver que pasa.

console.log("(47)============================================(47)");

const objetoVacio = {}

console.log(objetoVacio?.datos?.valor);
//console.log(objetoVacio.datos.valor);//

// #### 48 . Crea una variable `usuario` con el 
// valor `null`. Usa `usuario?.nombre ?? "Usuario no registrado"` 
// para mostrar un texto alternativo.

console.log("(48)============================================(48)");


const usuario25 = null;
console.log(usuario25?.nombre ?? "Usuario no registrado");

// 49 #### 49 . Crea una lista clientes con 
// varios objetos que tengan estructura similar 
// a: `{ nombre: 'Pepe', direccion: { ciudad: 'Sevilla' } }`. 
// Usa `?.` para acceder de forma segura a la ciudad de cada cliente,
// mostrando `"sin ciudad"` si no existe.

console.log("(49)============================================(49)");



const clientes = [
  { nombre: 'Pepe', direccion: { ciudad: 'Sevilla' } },
  { nombre: 'Laura', direccion: { ciudad: 'Granada' } },
  { nombre: 'Javier', direccion: { ciudad: 'Córdoba' } },
  { nombre: 'Marta' }
];

for (const cliente of clientes) {
  console.log(cliente.direccion?.ciudad ?? "Sin ciudad");
}













