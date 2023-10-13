let img = document.querySelectorAll("img")
let prevBtn = document.querySelector(".prevbtn")
let nextBtn = document.querySelector(".nextbtn")

img.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
})
let counter = 0
nextBtn.addEventListener("click",function(){
    counter++
    carousel()
})
prevBtn.addEventListener("click",function(){
    //counter--
    //carousel()
    img.forEach(function(mage){
        mage.style.transform = "-100%"
    })
})
function carousel(){
    if (counter < img.length - 1) {
        nextBtn.style.display = "block"
    }else{
        nextBtn.style.display = "none"
    };
    if (counter > 0) {
        prevBtn.style.display = 'block'
    } else {
        prevBtn.style.display = 'none'
    }
    img.forEach(function(mage){
        mage.style.transform = `translate(-${counter * 100}%)`
    })
}