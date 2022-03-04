let btn_collapse = document.querySelector("#boton-nav")
let nav = document.querySelector("#nav")
let navVisible = false
function navCollapse(){
    navVisible = !navVisible
    if(!navVisible) nav.style.height = "1px"
    else nav.style.height = "191px"
}