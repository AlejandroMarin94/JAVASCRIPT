import { moviesList } from "./apiconfig.js";
import { selectGetMovie } from "./apifetch.js";




export function createSelect(){
    
    const selectCategories = document.createElement("select");
    selectCategories.classList.add("select-list");

    const arrayData = Object.entries(moviesList);
    console.log(arrayData);

    arrayData.forEach((option)=>{
        const selectOption = document.createElement("option");
        selectOption.setAttribute("value", option[1]);
        selectOption.textContent = option[0]
        selectCategories.appendChild(selectOption);
        
        
    })
    createSelectEventistener(selectCategories);
    console.log("probando");
    

    return selectCategories;
}

function createSelectEventistener(select){
    select.addEventListener("change", (e)=>{
        const selectList = e.target.value;
        const container = document.querySelector(".movies-container");
        selectGetMovie(container, selectList);
    })
}
