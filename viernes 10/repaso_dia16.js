 
 
 //SUMAR NUMERO Y BOOLEANO USANDO CONVERSION EXPLICITA CON NUMBER
 
 let number = 5;
 let booleano = true;
 let convertida  = Number(booleano);

 let suma = number + convertida

 console.log(suma);

 




//CALCULA EL AREA DE UN CUADRADO USANDO DOS OPERADORES ARITMETICOS DIFERENTES
 
let lado1 = 4;
let lado2 = 2*2

let area = lado1 * lado2

console.log(area);



// USANDO IF ELSE IF ELSE, CON EL BOOLEANO PERMISOS 
// Y EDAD 18 AÑOS VERIFICA SI EL USUARIO PUEDE ACCEDER 
// TIENE QUE CUMPLIR
//AMBOS REQUISITO, TAMBIEN SI NO PUEDE ACCEDER

 let permisos = true;
 let edad = 15;

 if(edad>=18 && permisos===true){
    console.log("Tienes acceso");}
    else {
        console.log ("no tienes acceso")
    }
    
 
 

 
    
    // Usar un terniario para decidir si un alumno está aprobado, partimos del 6.5 de nota
 let nota = 4;

 let aprobado = nota>=5 ? "El alumno está aprobado" :"El alumno está suspenso";
 console.log(aprobado);
    // Con una variable de una fruta usar switch y poner varias frutas diferentes y decir que precio tienen cada una, usar interpolacion de texto.
    let fruta = "manzana"
    let precio = 5;

    switch(fruta){
        case "fresa":
            console.log(`El precio de la ${fruta} es de ${precio}*0.5`);
            break;
        case "manzana":
            console.log(`El precio de la ${fruta} es de ${precio}`)
            break;
            default:
                console.log("No tenemos esa fruta");
            

    }
    
    
    

    // Con bucle for presenta en pantalla una cuenta desde el 1 al 15

    for(let i=1; i<=15; i++){
        console.log(i);
    }
    

    
    // Con bucle while presentar los numeros del 01 al 30 que sean pares.
let n=0
while(n<30){
    if(n%2===0){
        console.log(n);
    }
    n++;
}

 
    // Con bucle do while simulas que haces una accion 5 veces pero presentando tambien la opcion 0





    