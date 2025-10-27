import { createSection } from "./utils.js";

const anchorElement = document.querySelector(".body-container");

// ********************************************************************
// 20 de Octubre de 2025
// ********************************************************************

// 1) DOM: getElementById / getElementsByClassName / querySelector(All)
const section1 = createSection(
  "1) DOM: getElementById / getElementsByClassName / querySelector(All)"
);

anchorElement.appendChild(section1);

const contenido1 = document.createElement("div");
contenido1.innerHTML = `
<div class="caja" id="mi-id">Caja con id</div>
  <div class="caja">Caja con clase</div>
  <p data-role="saludo">Hola DOM</p>`;

section1.appendChild(contenido1);

const objetoConId = document.getElementById("mi-id");
console.log(objetoConId);

const objetoConClase = document.getElementsByClassName("caja");
console.log(objetoConClase);

const objetosConClase = document.querySelectorAll(".caja");
console.log(objetosConClase);

// 2) DOM — Modificar contenido y atributos, crear/eliminar/reemplazar nodos
//    innerHTML, textContent, set/get/removeAttribute, createElement,
//    appendChild, removeChild, replaceChild, classList, style
const section2 = createSection(
  "2) DOM: modificar/atributos/crear/eliminar/reemplazar"
);

anchorElement.appendChild(section2);

const contenido2 = document.createElement("div");
contenido2.textContent = "Contenido inicial";

section2.appendChild(contenido2);

//InnerHTML vs textContent
contenido2.innerHTML = "<strong>HTML</strong> <em>inserción</em>";
console.log("innerHTML:", contenido2.innerHTML);
contenido2.textContent = "Solo texto";
console.log("textContent:", contenido2.textContent);

//Atributos
contenido2.setAttribute("data-ejemplo", "123");
console.log("getAttribute:", contenido2.getAttribute("data-ejemplo"));
contenido2.removeAttribute("data-ejemplo");

// Crear/append
const hijo = document.createElement("span");
hijo.textContent = " | Hijo";
contenido2.appendChild(hijo);

// Reemplazar
const nuevo = document.createElement("span");
nuevo.textContent = " | Hijo Reemplazado";
contenido2.replaceChild(nuevo, hijo);

// Eliminar
contenido2.removeChild(nuevo);

// classList y style
contenido2.classList.add("back-orange");
contenido2.classList.add("border-blue");

// ********************************************************************
// 21 de Octubre de 2025
// ********************************************************************

// 3) Shadow DOM
const section3 = createSection("3) Shadow DOM");

anchorElement.appendChild(section3);

const contenido3 = document.createElement("div");
contenido3.textContent = "Contenido inicial fuera";

section3.appendChild(contenido3);

const shadow = contenido3.attachShadow({ mode: "open" }); //closed
shadow.innerHTML = `
    <style>p{color: red; margin:0}</style>
    <p>Dentro del Shadow DOM (estilos encapsulados)</p>
  `;

console.log("ShadowRoot:", shadow);

// 4) Eventos — addEventListener, objeto event, delegación, bubbling/capturing, stopPropagation
const section4 = createSection(
  "4) Eventos — addEventListener, objeto event, delegación, bubbling/capturing, stopPropagation"
);

anchorElement.appendChild(section4);

const contenido4 = document.createElement("div");

section4.appendChild(contenido4);

const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Haz click";
contenido4.appendChild(btn);

// addEventListener con callback de evento
function controlarClic(event) {
  console.log("Click: ", {
    type: event.type,
    target: event.target,
    value: event.target.value,
    currentTarget: event.currentTarget,
    posX: event.clientX,
    posY: event.clientY,
  });
}

btn.addEventListener("click", controlarClic);

// Doble click
btn.addEventListener("dblclick", (event) =>
  console.log("Has hecho doble click en ", event.target)
);

// Delegación de eventos (un UL con LIs)
const ul = document.createElement("ul");
ul.className = "lista";
ul.innerHTML = `<li data-id="1">Elemento 1</li><li data-id="2">Elemento 2</li><li data-id="3">Elemento 3</li>`;
contenido4.appendChild(ul);

ul.addEventListener("click", (event) => {
  const element = event.target;
  if (!element) return;
  if (element.tagName === "LI") {
    const dataId = element.getAttribute("data-id");
    console.log("Delegación: clic en li con data-id =", dataId);
  }
});

// Bubbling vs Capturing y stopPropagation
const father = document.createElement("div");
const son = document.createElement("button");
son.className = "btn";
son.textContent = "Clic con propagación";
father.appendChild(son);
contenido4.appendChild(father);

father.addEventListener("click", () => alert("Padre (bubbling)"));
son.addEventListener("click", (event) => {
  alert("Hijo");
  // event.stopPropagation(); // Para parar bubling
});

// Capturing:
father.addEventListener("click", () => alert("Padre (capturing)"), {
  capture: true,
});

// ********************************************************************
// 22 de Octubre de 2025
// ********************************************************************

// 5) Animaciones — requestAnimationFrame, y transiciones/transformaciones CSS desde JS
const section5 = createSection(
  "5) Animaciones — requestAnimationFrame, y transiciones/transformaciones CSS desde JS"
);

anchorElement.appendChild(section5);

const contenido5 = document.createElement("div");

section5.appendChild(contenido5);

const buttonAnime = document.createElement("button");
buttonAnime.setAttribute("id", "iniciar");
buttonAnime.textContent = "Iniciar animación";

const containerAAnimar = document.createElement("div");
containerAAnimar.setAttribute("id", "miElemento");
containerAAnimar.className = "miElementoClass";

contenido5.appendChild(containerAAnimar);
contenido5.appendChild(buttonAnime);

let duracionEvento = 1;

function animarElemento(elemento, tiempoInicio, duracionAnimacion) {
  // El tercer parametro en segundos
  let tiempoActual = performance.now();
  let progreso = (tiempoActual - tiempoInicio) / 1000; // Convertimos de milisegundo a segundos

  if (progreso < duracionAnimacion) {
    //  duracionAnimacion en segundos
    elemento.style.transform = `translateX(${progreso * 100}px)`;
    requestAnimationFrame(() =>
      animarElemento(elemento, tiempoInicio, duracionAnimacion)
    );
  } else {
    elemento.style.transform = `translateX(${duracionAnimacion * 100}px)`;
  }
}

buttonAnime.addEventListener("click", () => {
  requestAnimationFrame((tiempoInicialAlHacerClick) =>
    animarElemento(containerAAnimar, tiempoInicialAlHacerClick, duracionEvento)
  );
});

//Transicion

//const elemento = document.querySelector("#miElemento");

const buttonTransicion = document.createElement("button");
buttonTransicion.setAttribute("id", "iniciar-t");
buttonTransicion.textContent = "Iniciar transición";
contenido5.appendChild(buttonTransicion);

function animarTransicion(elemento, tiempoQueDura, escala) {
  elemento.style.transition = `background-color ${tiempoQueDura}s, transform ${tiempoQueDura}s`;
  elemento.style.backgroundColor = "blue";
  elemento.style.transform = `scale(${escala})`;
}

buttonTransicion.addEventListener("click", () =>
  animarTransicion(containerAAnimar, 1, 0.7)
);

//Transformacion

const elemento2 = document.createElement("div");
elemento2.setAttribute("id", "elementoDos");
elemento2.className = "miElementoClass back-yellow";

const buttonTransform = document.createElement("button");
buttonTransform.setAttribute("id", "iniciar-tr");
buttonTransform.textContent = "Iniciar transformacion";

contenido5.appendChild(elemento2);
contenido5.appendChild(buttonTransform);

function aplicarTransformacion(elemento, tiempo, anguloRotacion, escala = 1) {
  elemento.style.transition = `transform ${tiempo}s ease`;
  elemento.style.transform = `rotate(${anguloRotacion}deg) scale(${escala})`;
}

buttonTransform.addEventListener("click", () =>
  aplicarTransformacion(elemento2, 1, -360)
);

// ********************************************************************
// 23 de Octubre de 2025
// ********************************************************************

// 6) Drag and Drop
const section6 = createSection("6) Drag and Drop");

anchorElement.appendChild(section6);

const contenido6 = document.createElement("div");

section6.appendChild(contenido6);

const zonaParaDrop = document.createElement("div");
zonaParaDrop.className = "demo-drag";
zonaParaDrop.textContent = "Sueltas el dragable aqui";

const elementoDragable = document.createElement("div");
elementoDragable.className = "demo-drop";
elementoDragable.textContent = "Arrástrame";
elementoDragable.draggable = true;

contenido6.appendChild(elementoDragable);
contenido6.appendChild(zonaParaDrop);

const datosParaEnviar = [0, 1, 2, 3, 4, 5, 8];
// Objeto con tres propiedadde y su valor:
/* const objeto = {
  valor1: 1,
  valor2: 2,
  valor3: 3
}*/

elementoDragable.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("sendData", datosParaEnviar);
  console.log("Lanzado dragstart");
});

zonaParaDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
});

zonaParaDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  const datosRecibidos = event.dataTransfer.getData("sendData");
  zonaParaDrop.textContent = datosRecibidos;
  console.log("Drop realizado");
});

// 7) Scope — global, función, bloque; let/const vs var; scope chain
const section7 = createSection(
  "7) Scope — global, función, bloque; let/const vs var; scope chain"
);

anchorElement.appendChild(section7);

const contenido7 = document.createElement("div");

section7.appendChild(contenido7);

let globalVar = "global";

function fnScope() {
  // Scope de función
  let localVar = "local";
  var oldVarFn = "No visible fuera de función";
  console.log("Acceso desde la función: ", globalVar, localVar, oldVarFn);
}

fnScope();
//console.log(localVar) // Comentado porque daría error al pertenecer al scope de la fucnión

if (true) {
  // Scope de bloque
  let bloque = "bloque";
  const cte = 123;
  var oldVar = "visible fuera del bloque"; // No recomendado por eso
  console.log("Acceso dentro del bloque: ", bloque, cte, oldVar);
}

console.log("Variable global: ", globalVar);
console.log("Variables locales:");
// console.log("Invisible fuera de función: ", localVar, oldVarFn); // Comentado porque daría fallo
console.log("Visible fuera de bloque:", oldVar); // No recomendado su uso
// console.log("Invisible fuera de bloque: ", bloque, cte); // Comentado porque daría fallo

// 8) setTimeOut y setInterval
const section8 = createSection("8) setTimeOut y setInterval");

anchorElement.appendChild(section8);

const contenido8 = document.createElement("div");
contenido8.className = "en-fila";

section8.appendChild(contenido8);

const buttonTimeout = document.createElement("button");
buttonTimeout.textContent = "Lanzar timeOut";
const buttonInterval = document.createElement("button");
buttonInterval.textContent = "Lanzar interval";

const circulo = document.createElement("div");
circulo.className = "circle";
circulo.setAttribute("id", "circleId");

contenido8.appendChild(buttonTimeout);
contenido8.appendChild(buttonInterval);

const tiempoQueTarda = 2;

buttonTimeout.addEventListener("click", () => {
  let idTimeOut = setTimeout(() => {
    console.log(`Pulsaste el boton hace ${tiempoQueTarda} segundos`);
  }, tiempoQueTarda * 1000);
  // clearTimeout(idTimeOut);
});

let count = 0;

buttonInterval.addEventListener("click", () => {
  const idInterval = setInterval(() => {
    console.log("setInterval tick:", ++count);
    const circulo = document.createElement("div");
    circulo.setAttribute("id", `circleId-${count}`);
    circulo.className = `circle color-${count}`;
    circulo.textContent = count;
    contenido8.appendChild(circulo);
    if (count >= 10) clearInterval(idInterval);
  }, 1000);
});

// 9) Formularios
const section9 = createSection("9) Formularios");

anchorElement.appendChild(section9);

const contenido9 = document.createElement("div");

section9.appendChild(contenido9);

const formulario = document.createElement("form");
formulario.setAttribute("id", "miFormulario");

const labelName = document.createElement("label");
labelName.setAttribute("for", "email");
labelName.textContent = "Email:";

const inputName = document.createElement("input");
inputName.setAttribute("type", "email");
inputName.setAttribute("id", "email");
inputName.setAttribute("name", "email");

const labelAge = document.createElement("label");
labelAge.setAttribute("for", "edad");
labelAge.textContent = "Edad:";

const inputAge = document.createElement("input");
inputAge.setAttribute("type", "number");
inputAge.setAttribute("id", "edad");
inputAge.setAttribute("name", "edad");

const buttonSubmit = document.createElement("button");
buttonSubmit.textContent = "Enviar";
buttonSubmit.setAttribute("type", "submit");

formulario.appendChild(labelName);
formulario.appendChild(inputName);
formulario.appendChild(labelAge);
formulario.appendChild(inputAge);
formulario.appendChild(buttonSubmit);

contenido9.appendChild(formulario);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inputName.value, inputAge.value);
});

// ********************************************************************
// 24 de Octubre de 2025
// ********************************************************************

// 10) HTTP + Promesas — fetch: GET/POST, manejo de errores (.ok), headers
const section10 = createSection(
  "10) HTTP + Promesas — fetch: GET/POST, manejo de errores (.ok), headers"
);

anchorElement.appendChild(section10);

const contenido10 = document.createElement("div");

section10.appendChild(contenido10);

const token = "kljsdhf986sdf9has9f7806as9dhf978sda6f98dyusf8097as6d098";

// Peticion GET
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPS ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(`GET OK: ${JSON.stringify(data)}`);
    localStorage.setItem("datosRecibidos", JSON.stringify(data));
    localStorage.setItem("auth-token", token);
    localStorage.removeItem("auth-token");
  })
  .catch((err) => console.log(`GET ERROR: ${err.message}`));

// Peticion POST

/*
const url = "https://jsonplaceholder.typicode.com/posts";
const opciones = {
  method: "POST",
  // method: "DELETE"
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token,
  },
  // body: JSON.stringify({id: 1})
  body: JSON.stringify({
    title: "prueba",
    body: "contenido prueba",
    userId: 1,
  }),
};
fetch(url, opciones).then().then().catch();
*/

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  // method: "DELETE"
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: token,
  },
  // body: JSON.stringify({id: 1})
  body: JSON.stringify({
    title: "prueba",
    body: "contenido prueba",
    userId: 1,
  }),
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTPS ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(`POST OK: ${JSON.stringify(data)}`))
  .catch((err) => console.log(`POST ERROR: ${err.message}`));

// ********************************************************************
// 27 de Octubre de 2025
// ********************************************************************

function doFetch(urlFetch, methodToDo, headerPasada, bodyYaConStringify) {
  fetch(urlFetch, {
    method: methodToDo,
    headers: headerPasada,
    // body: JSON.stringify({id: 1})
    body: bodyYaConStringify,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTPS ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(`POST OK: ${JSON.stringify(data)}`))
    .catch((err) => console.log(`POST ERROR: ${err.message}`));
}

const headerCreada = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: token,
};

const bodyForApi = JSON.stringify({
  title: "prueba",
  body: "contenido prueba",
  userId: 1,
});

doFetch(
  "https://jsonplaceholder.typicode.com/posts",
  "POST",
  headerCreada,
  bodyForApi
);

// MODIFICACION A ASYNC AWAIT

// GET SIMPLE
function getSimple() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err.message));
}

getSimple();

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error(`HTTPS ${res.status}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

getData();

// POST SIMPLE
function postSimple() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: "Nuevo post con .then()",
      body: "Contenido de ejemplo",
      userId: 1,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("POST OK (then):", data))
    .catch((err) => console.error("POST ERROR (then):", err.message));
}

async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: "·",
        body: "asfjkhasdfsd",
        userId: 1,
      }),
    });
    if (!response.ok) throw new Error("Error y punto");
    const data = await response.json();
    // Proceso la data por JavaScript de toda la vida
    console.log(data);
    
  } catch (error) {
    console.error(error.message);
  }
}

postData();

export async function fetchAsincrono(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Error y punto");
    const data = await response.json();
    return data;
  } catch (error) {
    //console.error(error.message);
    return { error: true, msg: error.message };
  }
}

let urlToFetch = "https://jsonplaceholder.typicode.com/posts";
let methodToFetch = "GET";
let options = {
  method: methodToFetch,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const data = await fetchAsincrono(urlToFetch, options);

if (data.error) { // Mecachis, ha sucedio un error} return;
  console.log(data.msg);
} else {
console.log(data); // No ha pasado por error, mostramos data
}

