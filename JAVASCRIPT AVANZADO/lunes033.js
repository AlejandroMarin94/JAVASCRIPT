//01

function descuento(precio){
    return precio -precio*0.10
}

console.log(descuento(50));

//02

persona ={
    nombre: "Lucia",
    edad: 30
};

const nuevaPersona = {...persona, nombre: "Lucía Perez"};

console.log(nuevaPersona);

//03

function operar(fn, x, y){
    return fn(x,y)
}

function multiplicar(x,y){
    return x*y
}

const multiplicando = (a,b,op)=>op(a,b);
console.log(multiplicando, 3,5, (a,b)=>a*b);


console.log(operar(multiplicar, 3,5));

//04 

function doble(x){
    return x*2
}

function incrementar(x){
    return x+1
}

const compose = x=> incrementar(doble(x));
console.log(compose(5));

//5

class Coche {
    constructor(marca,modelo) {
        this.marca = marca;
        this.modelo = modelo;
        
    }
    arrancar(){
        return `El coche ${this.marca} ha arrancado`
    }

    getInfo(){
        return `Este coche es un ${this.marca}  ${this.modelo}`
    }

    static tipos(){
        return `vehiculo terrestre`;
    }
}

const cochecito = new Coche("Toyota", "Corolla");
console.log(cochecito.arrancar());
console.log(Coche.tipos())

class cocheElectrico extends Coche{
    constructor(marca,modelo,bateria){
        super(marca, modelo)
        this.bateria = bateria
    }

    arrancar(){
        return `El coche marca ${this.marca} y modelo ${this.modelo} tiene un ${this.bateria}% de bateria`;
    }

}

const cocheNuevo = new cocheElectrico("Toyota", "Corolla", 50);
console.log(cocheNuevo.arrancar());

console.log(cochecito.getInfo());

//9

class cajaFuerte{
    #codigo= 4321;

    getCodigo(){
       return this.#codigo;
    }


}

const cajaSeguridad = new cajaFuerte();
console.log(cajaSeguridad.getCodigo());

//10

const volar ={volador(){
    return "Estoy volando";

}}

const nadar = {nadador(){
    return "Estoy nadando"
}}

function crearSuperMascota(nombre){
    return{
        nombre,
        ...volar,
        ...nadar,

    }
}
const mascotita = crearSuperMascota("Lola");
console.log(mascotita.volador());
console.log(mascotita.nadador());

//11

const animal={ sonido(){
    console.log("Hace un sonido");
    
}

}

animal.sonido();

const gato = Object.create(animal);

gato.maullar= ()=>{
    console.log("Miau");
    
}

gato.maullar()

//12

const objetoA= {a: "Hola"};
const objetoB= {b: "soy"};
const objetoC= {c: "Alejandro"}

const objetosUnidos = Object.assign([],objetoA,objetoB,objetoC);
console.log(objetosUnidos);

//13

const caja ={
    color:"rojo",
    forma: "cuadrada",
}

Object.seal(caja);
caja.contenido= "dinero";
console.log(caja);

//14 
console.log(gato.hasOwnProperty("maullar"));
console.log(gato.hasOwnProperty("sonido"));

//15 



const valores = new Set([1, 2, 2, 3, 4]);
console.log(valores);
valores.delete(3);
console.log(valores);
console.log(valores.has(4));

//16

console.log(valores.add(5))

//17

const objetitos = new WeakSet

const objetitoA = {nombre: "Alejandro"}
const objetitoB = {nombre: "Mar"}

objetitos.add(objetitoB);
objetitos.add(objetitoA);

console.log(objetitos.has(objetitoA));

//18

const animales = new Map ()

animales.set("perro", "mamifero");
animales.set("gato", "mamifero");
animales.set("ballena", "mamifero");



console.log(animales)




//19

const mapa = new Map()

const clave1 = {id:1}
const clave2 = {id:2}

mapa.set(clave1, "Alejandro");
mapa.set(clave2, "Mar");

console.log("Map completo: ", mapa);
console.log("Map id:1 ", mapa.get(clave1));

//20 

const objeto = new WeakMap
const usuario = {}

objeto.set(usuario, "abc123")
console.log(objeto.has(usuario));

//21

const arr1 =[1,2]
const arr2 =[3,4]
const arr3 =[5,6]

const array4 = [...arr1, ...arr2, ...arr3];
console.log(array4);

//22

const array10 = [10, 20, 30, 40];

const [a,b,...rest] = array10

console.log(a);
console.log(b);
console.log(rest);

//23

arrayTri = [1, [2, [3, [4]]]];

console.log(arrayTri.flat(3));

//24

arrayMap = [2, 4, 6]

console.log(arrayMap.flatMap(n=> [n, n/2]));

//25

const bucle = new Map ();

bucle.set("a",[1,2,3]);
bucle.set("b",2)

for(const [k,x,] of bucle){
    console.log(k,x);
    

}
















































