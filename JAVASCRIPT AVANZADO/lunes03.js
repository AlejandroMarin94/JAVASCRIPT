1; //
console.log("(1)============================================(1)");

function descuento(precio) {
  return precio - precio * 0.1;
}

console.log(descuento(50));

console.log("(2)============================================(2)");
2; //

persona = {
  nombre: "Lucia",
  edad: "30",
};

const nuevaPersona = { ...persona, nombre: "Lucía Perez" };

console.log(nuevaPersona);

console.log("(3)============================================(3)");


3; //

const operando = (a, b, op) => op(a, b);
console.log(operando(3, 2, (x, y) => x * y));

4; //
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

//5
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
//6
console.log("(7)============================================(7)");
//7

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

//8 
console.log("(8)============================================(8)");


const cochecito = new Coche("Toyota", "Corolla");
console.log(cochecito.getInfo());




9// 
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
10// 

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


//11 
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

const a = {a:"Hola"};
const b = {b :"soy un"};
const c = {c: "desarrolador"};

const frase =Object.assign({},a,b,c)

console.log(frase);


//13
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

//14
console.log("(14)============================================(14)");


console.log(gato.hasOwnProperty("maullar"));
console.log(gato.hasOwnProperty("sonido"));

//15
console.log("(15)============================================(15)");


const valores = new Set([1,2,2,3,4]);
valores.delete(3);
console.log(valores);

console.log(valores.has(4));

//16
console.log("(16)============================================(16)");



valores.add(5);
console.log([...valores]);

//17
console.log("(17)============================================(17)");


const ws =new WeakSet

const objetoA = {nombre: "Alejandro"};
const objetoB = {nombre: "Mar"};

ws.add(objetoA,objetoB);
console.log(ws.has(objetoA,objetoB));

//18
console.log("(18)============================================(18)");


const nombresAnimales = new Map();

nombresAnimales.set("perro","mamifero")
nombresAnimales.set("ballena","mamifero")
nombresAnimales.set("gato","mamifero")

console.log(nombresAnimales.get(`perro`));
console.log(nombresAnimales.size);


//19 
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

























  





