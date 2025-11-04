1; //

function descuento(precio) {
  return precio - precio * 0.1;
}

console.log(descuento(50));

2; //

persona = {
  nombre: "Lucia",
  edad: "30",
};

const nuevaPersona = { ...persona, nombre: "Lucía Perez" };

console.log(nuevaPersona);

3; //

const operando = (a, b, op) => op(a, b);
console.log(operando(3, 2, (x, y) => x * y));

4; //

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

//6
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

const cochecito = new Coche("Toyota", "Corolla");
console.log(cochecito.getInfo());




9// 

class CajaFuerte {

    #codigo = 4321
    

    getCodigo(){
        return this.#codigo;
    }
}

const clave = new CajaFuerte();
console.log(clave.getCodigo());

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

const animal = {
  sonido(){
    console.log("Hace un sonido");
    
  }
}

const gato = Object.create(animal);
gato.maullar =function(){
  console.log("Miau");
  
}
  





