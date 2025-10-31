import { apiConfig } from "./apiconfig.js";
import { showMovies } from "../functions/moviesFunctions.js";
import { createDetailsCard} from "../components/movieCardDetail.js";

export async function getMovies(container) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}popular?api_key=${apiConfig.apiKey}`
    );
    if (!response.ok) {
      throw new Error("Error obteniendo listado " + response.status);
    }
    const data = await response.json();

    showMovies(data.results, container);

    
  } catch (error) {
    console.log("Se ha producido un error: ", error);
  }
}

export async function getDetails(idPelicula, container) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}${idPelicula}?api_key=${apiConfig.apiKey}`
    );
    if (!response.ok) {
      throw new Error("Error obteniendo listado " + response.status);
    }
    const data = await response.json();

    container.innerHTML = "";
    container.appendChild(createDetailsCard(data));
  } catch (error) {
    console.log("Error no llegan las peliculas", error);
  }
}

export async function getCast(movieId) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ae7be434369d2443fe4989e702fb311e`);
  const data = await response.json();
  return data.cast; // esto es un array de actores
}


export async function selectGetMovie(container, datalist){
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}${datalist}?api_key=${apiConfig.apiKey}`
    )
    if(!response.ok){
      throw new Error("No se han conseguido pelis de la lista", response.status);
    }

    const data = await response.json()
    showMovies(data.results, container)
  } catch (error) {
    console.log("Error no llegan las peliculas de las listas elegidas", error);
  }
}

