 /*
 
 //SUMAR NUMERO Y BOOLEANO USANDO CONVERSION EXPLICITA CON NUMBER
 
 let numero = "20"
 let booleano = false

let suma= numero + Number(booleano)
console.log(suma);

//CALCULA EL AREA DE UN CUADRADO USANDO DOS OPERADORES ARITMETICOS DIFERENTES


let variable1= 4
let variable2= 2**2

let multiplicacion= variable1 * variable2
console.log(multiplicacion);

//COMPROBAR SI EL NUMERO 25 ES DISTINTO DEL 22

let number_1= 25
let number_2= 22

if (number_1 === number_2){
    console.log( "los números son iguales");

}   else {
        console.log ( "los numeros son distintos");
    }

    // USANDO IF ELSE IF ELSE, CON EL BOOLEANO PERMISOS Y EDAD 18 AÑOS VERIFICA SI EL USUARIO PUEDE ACCEDER TIENE QUE CUMPLIR
    //AMBOS REQUISITO, TAMBIEN SI NO PUEDE ACCEDER
 
    const EDAD= 15
    let permisos= false;
    let message_1= "access ok";
    let message_2= "access denied";
    let message_3= "partial access";
    let messagee;


    if (EDAD >=18 && permisos){
        message = message_1;
    }
    else if( EDAD>=18 || permisos){
        message = message_3;}
    else {
        message = message_2;
    }
        
    console.log(message);
    
    // Usar un terniario para decidir si un alumno está aprobado, partimos del 6.5 de nota

    let note = 8

    let message= note >= 6.5 ? "aprobado" : "suspenso"

    console.log(message);

    // Con una variable de una fruta usar switch y poner varias frutas diferentes y decir que precio tienen cada una, usar interpolacion de texto.

     const FRUTA_1 = "manzana";
    const FRUTA_2 = "pera";
    const FRUTA_3 = "melon";

    const price = 2

    switch (FRUTA_3){
        case "manzana":
        console.log (`Para la fruta ${FRUTA_1} su precio es de ${price}`)
        break;

        case "pera":
        console.log (`Para la fruta ${FRUTA_2} su precio es de ${price*1.5}`)
        break;
        
        case "melon":
            console.log(`Para la fruta ${FRUTA_3} el precio es de ${price*8}`)

        break;
        default:
            console.log ( `Lo siento no tenemos esa ${FRUTA_1} en stock`)
    }

    // Con bucle for presenta en pantalla una cuenta desde el 1 al 15

    for ( let i = 1; i<=15; i++ ){
        console.log(i)}
    

    // Con bucle while presentar los numeros del 01 al 30 que sean pares.

     let num =1;

    while(num<=30){
        if(num%2 !==0){
        console.log(num)}
        num++
    }

    // Con bucle do while simulas que haces una accion 5 veces pero presentando tambien la opcion 0

    let cont= 0;
*/
let cont =0;
    do{
        console.log(cont);
        cont++;
        }
        while (cont<=5);

        console.log(10);
        
        

       
    