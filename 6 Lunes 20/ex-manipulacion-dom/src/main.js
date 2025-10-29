import "./style.css";

//ex1 Crea un archivo HTML con un párrafo con un id único.
//Utiliza document.getElementById() para acceder al
// párrafo y muestra su contenido en la consola.
//En el archivo HTML anterior crea varios elementos
// con la misma clase. Ahora utiliza
// document.querySelectorAll() para acceder
//  a todos los elementos con dicha clase
// y muestrasu contenido en la consola.

const firstid = document.getElementById("firstid");
console.log(firstid);

const firstclass = document.querySelectorAll(".firstclass");
console.log(firstclass);

//ex2
//Ejercicio 2. Cambiar el contenido de un
// elemento del DOM. Crea un archivo HTML
// con un div vacío.Escribe una función que
// utilice document.querySelectorAll()
// para acceder al elemento del div y añada el
// siguiente contenido: un párrafo con
// un ‘lorem ipsum…’ y debajo un botón con el texto
// continuar

const classex2 = document.querySelectorAll(".ex2");
console.log(classex2);

const parrafo = document.createElement("p");
parrafo.textContent = "loreem ipsum";
const button = document.createElement("button");
button.textContent = "Continuar";

classex2.forEach((elem) => {
  elem.appendChild(parrafo);
  elem.appendChild(button);
});

//EX3Crea una web en HTML
// Debe mostrar 4 cuadrados rellenos de
// color hex. #3b78d7. Usando CSS centrar
// los cuadrados horizontal y verticalmente
// con una separación de 10px. Una vez esté listo
//  el código CSS elimina los elementos HTML
// y crea una función que le pasemos el número
// de cuadrados y añada todos los elementos HTML
// necesarios para mostrar el mismo resultado que antes.

// Ahora crea las clases necesarias en CSS para que
// los cuadrados alternen 3 colores sucesivamente y
// actualiza tu función para que aplique las clases.
// Nota: para definir las clases CSS que va a
// tener un elemento en Javascript usa la
// propiedad “className” de dicho elemento
// asignándole una cadena de texto con el
// nombre de las clases.

const containerex3 = document.querySelector(".ex3");

const containerPpal = document.createElement("div");
containerPpal.classList.add("container-ppal");

for (let i = 0; i < 4; i++) {
  const cuadrados = document.createElement("div");
  cuadrados.classList.add("cuadrados");
  if (i === 0) {
    cuadrados.classList.add("uno");
  } else if (i === 1) {
    cuadrados.classList.add("dos");
  } else if (i === 2) {
    cuadrados.classList.add("tres");
  } else {
    cuadrados.classList.add("cuatro");
  }

  containerPpal.appendChild(cuadrados);
}

containerex3.appendChild(containerPpal);

//4 Ejercicio 4. Crea un elemento “card”
// o tarjeta para mostrar una película
// Utiliza tanto código HTML como código CSS
// para darle la apariencia que prefieras.
// Utiliza un objeto película con los datos
// de una película y la URL a la imagen de su
// portada. Una vez terminado, genera un
// duplicado dinámicamente usando código
// Javascript en el que utilices las propiedades
//  y métodos vistos para el acceso y manipulación
// del DOM.

const movieDescription = {
  title: "Frozen",
  description: "Olaf es la caña",
  poster:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaU_RrbI58OsBmnEO8vwJU2tN81p5afC_eQ&s",
};

function createMovieTitle(title) {
  const movieTitle = document.createElement("h3");
  movieTitle.textContent = title;
  movieTitle.classList.add("movie-title");
  return movieTitle;
}

function createMovieDescription(description) {
  const descriptionTitle = document.createElement("p");
  descriptionTitle.textContent = description;
  descriptionTitle.classList.add("movie-description");
  return descriptionTitle;
}

function createPoster(imageUrl) {
  const moviePoster = document.createElement("img");
  moviePoster.setAttribute("src", imageUrl);
  moviePoster.classList.add("movie-poster");
  return moviePoster;
}

function movieCard(movie) {
  const MovieCard = document.createElement("div"); // Crea un contenedor <div>
  MovieCard.classList.add("movie-card"); // Le asigna una clase CSS para estilos

  // Añade el título, descripción e imagen como hijos del contenedor
  MovieCard.appendChild(createMovieTitle(movie.title));
  MovieCard.appendChild(createMovieDescription(movie.description));
  MovieCard.appendChild(createPoster(movie.poster));

  return MovieCard; // Devuelve el <div> completo con todos los elementos dentro
}

const divex4 = document.querySelector("#ex4");

for (let i = 1; i <= 8; i++) divex4.appendChild(movieCard(movieDescription));


//5 Tras crear un shadow DOM con un <p>Into Shadow</p> dentro de el,
//  usa shadow.querySelector('p') y cambia su textContent. 
// Tenemos que modificar un <> que está dentro del shadow para que 
// ponga “Hola desde el Shadow DOM”. 
// Resultado: el texto del p encapsulado debe ser rojo y 
// cambiar a “Hola desde el Shadow DOM”. 
// Nota: Debe estar en open.



//6 ## Ejercicio 6. Mostrar coordenadas del ratón en tiempo real Vamos 
// a mover el ratón por encima de un div que creemos que tendrá de 
// clase "container-mouse-move" y con un tamaño de 300px x 200px y 
// border 1px solid grey. Necesitamos mostrar por consola los valores 
// de clientX / clientY mediante javascript. Nota:Usar un event listener
//  con 'mousemove' para conseguirlo y extraer esas propiedades del event.
// Resultado: la consola va mostrando coordenadas al mover el ratón por 
// el container.


const ex6 = document.querySelector("#ex6");
const div6 = document.createElement("div");
ex6.appendChild(div6);

div6.classList.add("container-mouse-move");
div6.textContent = "Hola soy un div";
div6.addEventListener("mousemove",(a)=>{
  console.log(("Coordenada X" + a.clientX), ("Coordenada Y" + a.clientY));
  
});


//7 ## Ejercicio 7. Extreer valor de un input 
// Vamos a definir por javascript un input, con id="input-test" 
// y lo agregaremos al DOM Luego crearemos un event listener 
// del tipo 'input' y vmoa s mostrar por consola el valor actual
//  de ese input cuando tecleemos dentro. 
// Nota: Para extraer el valor usaremos input.value

const ex7 = document.querySelector("#ex7");
const div7= document.createElement("div");
const input7 = document.createElement("input");
input7.setAttribute("id", "input-test");
div7.appendChild(input7);
ex7.appendChild(div7);

input7.addEventListener("input", ()=>{
  console.log(input7.value);
  
})
  

//## Ejercicio 8. Creando un contador de clicks

//Vamos a definir un boton, con el texto inicial "Clicks: 0" y 
// lo agregaremos al DOM. Crearemos un event listener que cada vez 
// que hagamos click, incremente ese numero mostrado. 
// EJ: Clicks: 1, Clicks: 2, y así sucesivamente. 
// Opcional: Crear tambien un botn para resetear el contador.

const ex8 = document.querySelector("#ex8");
const div8 = document.createElement("div");
const button22 = document.createElement("button");

button22.textContent ="Clicks: 0"

div8.appendChild(button22);
ex8.appendChild(div8);

let contador =0;

button22.addEventListener("click",()=>{
  contador++;
  button22.textContent = "Clicks: " + contador;
  console.log("Premio al llegar a 1000");
  
} );


//## Ejercicio 9. Detectar tecla presionada Vamos a crear un event listener para el DOM, que nos
//  mostrará por consola que tecla hemso pulsado. 
// Nota: Usar el evento 'keydown' y extraer su valor con event.key.

 const ex9= document.querySelector("#ex9");
 const div9= document.createElement("div");
 div9.classList.add("div9");

 ex9.appendChild(div9);

 document.addEventListener("keydown",(event)=>{
  console.log("Tecla presionada : " + event.key);
  
 })


 //10 ## Ejercicio 10. Animar un cuadrado Hacer que un cuadrado se mueva hacia la 
 // derecha 100px y luego vuelva a su posición original Nota: Usar requestAnimationFrame y 
 // cambiar sentido multiplicando translateX por -1 cuando sea necesario.

 const ex10 = document.querySelector("#ex10");
 const div10 = document.createElement("div");
 div10.classList.add("cuadrado10");
 const div11 = document.createElement("div");
 

 ex10.appendChild(div10);
 ex10.appendChild(div11);

 const button33= document.createElement("button");
 button33.classList.add("boton-cuadrado");

 div11.appendChild(button33);


function animarElemento(elemento, tiempoInicio, direccion) {
  let tiempoActual = performance.now(); 
  // Tiempo actual en milisegundos

  let progreso = (tiempoActual - tiempoInicio) / 1000; 
  // Tiempo transcurrido en segundos

  if (progreso < 1) {
    let desplazamiento = progreso * 100 * direccion; 
    // Calcula cuánto debe moverse, multiplicando por dirección (1 o -1)

    elemento.style.transform = `translateX(${desplazamiento}px)`; 
    // Aplica el movimiento al estilo

    requestAnimationFrame(() => animarElemento(elemento, tiempoInicio, direccion)); 
    // Sigue animando en el mismo sentido
  } else {
    elemento.style.transform = `translateX(${1 * direccion}px)`; 
    // Asegura que termine en la posición final

    if (direccion === 1) {
      // Si fue hacia la derecha, espera un poco y vuelve
      setTimeout(() => {
        requestAnimationFrame(() => animarElemento(elemento, performance.now()));
      }, 300); // Pausa de 300ms antes de volver
    }
  }
}

// ⏱️ Inicia la animación hacia la derecha
button33.addEventListener("click", ()=>{
requestAnimationFrame(() => animarElemento(div10, performance.now(), 1));

})


//Ejercicio 11. Cambio de color en el click de ratón Teniendo un div con un
//  background color azul, hacer que cambie a rojo en el click, y si se 
// vuelve a pulsar, de nuevo azul y así sucesivamente. 
// Nota: Es de tipo transicion

const ex11 = document.getElementById("ex11");
const div111 = document.createElement("div");
div111.classList.add("div111");

ex11.appendChild(div111);


div111.addEventListener("click", ()=>{
  if(div111.style.backgroundColor==="blue"){
    div111.style.backgroundColor="red";
  } else{
    div111.style.backgroundColor = "blue";
  }
})


//# Ejercicio 12. Rotar un elemento Rotar un 
// elemento creado 360º. 
// Nota: Usar requestAnimationFrame.


const ex12 = document.querySelector("#ex12");

const rotado = document.createElement("div");
rotado.classList.add("rotado");

ex12.appendChild(rotado);

let rotacion= false;

rotado.addEventListener("click",()=>{
  rotacion=!rotacion
  if(rotacion){
    rotado.style.transform="rotate(180deg)";

  } else{
    rotado.style.transform= "rotate(0deg)";
  }
});

// 13 // ## Ejercicio 13. Arrastrar un elemento encima de otro y volcar datos Crea dos divs, 
// teniendo en cuenta que uno deberás arrastrarlo encima del otro pasandole un opjeto que 
// previamente tengas definido, y vuenca su contenido en el textContent del segundo elemento.

const zonaParaDrop = document.createElement("div");
zonaParaDrop.className = "demo-drag";
zonaParaDrop.textContent = "Sueltas el dragable aqui"

const elementoDragable= document.createElement("div");
elementoDragable.className ="demo-drop";
elementoDragable.textContent = "Arrastrame";
elementoDragable.draggable = true;

ex13.appendChild(elementoDragable);
ex13.appendChild(zonaParaDrop);

const pelicula = {
  nombre: "Hercules",
  año: 1994,
  categoria : "infantil",

}

elementoDragable.addEventListener("dragstart",(event)=>{
  event.dataTransfer.setData("sendData", JSON.stringify(pelicula));
  console.log("lanzado dragstart");
  
})
zonaParaDrop.addEventListener("dragover", (event)=>{
  event.preventDefault();
})

zonaParaDrop.addEventListener("drop", (event)=>{
  event.preventDefault();
  const datosPelicula = JSON.parse(event.dataTransfer.getData("sendData"));
  zonaParaDrop.textContent="";
  
  Object.values(datosPelicula).forEach((elem)=>{
    zonaParaDrop.textContent+= `${elem}, `
    
    
  });

  
})


// ## Ejercicio 14 — Scope local y global Declara variables con var, let y const en 
// distintos ámbitos (global, función, bloque) y muestra por consola dónde son accesibles.


let globalVar = "Variable global";

function globalAll(){
  console.log(globalVar);
  
}
globalAll();
console.log(globalVar);


/*function dentroDelaFuncion(){
    let dentroFuncion= "Adios";
    console.log(dentroFuncion);
    
}
dentroDelaFuncion();
console.log(dentroFuncion); // dentroFuncion is not defined;
*/
// ## Ejercicio 15 — setTimeout Crea un mensaje 
// que se muestre en #app 3 segundos después de 
// pulsar un botón.


const buttonContador = document.createElement("button");
buttonContador.className = "button-Contador";
buttonContador.textContent = "Pulsar aquí";
const parrafoElemet = document.createElement("p");
parrafoElemet.textContent = "Esperando mensaje";


ex15.appendChild(buttonContador);
ex15.appendChild(parrafoElemet);
buttonContador.addEventListener("click", ()=>{
  setTimeout(()=>{
  parrafoElemet.textContent="Mensaje mostrado al pasar 3 segundos";
}, 3000);
});



// 16 ## Ejercicio 16 — setInterval y clearInterval Crea un contador 
// que aumente cada segundo y un botón que lo detenga 
// cuando se pulse y otro para resetearlo a 0.


const buttonsetInterval = document.createElement("button");
buttonsetInterval.className = "button-setInterval";
buttonsetInterval.textContent = "Pulsar aquí para empezar contador";

const buttonclearInterval = document.createElement("button");
buttonclearInterval.className = "button-clearInterval";
buttonclearInterval.textContent = "Pulsar aquí para resetear contador";

const contadorDisplay = document.createElement("div");
contadorDisplay.className = "contador-display";
contadorDisplay.textContent = "0";

ex16.appendChild(buttonsetInterval);
ex16.appendChild(buttonclearInterval);
ex16.appendChild(contadorDisplay);

let contador10 =0;
let intervalo = null;

buttonsetInterval.addEventListener("click", ()=>{
  if(!intervalo){
    intervalo = setInterval(()=>{
      contador10++;
      contadorDisplay.textContent = contador10;
    }, 1000);
  }
})

buttonclearInterval.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  contador = 0;
  contadorDisplay.textContent = contador;
});



// 19 haz una peticion fetch() a una API publica ( por ejemplo
// https://jsonplaceholder.typicode.com/user y muestra los nombres en una lista)



const container = document.getElementById("ex19");


const title = document.createElement("h2");
title.textContent = "Lista de Usuarios";
container.appendChild(title);

const ul = document.createElement("ul");
container.appendChild(ul);


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      ul.appendChild(li);
    });
  })
  .catch(error => {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Error al cargar los usuarios.';
    errorMsg.style.color = 'red';
    container.appendChild(errorMsg);
    console.error('Error en la petición fetch:', error);
  });
  

  //20 simula una peticion a una url erronea y muestra en consola 
  // el mensaje de error con el codigo de estado.


  /*
  fetch('https://jsonplaceholder.typicode.com/usuarios') 
  .then(response => {
    if (!response.ok) {
      
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Datos recibidos:", data);
  })
  .catch(error => {
    console.error("Falló la petición:", error.message);
  });
*/

 fetch('https://jsonplaceholder.typicode.com/usuarios')
 .then(response=>{
  if(!response.ok){
    throw new Error(`Error ${response.status} : ${response.statusText}`)
    
  }
  return responde.json();
 })
 .then(data=>{
  console.log("Datos recibidos", data);
  
 })
 .catch(error=>{
  console.error("Error en algun sitio", error.message)
 })

  //21 Envía un objeto JSON a una API ( como https://jsonplaceholder.typicode.com/posts)
  // y muestra la respuesta recibida.

  const nuevoPost = {
    title: "Hola que tal",
    body: "Estamos haciendo pruebas",
    userId: 1
  }
/*
  fetch ("https://jsonplaceholder.typicode.com/posts",{
    method: "Post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoPost)

  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Respuesta recibida del servidor:', data);
  })
  .catch(error => {
    console.error('Error al enviar el JSON:', error.message);
  });
  */

  fetch("https://jsonplaceholder.typicode.com/posts",{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(nuevoPost)
  })

  .then(response=>{
    if(!response.ok){
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return response.json();
  })
  .then(data=>{
    console.log("datos recibidos con exito", data)
  })

  .catch(error=>{
    console.error("Error al enviar el JSON", error.message)
  });

  // ## Ejercicio 22 - fetch PUT simulado Reemplaza completamente
  //  el post con id: 1 en la misma API usando el método PUT,
  // enviando un nuevo title y body.

  const nuevoPostActualizado = {
    id: 1,
    title: "Hola como estabas",
    body: "Ya hemos terminado las pruebas",
    userId: 1
  }

  fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoPostActualizado)
  })
  .then(response=>{
    if(!response.ok){
      throw new Error(`Error${response.status}, ${response.statusText}` )
    }
    return response.json()
  })
  .then(data=>{
    console.log("Los datos han sido modificados", data);
    
  })
  .catch(error=>{
    console.error("Error al recibir los datos", error.message);
  })


 // ## Ejercicio 23 - fetch  PATCH Modifica solo el título 
 // (title) del post con id: 1 usando el método PATCH.

 const cambioTitulo= {
  title: "Nuevo titulo con PATCH"
 }

 fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(cambioTitulo)
})
 .then(response=>{
  if(!response.ok){
    throw new Error (`Error en los datos recibidos ${response.status}${response.statusText}`)
  }
  return response.json()

  .then(data=>{
    console.log("Datos recibidos con exito", data);
    
  })
  
  .catch(error=>{
    console.error("Error en los datos recibidos", error.message)
  })
 })


 //24 ## Ejercicio 24 - fetch DELETE Elimina el post 
 // con id: 1 usando el método DELETE y muestra un 
 // mensaje en consola confirmando la eliminación.

 fetch("https://jsonplaceholder.typicode.com/posts/1",{
method: "DELETE"
 }

 )
 .then(response=>{
  if(!response.ok){
    throw new Error(`Error ${response.status}${response.statusText}`)
  }
 console.log("Post eliminado con exito");

  })
  .catch(error=>{
    console.error("Error al eliminar el post", error.message);
  });
  
 

  ////////// ASYNC////////////

// # Ejercicio 19 — fetch GET básico 
// Haz una petición fetch() a una API pública 
// (por ejemplo, https://jsonplaceholder.typicode.com/users)
// y muestra los nombres en una lista.

const container10 = document.getElementById("ex20");

  const title10 = document.createElement("h2");
  title10.textContent = "Lista de Usuarios";
  container10.appendChild(title10);

  const ul10 = document.createElement("ul");
  container10.appendChild(ul10);

async function mostrarUsarios() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
      throw new Error(`Error${response.status}${response.statusText}`)
    }
    const users = await response.json();

    users.forEach(user=>{
      const li = document.createElement("li");
      li.textContent = user.name;
      ul10.appendChild(li)
    });
  } catch(error){
    const errorMSG = document.createElement("p");
    errorMSG.textContent = "Error al cargar los usuarios";
    errorMSG.style.color = "red";
    container10.appendChild(errorMSG);
    console.error("Error", error.message);
  }
  
}
mostrarUsarios();



//## Ejercicio 20 — Manejo de errores con fetch Simula una petición 
// a una URL errónea y muestra en consola el mensaje de error 
// con el código de estado.

async function simularErrorFetch(){
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/usuarios");
    if(!response.ok){
      throw new Error(`Error ${response.status}${response.statusText}`)
    }
    const data = await response.json();
    console.log("Datos recibidos con exito", data);
    
  }
  catch(error){
    console.error("Error en la peticion", error.message)
  }
}
simularErrorFetch();


  //21 Envía un objeto JSON a una API ( como https://jsonplaceholder.typicode.com/posts)
  // y muestra la respuesta recibida.

  const nuevoPostAsync = {
    title: "Estamos usando funciones async",
    body: "Ha llegado esta funcion async",
    userId: 2
  }

   async function enviandoUnObjeto(){
    try{
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(nuevoPostAsync),


      } );
      if(!respuesta.ok){
        throw new Error(`Error ${respuesta.status}${respuesta.statusText}`)
      }
      const datos = await respuesta.json();
      console.log("Datos del envio sincronizado recibidos", datos);
      
    }
    catch(error){
      console.error("Error en los datos de sincro", error.message)
    }

   }

   enviandoUnObjeto();
    



  // ## Ejercicio 22 - fetch PUT simulado Reemplaza completamente
  //  el post con id: 1 en la misma API usando el método PUT,
  // enviando un nuevo title y body.

  const nuevoPostActualizadoAsync = {
    id: 2,
    title: "Hola como estabas",
    body: "Ya hemos terminado las pruebas",
    userId: 2
  }


  async function UsandoSyncActualizar(){
    try{
      const respuesta3 = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoPostActualizadoAsync)
      }

      );
      if(!respuesta3.ok){
        throw new Error(`Error en los datos sincros ${respuesta3.status}${respuesta3.statusText}`)
      }
      const resultado3 = await respuesta3.json()
      console.log("Datos recibidos de la sincro", resultado3)
    }
    catch(error){
      console.error("Error en la sincronizacion", error.message)
    }
  }

  UsandoSyncActualizar()


//25-26 Amplia el ejercicio anterior...
//## Ejercicio 25 — localStorage Crear un elemento input donde el 
// usuario pueda introducir su nombre y un boton para ejecutar una acción 
// con contenido que ponga Guardar. Al lanzar el evento de pulsar ese boton, 
// guarda su valor en localStorage con el nombre que desees y recupéralo 
// al recargar la página.Ejecuta esta accion verificando si actualmente 
// está disponible localStorage.


//## Ejercicio 26 — sessionStorage Amplía el ejercicio anterior pero usando
//  ahora sessionStorage para mostrar la diferencia al cerrar la pestaña. 
// Ejecuta esta accion verificando si actualmente está disponible sessionStorage.

/* 
const inputNombre = document.createElement("input");
  inputNombre.placeholder = "Introduce tu nombre";
  inputNombre.id ="nombre";

  const buttonGuardar = document.createElement("button");
  buttonGuardar.textContent = "Guardar";


const parrafo2 = document.createElement("p");
const parrafo3 = document.createElement("p");


const ex25 = document.getElementById("ex25");
ex25.appendChild(inputNombre);
ex25.appendChild(buttonGuardar);
ex25.appendChild(parrafo2);
ex25.appendChild(parrafo3);

if( typeof localStorage !== undefined){
    parrafo2.textContent = localStorage.getItem("nombreUsuario")
  }

  if( typeof sessionStorage !== undefined){
    parrafo3.textContent = sessionStorage.getItem("nombreUsuario")
  }




buttonGuardar.addEventListener("click", ()=>{
  
  if( typeof localStorage !== undefined){
    localStorage.setItem("nombreUsuario", inputNombre.value)
  }
  if( typeof sessionStorage !== undefined){
    sessionStorage.setItem("nombreUsuario", inputNombre.value)
  }
}) 
*/

const inputNombre = document.createElement("input");
  inputNombre.placeholder = "Introduce tu nombre";
  inputNombre.id ="nombre";

  const buttonGuardar = document.createElement("button");
  buttonGuardar.textContent = "Guardar";


const parrafo2 = document.createElement("p");
const parrafo3 = document.createElement("p");


const ex25 = document.getElementById("ex25");
ex25.appendChild(inputNombre);
ex25.appendChild(buttonGuardar);
ex25.appendChild(parrafo2);
ex25.appendChild(parrafo3);

if(typeof localStorage!=="undefined"){
  parrafo2.textContent = localStorage.getItem("nombreUsuario");
}
if(typeof sessionStorage!=="undefined"){
  parrafo3.textContent = sessionStorage.getItem("nombreUsuario");
}

buttonGuardar.addEventListener("click", ()=>{
  if(typeof localStorage!=="undefined"){
    localStorage.setItem("nombreUsuario", inputNombre.value)
  }
  if(typeof localStorage !==undefined){
    sessionStorage.setItem("nombreUsuario", inputNombre.value)
  }
})


  
  
  //27 ## Ejercicio 27 - Cargar datos de peliculas desde TMDB Vamos 
  // a realizar una consulta más completa a la APi de TMDB. En ella, 
  // rescataremos los datos de las películas y las vams a mostrar por 
  // pantalla de una forma que se asemeje a una web actual.


import { API_KEY } from "./config.js";


const ex27 = document.getElementById("ex27");

const titulo = document.createElement("h1");
titulo.textContent = "Buscador de peliculas TMBD"

ex27.appendChild(titulo);


const input = document.createElement("input");
input.placeholder ="Escribe aqui el nombre de la pelicula";

ex27.appendChild(input);


const botonBusqueda = document.createElement("button");
botonBusqueda.textContent= "Buscar";

ex27.appendChild(botonBusqueda);


const contenedorPeliculas = document.createElement("section");
contenedorPeliculas.style.display = "flex";
contenedorPeliculas.style.flexDirection= "column";
ex27.appendChild(contenedorPeliculas);


botonBusqueda.addEventListener("click",()=>{
  const query = input.value.trim();
  if(!query) return;


  const url= `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=es-ES`;

  fetch(url)
  .then(response=>{
    if(!response.ok){
      throw new Error ("Error en la cargar " + response.status);
    }
    return response.json();
  })
  .then(data=>{
    contenedorPeliculas.innerHTML = "";

    if(data.results.length ===0){
      contenedorPeliculas.innerHTML= "<p> No se encontraron peliculas. </p>"
      return;
    }

    data.results.forEach(pelicula=>{
      const card = document.createElement("div");
      card.style.background = "black";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.alignItems = "center";

      const titulo = pelicula.title;
      const resumen = pelicula.overview;
      const fecha = pelicula.release_date || "fecha desconocida";
      const poster = pelicula.poster_path 
      ? `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`
      : "";

      if(poster){
        const img = document.createElement("img");
        img.src = poster;
        card.appendChild(img);
      }

      const h3 = document.createElement("h3");
      h3.textContent = titulo;
      h3.style.color= "white"
      card.appendChild(h3);

      const parrafoFecha = document.createElement("p");
      parrafoFecha.innerHTML = "Estreno " + fecha;
      parrafoFecha.style.color= "white"
      card.appendChild(parrafoFecha);

      const parrafoResumen = document.createElement("p");
      parrafoResumen.textContent = resumen;
      parrafoResumen.style.textAlign = "justify";
      parrafoResumen.style.color= "white"
      card.appendChild(parrafoResumen);

      

      contenedorPeliculas.appendChild(card);
    })
  })
  .catch(error=>{
ex27.innerHTML = "<p> Error al cargar peliculas </p>";
console.error("Error al recibir peliculas", error);
  })
})

