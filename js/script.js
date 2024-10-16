const botaoH = document.getElementById("btn-hamb");

const menuHamb = document.getElementById("menuH");

function mostrarMenu() {
    botaoH.classList.toggle("ativar");
    menuHamb.classList.toggle("visivel");
}