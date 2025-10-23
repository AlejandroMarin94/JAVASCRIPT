//Declara una variable x = 10 y otra activo = true. Usa Number() para sumar ambos valores correctamente.

let x = 10;
let activo = true;

let sumita = x + Number(activo);

console.log(sumita);

//Crea una variable edad = 25 y otra esMayor = false. Convierte el booleano a número y súmalo con edad.

let edad = 25;
let esMayor = false;

let Adios = edad + Number(esMayor);
console.log(Adios);

//Declara puntos = 7 y habilitado = true. Usa conversión explícita para obtener el total de puntos.

//Usa let base = 5 y let visible = false. Convierte visible a número y suma con base.

//Declara let edad = 0. Usa Boolean() para convertirla y observa el resultado.

//Crea let puntos = 15. Convierte a string y concaténalo con otro texto.

//Usa let resultado = false. Convierte a string y verifica su tipo con typeof.

//Declara let total = 3.14. Convierte a string y muestra cuántos caracteres tiene.

//Usa let edad = 18. Convierte a string y úsalos en una plantilla con console.log.

//Declara una variable llamada lado con valor 7. Calcula el área del cuadrado
// usando el operador de multiplicación (*) y muestra el resultado con console.log.
let lado = 7;
let lado2 = 5 + 2;

let area = lado * lado2;
console.log(area);

//Declara una variable lado con valor 4. Calcula el área del cuadrado usando el operador de exponenciación
//  (**) y muestra el resultado con console.log.

let expo1 = 4;

let expTotal = expo1 ** 2;
console.log(expTotal);

//COMPROBAR SI EL NUMERO 25 ES DISTINTO DEL 22

let valor1 = 25;
let valor2 = 22;

if (valor1 === valor2) {
  console.log("numeros iguales");
} else {
  console.log("numeros diferentes");
}

//Usa == para comparar valor1 y valor2. ¿Qué resultado esperas? //Debe salir true porque solo compara el valor y no el tipo

//Usa === para comparar edad1 y edad2. ¿Qué resultado devuelve? False, porque esta haciendo comparacion estricta y el tipo no es le mismo

//Control de acceso según edad y permiso Declara una variable tienePermiso
//  con valor true y una variable edad con valor 17. Usando una estructura if - else,
//  permite el acceso solo si la persona tiene permiso y tiene al menos 18 años.

let tienePermiso = false;
let edad17 = 17;

if (tienePermiso === true && edad17 >= 18) {
  console.log("Acceso autorizado");
} else {
  console.log("NO PUEDES PASARRRRRRR");
}

//2.	Verificación de usuario activo Crea una variable usuarioActivo
//  con valor false y otra edad con valor 20. Si el usuario está activo
//  y tiene al menos 18 años, mostrar “Puede votar”. En caso contrario, mostrar “No puede votar”.

let usuarioActivo = true;
let edad20 = 20;

if (usuarioActivo && edad >= 20) {
  console.log("Puede votar");
} else {
  console.log("No puede votar");
}

//4.	Evaluación de licencia de conducir Crea tieneLicencia = true y edad = 16.
//  Solo permite conducir si la persona tiene licencia y tiene 18 años o más.

let tieneLicencia = true;
let edad16 = 20;

let terniario =
  tieneLicencia && edad16 >= 18 ? "Puede conducir" : "No puede conducir";
console.log(terniario);

//5.	Control de entrada con múltiples condiciones Declara esMiembro = true,
//  tieneInvitacion = false y edad = 21. Permite la entrada si la persona
//  es miembro o tiene invitación, y tiene al menos 18 años.

let esMiembro = true;
let tieneInvitacion = false;
let edad21 = 16;

if ((esMiembro || tieneInvitacion === true) && edad21 >= 18) {
  console.log("Puede pasar");
} else {
  console.log("A la mierda pringao");
}

//  Usa un ternario para asignar a mensaje
// "Puede votar" si la edad es mayor o igual a 18,
//  o "No puede votar" si no lo es.

let edad100 = 19;

let puedeVotar = edad100 >= 18 ? "Puede votar" : "No puede votar";
console.log(puedeVotar);

//Declara una variable numero.
//  Usa un ternario para mostrar "Positivo"
//  si el número es mayor que 0, o "Negativo o cero"
//  si no lo es.

let numeroVar = -2;

let numeroTerniario = numeroVar > 0 ? "Positivo" : "Negativo o cero";

console.log(numeroTerniario);

// Declara una variable booleana esPremium.
//  Usa un ternario para mostrar "Acceso completo"
// si es premium, o "Acceso limitado" si no lo es.

let esPremium = true;

let terniario12 = esPremium ? "Acceso ilimitado" : "Acceso limitado";
console.log(terniario12);

//Declara una variable bebida = 1.
//  Usa un switch para devolver "agua" si el número es 1,
//  "jugo" si es 2, "café" si es 3, "té" si es 4.
// Si el número no está entre 1 y 4, devuelve "sin bebida".

let bebida = 10;

switch (bebida) {
  case 1:
    console.log("agua");
    break;

  case 2:
    console.log("jugo");
    break;

  case 3:
    console.log("café");
    break;

  case 4:
    console.log("té");
    break;
  default:
    console.log("pide otra cosa, no tenemos esa bebida");
}


//Declara una variable bebida = 3.
//  Usa un switch para devolver una bebida distinta
//  para cada número del 1 al 4.
//  Si el número es mayor que 4,
//  devuelve "no disponible".

// hacer con for una cuenta del 01 al 15
for( let i =1; i<=15; i++){
    console.log(i); 
}

// Con bucle while presentar los numeros
//  del 01 al 30 que sean pares.

let n=1;

while(n<=30){
  if(n %2 ===0){
    console.log(n);

  }
  n++
}
   

// Con bucle do while simulas que haces una accion 5 veces pero presentando tambien la opcion 0
