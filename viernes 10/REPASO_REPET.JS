//Declara una variable x = 10 y otra activo = true. Usa Number() para sumar ambos valores correctamente.

let num = 10;
let activo = true;

let suma = num + Number(activo)

console.log (suma);

//Crea una variable edad = 25 y otra esMayor = false. Convierte el booleano a número y súmalo con edad.

let edad = 25;
let esMayor = false;

let añade= edad + Number(esMayor);
console.log(añade)

//Declara puntos = 7 y habilitado = true. Usa conversión explícita para obtener el total de puntos.

let puntos = 7
let habilitado = true

let total = puntos + Number(habilitado);
console.log(total)

//Usa let base = 5 y let visible = false. Convierte visible a número y suma con base.

let base = 5;
let visible = false;

let juntos = base + Number(visible);
console.log(juntos)


//Declara let edad = 0. Usa Boolean() para convertirla y observa el resultado.

let age = 0;
let meses = Boolean(age);
console.log(meses);

//Crea let puntos = 15. Convierte a string y concaténalo con otro texto.

let points = 15;
let newpuntos = String(points);
console.log(`Este año hemos conseguido ${newpuntos} puntos `)

//Usa let resultado = false. Convierte a string y verifica su tipo con typeof.

let result = false;
let newresult= String(result)

console.log(typeof newresult);

//Declara let total = 3.14. Convierte a string y muestra cuántos caracteres tiene.

let allin = 3.14;
let convert = String(allin);
console.log (convert.length)

//Usa let edad = 18. Convierte a string y úsalos en una plantilla con console.log.

let money = 18;
let dollar =`Hola me puedes dejar ${String(money)} dolares ` 

console.log(dollar);

//Declara una variable llamada lado con valor 7. Calcula el área del cuadrado
// usando el operador de multiplicación (*) y muestra el resultado con console.log.

let lado_1 = 7;

let area= lado_1*lado_1;

console.log(area);

//Declara una variable lado con valor 4. Calcula el área del cuadrado usando el operador de exponenciación
//  (**) y muestra el resultado con console.log.

let lado_2 =4
let lado_3 = 2**2

let area_2= lado_2*lado_3;
console.log(area_2);

//COMPROBAR SI EL NUMERO 25 ES DISTINTO DEL 22

let num10= "25";
let num11= "22";

if(num10 === num11){
    console.log("los numeros son iguales");}
    else{
        console.log("los numeros son diferentes");
    }

    //Usa == para comparar valor1 y valor2. ¿Qué resultado esperas? //Debe salir true porque solo compara el valor y no el tipo

    let valor20 = 10;
    let valor21 ="10";

    
    console.log( valor20 ==valor21);

    //Usa === para comparar edad1 y edad2. ¿Qué resultado devuelve? False, porque esta haciendo comparacion estricta y el tipo no es le mismo

    let edad1 = 18;
    let edad2 = "18";
    console.log(edad1===edad2);

    //Control de acceso según edad y permiso Declara una variable tienePermiso
    //  con valor true y una variable edad con valor 17. Usando una estructura if - else,
    //  permite el acceso solo si la persona tiene permiso y tiene al menos 18 años.

     let tienePermiso = true;
    let edad10 = 18;
   

    let message_18 = "permisoConfirmado";
    let message_19 = "permisoDenegado";
    let message;

    if (edad10>=18 && tienePermiso){
        message=message_18;}
    else { 
        message= message_19;

    }
    console.log(message)

    //2.	Verificación de usuario activo Crea una variable usuarioActivo
    //  con valor false y otra edad con valor 20. Si el usuario está activo
    //  y tiene al menos 18 años, mostrar “Puede votar”. En caso contrario, mostrar “No puede votar”.

    
let usuarioActivo = false;
    let edad50 = 20;
    let message_181 = "puede votar"
    let message_182 = "no puede  votar"

    if( edad50>=18 && usuarioActivo === false){
        message= message_181;
    }
    else {
        message = message_182;
    }
    console.log(message);

    //4.	Evaluación de licencia de conducir Crea tieneLicencia = true y edad = 16.
    //  Solo permite conducir si la persona tiene licencia y tiene 18 años o más.

     let tieneLicencia = true;
    let edad22 = 16;
    let message_183 = "Puede conducir"
    let message_184 = "No puede condudcir"

    if(tieneLicencia===true && edad22>=18){
        message = message_183;
    }
    else{
        message = message_184;
    }
    console.log(message);

    //5.	Control de entrada con múltiples condiciones Declara esMiembro = true,
    //  tieneInvitacion = false y edad = 21. Permite la entrada si la persona
    //  es miembro o tiene invitación, y tiene al menos 18 años.

       
let esMiembro = true;
    let tieneInvitacion = false;
    let edad25 = 21;
    let message001 = "Tiene acceso permitido"
    let message002 = "No tiene acceso permitido"
    let message003 = "Tiene acceso VIP"

    if( edad25>=18 && esMiembro && tieneInvitacion){
        message = message003;
    }
    else if( edad25 && (esMiembro || tieneInvitacion === true)){
        message = message001;
    }
    else {
        message = message002;
    }

    console.log(message);

    //Declara una variable edad con un valor numérico.
    //  Usa un ternario para asignar a mensaje 
    // "Puede votar" si la edad es mayor o igual a 18,
    //  o "No puede votar" si no lo es.

    let edad14 = 18

    let votacion = edad14>= 18 ? "puede votar" : "no puede votar";
    console.log(votacion);

    //Declara una variable numero.
    //  Usa un ternario para mostrar "Positivo"
    //  si el número es mayor que 0, o "Negativo o cero"
    //  si no lo es.

    let numero15 = 15

    let signo15 = numero15 >= 0 ? "positivo" : "negativo"

    console.log (signo15);

    // Declara una variable booleana esPremium.
    //  Usa un ternario para mostrar "Acceso completo" 
    // si es premium, o "Acceso limitado" si no lo es.


 let esPremium = true;

 let acces15 = esPremium === true ? "acceso completo" : "acceso limitado";

 console.log(acces15);

 //Declara una variable bebida = 1.
 //  Usa un switch para devolver "agua" si el número es 1,
 //  "jugo" si es 2, "café" si es 3, "té" si es 4. 
 // Si el número no está entre 1 y 4, devuelve "sin bebida".

 let drink = 5;
 let resultado

 switch(drink){
    case 1:
        resultado = "La bebida es agua";
        break
    case 2:
        resultado = "la bebida es fanta";
        break
        default:
            resultado = "sin bebida"
            break}

            console.log(resultado)


            //Declara una variable bebida = 3.
            //  Usa un switch para devolver una bebida distinta
            //  para cada número del 1 al 4.
            //  Si el número es mayor que 4,
            //  devuelve "no disponible".

 let bebida = 3;
 let tipo

 switch(bebida){
    case 1:
    tipo = "la bebida es zumo";
    break
    
    case 2:
    tipo = "la bebida es agua";
    break
    
    case 3:
        tipo = " la bebida es leche";
        break

        case 4:
            tipo = " la bebida es ron";
            break
    
            default:
            tipo = " no hay bebida disponible";

    
     
 }
        console.log(tipo);

        // hacer con for una cuenta del 01 al 15

        for ( let i =1 ; i<=15 ; i++){
            console.log(i)
        }

        // Con bucle while presentar los numeros
        //  del 01 al 30 que sean pares.

        let numerito = 1

        while (numerito<=30){
            if ( numerito %2 ===0){
                console.log(numerito);
                
            }
            numerito ++
        }
        