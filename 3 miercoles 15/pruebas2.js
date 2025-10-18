
let familia = [
    {nombre: "Alejandro", edad: 31},
    {nombre: "Carmen", edad: 33},
    {nombre: "Ricardo", edad: 29}

 ]
 console.log(familia); 

 function MostrarNombre(familia){
    familia.forEach(elemento=>{
        console.log(elemento.nombre);
    }
    
    )
 }
 MostrarNombre(familia);
