import "./style.css";

const anchorElement = document.querySelector("#app");

// Exercise 1
const paragraphEx1 = document.querySelector("#parrafo-ex1");

console.log(paragraphEx1);

const variosP = document.querySelectorAll(".clase-ex1");

console.log(variosP);

// Exercise 2
const containerElementEx2 = document.querySelectorAll("#ex2");

const pElement = document.createElement("p");
pElement.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit error magnam, non at, molestias temporibus quae a pariatur accusamus rerum dignissimos blanditiis. Officiis quasi sequi cumque, possimus totam minima eos.";

const buttonElement = document.createElement("button");
buttonElement.textContent = "Continuar";

containerElementEx2.forEach((container) => {
  container.appendChild(pElement);
  container.appendChild(buttonElement);
  anchorElement.appendChild(container);
});

// Exercise 3
const containerElementEx3 = document.querySelector("#ex3");

const colorsForSquares = {
  blue: "blue",
  green: "green",
  yellow: "yellow",
};

function createSquares(quantity, containerToAttach) {
  let contadorColor = 0;
  for (let i = 0; i < quantity; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    if (contadorColor === 0) {
      square.classList.add(colorsForSquares.blue);
      contadorColor++;
    } else if (contadorColor === 1) {
      square.classList.add(colorsForSquares.green);
      contadorColor++;
    } else {
      square.classList.add(colorsForSquares.yellow);
      contadorColor = 0;
    }
    containerToAttach.appendChild(square);
  }
}

createSquares(4, containerElementEx3);

// Exercise 4
const movieData = [
  {
  title: "Gladiator",
  description: "Rusell Crown se da de leches",
  poster:
    "https://imgs.search.brave.com/9vXL0yeEvhsWvSMq4PDDwPxTQOidb98dgjfBvkYRhi8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bW92aXN0YXJwbHVz/LmVzL3JlY29ydGUv/bi9nYWxlcmlhL0Y0/MTg2MzY4",
},
{},
{}
]

const movieObject = {
  title: "Gladiator",
  description: "Rusell Crown se da de leches",
  poster:
    "https://imgs.search.brave.com/9vXL0yeEvhsWvSMq4PDDwPxTQOidb98dgjfBvkYRhi8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bW92aXN0YXJwbHVz/LmVzL3JlY29ydGUv/bi9nYWxlcmlhL0Y0/MTg2MzY4",
};

function createMovieImg(imageUrl) {
  const movieImgElement = document.createElement("img");
  movieImgElement.setAttribute("src", imageUrl);
  movieImgElement.classList = "movie-img";
  return movieImgElement;
}

function createMovieTitle(title) {
  const movieTitleElement = document.createElement("h3");
  movieTitleElement.textContent = title;
  movieTitleElement.classList = "movie-title";
  return movieTitleElement;
}

function createMovieDescription(description) {
  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.textContent = description;
  movieDescriptionElement.classList = "movie-description";
  return movieDescriptionElement;
}

function createMovieCard(movie) {
  const movieCardElement = document.createElement("div");
  movieCardElement.classList = "movie-card";

  movieCardElement.appendChild(createMovieImg(movie.poster));
  movieCardElement.appendChild(createMovieTitle(movie.title));
  movieCardElement.appendChild(createMovieDescription(movie.description));

  return movieCardElement;
}

/*function createMovieCard(movie) {

  const movieCardElement = document.createElement("div");
  movieCardElement.classList = "movie-card";

  const movieImgElement = document.createElement("img");
  movieImgElement.setAttribute("src", movie.poster);
  movieImgElement.classList = "movie-img";
  movieCardElement.appendChild(movieImgElement);

  const movieTitleElement = document.createElement("h3");
  movieTitleElement.textContent = movie.title;
  movieTitleElement.classList = "movie-title";
  movieCardElement.appendChild(movieTitleElement);

  const movieDescriptionElement = document.createElement("p");
  movieDescriptionElement.textContent = movie.description;
  movieDescriptionElement.classList = "movie-description";  
  movieCardElement.appendChild(movieDescriptionElement);

  return movieCardElement;
}
*/


const movieContainerElement = document.querySelector('#ex4')
for (let i = 1; i <= 8; i++) movieContainerElement.appendChild(createMovieCard(movieObject))


  