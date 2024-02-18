let menu = document.querySelector("#buttonNav");
let menuContent = document.querySelector(".dropdown-content");

menu.addEventListener("click", () => {
        menuContent.classList.toggle("hide");
        menu.classList.toggle("change");
})