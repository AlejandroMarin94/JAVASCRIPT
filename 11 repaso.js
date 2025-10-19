 
 
 //SUMAR NUMERO Y BOOLEANO USANDO CONVERSION EXPLICITA CON NUMBER

 let par =10;
 let verdad = true;

 let total = par + Number(verdad);

 console.log(total);


//CALCULA EL AREA DE UN CUADRADO USANDO DOS OPERADORES ARITMETICOS DIFERENTES

let lado1 = 2+2;
let lado2= 2*2;

let area =lado1 * lado2;
console.log(area);

 




// USANDO IF ELSE IF ELSE, CON EL BOOLEANO PERMISOS 
// Y EDAD 18 AÑOS VERIFICA SI EL USUARIO PUEDE ACCEDER 
// TIENE QUE CUMPLIR
//AMBOS REQUISITO, TAMBIEN SI NO PUEDE ACCEDER

let edad =15;
let permisos= true;

if(edad>= 18 && permisos === true){
    console.log("El usuario tiene acceso");}
    else{
        console.log("no tiene acceso");
    }
   
    

    
    


 
 
 

 
    
    // Usar un terniario para decidir si un alumno está aprobado, partimos del 6.5 de nota

    let nota =6.5

    let aprobado= nota>=6.5 ?"El alumno está aprobado" : "El alumno está suspenso";
    console.log(aprobado);

    // Con una variable de una fruta usar switch
    //  y poner varias frutas diferentes y decir que precio
    //  tienen cada una, usar interpolacion de texto.
    
    let fruta = "fresa";

    switch(fruta){
        case "manzana":
            console.log(`La fruta ${fruta} está disponible`);
        break;
        case "kiwi":
            console.log(`La fruta está disponible mañana`);
        break;
        default:
            console.log(`No tenemos esa fruta disponible`);
        
    }

            

        
    
    

  
  
    
    

    // Con bucle for presenta en pantalla una cuenta desde el 1 al 15

   for(let i= 1; i<=15; i++){
    console.log(i);
   }

    

    
    // Con bucle while presentar los numeros del 01 al 30 que sean pares.
     
    let n=0;
    while(n<=30){
        if(n%2===0){
            console.log(n);
        }
        n++
    }
    



 
    // Con bucle do while simulas que haces una accion 5 veces pero presentando tambien la opcion 0





    