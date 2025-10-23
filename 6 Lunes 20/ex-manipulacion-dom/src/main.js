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

// 13

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