function toggleMenu(){
    const menu = document.querySelector("#menu");
    menu.classList.toggle("visible");

    const openMenu = document.querySelector("#open-menu");
    openMenu.classList.toggle("visible");

    const closeMenu = document.querySelector("#close-menu");
    closeMenu.classList.toggle("visible");
}