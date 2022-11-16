let button = document.querySelector("button")
let p = document.querySelector("p")
button.addEventListener("click", OkClicked)
p.addEventListener("mouseover", TokaFunktio)
button.addEventListener("mouseover", TokaFunktio)
button.addEventListener("mouseleave", KolmasFunktio)
button.addEventListener("wheel", neljäsFunktio)

function OkClicked(){
    alert("ethän nää osaa mitää!!!")
}
function TokaFunktio(){
    button.style.width = "100px"
    button.style.height ="100px"
    p.style.fontFamily ="arial"
}
function KolmasFunktio(){
    button.style.width = "50px"
    button.style.height ="50px"
}
function neljäsFunktio(event){
    console.log(event.deltaY)
}
