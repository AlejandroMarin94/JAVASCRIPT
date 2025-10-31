import { showMovies } from "../functions/moviesFunctions.js";
import { apiConfig } from "./apiConfig.js";

export async function getMovies(container, typeList = "upcoming") {

  const url = `${apiConfig.baseUrl}${typeList}?api_key=${apiConfig.apiKey}&language=es-ES&page=1`
  console.log(url);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error obteniendo listado. " + response.status);
    }
    const data = await response.json();
    // console.log("Pelis obtenidas: ", data);
    if (typeof localStorage !== undefined) {
      localStorage.setItem("dataMovies", JSON.stringify(data.results));
    }
    showMovies(data.results, container);
  } catch (error) {
    console.log("Se ha producido un error: ", error);
  }
}



