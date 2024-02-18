let btnDano = document.querySelector("#enviarDano");

let body = document.querySelector("body");

let cont = document.querySelector(".container");



let container = document.createElement("div");
container.setAttribute("class", "containerModal");

let modal_content = document.createElement("div");
modal_content.setAttribute("class", "modal_content");

let texto = document.createElement("p");
texto.setAttribute("class","inputStyle");
texto.textContent = `POKÉMON 1 HARÁ UN DAÑO ENTRE EL RANGO 1 A 100 A POKÉMON 2`;

let button = document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("class","inputStyle");
button.value="VOLVER A CALCULAR"

modal_content.append(texto, button);

container.append(modal_content);

body.append(container);


btnDano.addEventListener("click", () => {
    container.style.display = "flex";
    cont.style.display="none";
})

button.addEventListener("click", () => {
    container.style.display = "none";
    cont.style.display="grid";
})