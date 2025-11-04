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


persona = {
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

  getInfo(){
    return `El coche es ${this.marca} y es el modelo ${this.modelo}`
  }

  static tipo() {
    return "El vehiculo es terrestre";
  }
  

}
const cocheUno = new Coche("Toyota", "Corolla");

console.log(cocheUno.arrancar())
console.log(Coche.tipo())

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
    super(marca, modelo)
    this.bateria = bateria;
  }

  arrancar(){
    return `El coche es ${this.marca} ${this.modelo} ha arrancado con ${this.bateria}%`
  }
  
}

const electrico = new cocheElectrico("Toyota", "Corolla", 50);

console.log(electrico.arrancar())

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

    #codigo = 4321
    

    getCodigo(){
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
 

const volador = {volar(){
    return ("Estoy volando")
}}

const nadador = { nadar(){
    return ("Estoy nadando")
}}


function crearSuperMascota(nombre){
    return{
        nombre,
        ...volador,
        ...nadador
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
  sonido(){
    console.log("Hace un sonido");
    
  }
}

const gato = Object.create(animal);
gato.maullar =function(){
  console.log("Miau");
  
}

gato.maullar();
// #### 12. Usa `Object.assign` para combinar 
// tres objetos (`a`, `b`, `c`) en uno solo.

const a = {a:"Hola"};
const b = {b :"soy un"};
const c = {c: "desarrolador"};

const frase =Object.assign({},a,b,c)

console.log(frase);


//13 #### 13. Crea un objeto `caja` con dos propiedades,
//  séllalo con `Object.seal()` e intenta añadir una nueva propiedad. ¿Qué ocurre?.

console.log("(13)============================================(13)");

const caja ={
  color: "rojo",
  forma: "cuadrada"
}


Object.seal(caja);
caja.color = "verde";
console.log(caja);
caja.contenido ="dinero";
console.log(caja);

//14 #### 14 . Comprueba con `hasOwnProperty` si el objeto `
// gato` tiene su propio método `maullar` y si hereda `sonido`.

console.log("(14)============================================(14)");


console.log(gato.hasOwnProperty("maullar"));
console.log(gato.hasOwnProperty("sonido"));

//15 #### 15 . Crea un `Set` con los valores `[1, 2, 2, 3, 4]`, 
// elimina el número 3 y comprueba si el número 4 está presente.

console.log("(15)============================================(15)");


const valores = new Set([1,2,2,3,4]);
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


const ws =new WeakSet

const objetoA = {nombre: "Alejandro"};
const objetoB = {nombre: "Mar"};

ws.add(objetoA,objetoB);
console.log(ws.has(objetoA,objetoB));

//18 #### 18 . Crea un `Map` que relacione nombres de 
// animales con su tipo (por ejemplo "perro" → "mamífero"), 
// y muestra el tamaño del `Map`.

console.log("(18)============================================(18)");


const nombresAnimales = new Map();

nombresAnimales.set("perro","mamifero")
nombresAnimales.set("ballena","mamifero")
nombresAnimales.set("gato","mamifero")

console.log(nombresAnimales.get(`perro`));
console.log(nombresAnimales.size);


//19 #### 19 . Crea un `Map` donde las claves sean 
// objetos (por ejemplo `{ id: 1 }`) y los valores sean nombres.

console.log("(19)============================================(19)");


const claves = new Map()


const clave1 = {id: 1}
const clave2 = {id: 2}

claves.set(clave1, "Alejandro")
claves.set(clave2, "Mar")

console.log("Map completo :", claves);
console.log("Map clave1: ", claves.get(clave1));




//20 #### 20 . Usa un `WeakMap` para asociar un 
// objeto usuario con un token `"abc123"`.
console.log("(20)============================================(20)");


const objetito = new WeakMap();
const usuario  = {};

objetito.set(usuario, "abc123");
objetito.has(usuario);
console.log(objetito.has(usuario));



console.log("(21)============================================(21)");

//21 #### 21 . Combina con spread los arrays `[1, 2], [3, 4] y [5, 6]`
//  en uno solo.


const array1 = [1, 2]
const array2 = [3, 4]
const array3 = [5, 6]


const copia = [...array1,...array2,...array3];


console.log(copia);


console.log("(22)============================================(22)");


//#### 22 Usa rest para extraer el primer y segundo elemento 
// de `[10, 20, 30, 40]` y guardar el resto en otra variable.


const array5 = [10, 20, 30, 40]
const [primero, segundo,...resto] = array5

console.log(primero,segundo);
console.log(resto);

console.log("(23)============================================(23)");


// #### 23 . Usa `flat()` sobre `[1, [2, [3, [4]]]]` 
// para obtener `[1, 2, 3, 4]`.

const array6 = [1, [2, [3, [4]]]]
console.log(array6.flat(3));


console.log("(24)============================================(24)");


// 24 #### 24 . Usa `flatMap()` sobre `[2, 4, 6]` 
// para crear un nuevo array que contenga el número original y su mitad.

const array10 = [2, 4, 6]

const arrayNuevo = array10.flatMap(n=>[n ,n/2])

console.log(arrayNuevo);


console.log("(25)============================================(25)");


// 25 #### 25 . Crea un `Map` y recórrelo con 
// un bucle `for...of` mostrando cada `clave` y `valor`.

const nuevoArray =[
  ["a",1,3],["b",2,4],["c",3,5]
]
for(const [k,v] of nombresAnimales){
  console.log(k,v);
  
}
for(const [k,v,y] of nuevoArray){
  console.log(k,v,y);
  
}

























  





