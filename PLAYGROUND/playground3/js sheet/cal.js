var display = document.getElementById("black-box")
let c = document.getElementById("clear")

function cal(number){
    display.innerHTML += number
    display.style.fontSize ="1.5rem"
}

function del(){
    display.innerHTML = display.innerHTML.slice(0,-1)
}


c.addEventListener("keyboard", (c)=>{
    display.innerHTML = ""
})
c.addEventListener("mouse",(m)=>{
    alert('Double click to clear all')
})
