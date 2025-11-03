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













