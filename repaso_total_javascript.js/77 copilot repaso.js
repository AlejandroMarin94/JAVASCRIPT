let frutas = ["manzana", "plátano", "pera"];

frutas.forEach((elem) => {
  console.log(elem);
});

function saludar(nombre) {
  return "Hola " + nombre;
}

pelicula = {
  nombre: "Inception",
  año: 2010,
  genero: "Ciencia ficcion",
};

console.log(
  `La pelicula ${pelicula.nombre} es del año${pelicula.año} y su genero es ${pelicula.genero}`
);

let edades = [12, 17, 20, 25, 15];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
}

let numeros = [1, 2, 3, 4];

function sumaArray() {
  let sumaTotal = 0;
  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
  }
  return sumaTotal;
}
console.log(sumaArray());

const personas = [
  { nombre: "Alejandro", edad: 31 },
  { nombre: "Mar", edad: 29 },
  { nombre: "Ricardo", edad: 29 },
];

for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad >= 18) {
    console.log(`${personas[i].nombre} es mayor de edad`);
  } else {
    console.log(`${personas[i].nombre} es menor de edad`);
  }
}


const alumnos = [
    { nombre: "Ana", nota: 7 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 }
];

function aprobado(alumnos){
    
    
    for( let i=0; i<alumnos.length; i++){
        const nombre = alumnos[i].nombre 
        const nota= alumnos[i].nota
        if( nota >=5){console.log(`${nombre} ha aprobado`);
        
            
        } else{
            console.log(`${nombre} ha suspendido`);
            
        }
    }
}

aprobado(alumnos);


const nombres = ["ana", "luis", "marta"];
// Resultado esperado: ["ANA", "LUIS", "MARTA"]


function newArray(nombres){
    return nombres.map(elemento=>elemento.toUpperCase())
    
}
console.log(newArray(nombres));



const edades18 = [12, 17, 20, 25, 15];
// Resultado esperado: [20, 25]


function newArray2(edades18){
    return edades18.filter(elemento=>elemento>=18)
}
console.log(newArray2(edades18));




const precios = [10.99, 5.50, 3.25];
// Resultado esperado: 19.74


function newArray3(precios){
    return precios.reduce((acc, elem )=> acc + elem)

}

console.log(newArray3(precios));


const personas10 = [
  { nombre: "Alejandro", edad: 31 },
  { nombre: "Mar", edad: 29 },
  { nombre: "Ricardo", edad: 29 },
];
// Resultado esperado: { nombre: "Mar", edad: 29 }

function newArray22(){
    return personas10.find(elem =>  elem.edad===29)
}
console.log(newArray22());


const alumnos50 = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];
// Resultado esperado: ["ANA", "MARTA"]

function ultimoArray(){
    return alumnos50
    .filter(alumno=>alumno.nota>=5)
    .map(alumno=> alumno.nombre.toUpperCase())
}
  
console.log(ultimoArray());



const palabras = ["ana", "luis", "ana", "marta", "luis", "ana"];
// Resultado esperado: { ana: 3, luis: 2, marta: 1 }

function contarPalabras(){
  return palabras.reduce((acc,palabras)=>{
    acc[palabras]= (acc[palabras] || 0) +1;
    return acc
    
  }, {})
}

console.log(contarPalabras());



const equipos = [
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Marta", edad: 30 }
];
// Resultado esperado: { 30: ["Ana", "Marta"], 25: ["Luis"] }

function agruparEquipos(){
  return equipos.reduce((acc,elem)=>{
    const { edad, nombre} = elem;
    acc[edad] = acc[edad] ||[];
    acc[edad].push(nombre);
    return acc;

  }, {});
}

console.log(agruparEquipos());
