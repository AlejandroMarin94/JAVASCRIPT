function saludarUsuario(nombre) {
  console.log("Hola " + nombre);
}
saludarUsuario("Alejandro");

const multiplicarPorTres = function (n) {
  return n * 3;
};

console.log(multiplicarPorTres(5));

const esPar = (n) => n % 2 === 0;

console.log(esPar(18));

persona = {
  nombre: "Alejandro",
  presentarse: function () {
    return "Hola que tal estás soy " + this.nombre;
  },
};

console.log(persona.presentarse());

const array = [1, 3, 5, 7];

function nuevoArray() {
  return array.map((elemento) => elemento * 2);
}
console.log(nuevoArray());

const edades = [12, 18, 25, 33, 40, 47, 53, 60, 68, 75];

function filtrarMayores() {
  return edades.filter((edades) => edades > 18);
}

console.log(filtrarMayores());

function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    return contador;
  };
}

const contar = crearContador();
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());


let saludito = "Hola";

function saludarUsuario15(){
    return saludito;
    
}
console.log(saludarUsuario15());


function factorial(n){
    if(n<1) return 1;
       return n* factorial(n-1);
    }


console.log(factorial(5));

function sumita(n){
    return n +1
}

function multiplicando(n){
    return n*2

}

function operaciones(n) {
    return multiplicando(sumita(n));
}

console.log(operaciones(3));


function saludoPersonalizado(nombre){
return "Hola " + nombre;
}

console.log(saludoPersonalizado("Mar"));


const cuadrado = (n) => n**2;

console.log(cuadrado(8));

const personas = [
    { nombre: "Lucía", edad: 28 },
    { nombre: "Carlos", edad: 35 },
    { nombre: "Marta", edad: 22 },
    { nombre: "Javier", edad: 40 },
    { nombre: "Sofía", edad: 31 }
];


 const buscado = personas.find(elem=> elem.edad>=18);

 console.log(buscado);


 cuenta = {
    saldo: 30,
    consultarSaldo: function(){
        return "tu saldo es " + this.saldo

    }
 }
  
 console.log(cuenta.consultarSaldo());
 

 function crearMultiplicador(base){
    return function(n){
        return n* base;
    }
 }

 const pordos = crearMultiplicador(2);

 console.log(pordos(8));
 



 function incrementarContador(){
     let contadorcito = 0;


    return function (){

    
    contadorcito++
    return contadorcito}
 }
const contando = incrementarContador()
  console.log(contando());
 console.log(contando());
 console.log(contando());
 console.log(contando());
 console.log(contando());

 

 