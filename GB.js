const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click",function() {
    menu.classList.toggle("show");
});