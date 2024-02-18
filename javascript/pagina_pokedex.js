let selectsPokedex = document.querySelectorAll(".styleSelect");

let pokedex = selectsPokedex[1].querySelector("select");

let generacion = selectsPokedex[0].querySelector("select");

let textPokedex = document.querySelector("#tipoPokedex");

let textGeneracion = document.querySelector("#numGeneracion");

let pokedexFilas = document.querySelectorAll("tbody tr");

let paginaBulbasaur=pokedexFilas[0];

let paginaCharmander=pokedexFilas[1];

let paginaSquirtle=pokedexFilas[2];


pokedex.addEventListener("change", () => {
        textPokedex.textContent = pokedex.value;
});

generacion.addEventListener("change", () => {
        textGeneracion.textContent = generacion.value;
});

paginaBulbasaur.addEventListener("click",()=>{
        window.location.replace("./pagina_bulbasaur.html");
});

paginaCharmander.addEventListener("click",()=>{
        window.location.replace("./pagina_charmander.html");
});

paginaSquirtle.addEventListener("click",()=>{
        window.location.replace("./pagina_squirtle.html");
});