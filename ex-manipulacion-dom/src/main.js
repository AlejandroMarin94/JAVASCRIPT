import './style.css'

//ex1
const firstId = document.querySelector("#firstid");
console.log(firstId);

const firstclass = document.querySelectorAll(".firstclass");
console.log(firstclass);
//ex2
const allclass = document.querySelectorAll(".ex2");
console.log(allclass);


const parrafo = document.createElement("p");
parrafo.textContent = "loreem ipsum";
const button = document.createElement("button")
button.textContent = "continuar";

allclass.forEach(elem=>{
  elem.appendChild(parrafo);
  elem.appendChild(button);

})

for(let i=0; i<allclass.length;i++){
  allclass[i].appendChild(parrafo);
  allclass[i].appendChild(button);
}
