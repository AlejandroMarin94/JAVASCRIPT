import { apiConfig } from "./apiconfig.js"
import { showMovies } from "../functions/moviesFunctions.js";

export async function getMovies(container){
    try {
        const response = await fetch(
            `${apiConfig.baseUrl}popular?api_key=${apiConfig.apiKey}`
        );
        if (!response.ok){
            throw new Error ("Error obteniendo listado " + response.status);
        }
        const data = await response.json();

       showMovies(data.results, container);
        
    } catch (error) {
        console.log("Se ha producido un error: ", error);
        
    }
}

function getDetails(container){
    
}