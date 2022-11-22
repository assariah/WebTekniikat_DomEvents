let form = document.querySelector("form")
form.addEventListener("submit", lasku)
let radio = document.getElementById("sum")



function lasku(event) {
    event.preventDefault();
    let formData = new FormData(form)
    let luku1 = Number(formData.get("num1"))
    let luku2 = Number(formData.get("num2"))
  
  

    if (radio.checked){
        document.getElementById("result").innerHTML = luku1 + luku2    
    }
    else{
        document.getElementById("result").innerHTML =luku1 - luku2
    }

}