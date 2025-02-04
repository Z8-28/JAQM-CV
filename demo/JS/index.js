function menu_size() {
    let menu = document.getElementById("menu");
    let screen = document.getElementById("sub_screen");
    let btn = document.getElementsByClassName("button_menu");
    if (menu.style.width == "0px") {
        menu.style.minWidth = "200px";
        menu.style.width = "15%";
        btn.style.width = "95%";
        screen.style.width = "85%";
        if (screen.style.width < "50vw") {
            menu.style.width = "100vw";
            screen.style.width = "0vw";
        }
    } else {
        menu.style.minWidth = "0px";
        menu.style.width = "0px";
        btn.style.width = "0px";
        screen.style.width = "100vw";
    }
}