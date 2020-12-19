const menuCon = document.querySelector(".menu-con");
const menu = document.querySelector(".menu");
const items = document.querySelector(".items")
let menuOpen = false;
menuCon.addEventListener("click", function(){
    if (!menuOpen){
        menu.classList.add("menu-open");
        items.classList.add("items-show");
        menuOpen = true;
    }else{
        menu.classList.remove("menu-open");
        items.classList.remove("items-show");
        menuOpen = false;
    }
});