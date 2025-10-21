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
