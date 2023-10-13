var header = document.querySelector('.logo-container')
var headerBtn = header.querySelector('.open-bar')
var date = document.getElementById('date')
var links = header.querySelector(".links")
date.innerHTML = new Date().getFullYear()
var container = header.querySelector(".links-container")


headerBtn.addEventListener("click",function(){
    var containerHeight = container.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    //console.log(linksHeight)
    if (containerHeight === 0) {
        container.style.height = `${linksHeight}px`
    } else {
        container.style.height = "0px"
    }
})
window.addEventListener('scroll', function(){
    var scroll =window.pageYOffset
    var containerHeight = header.getBoundingClientRect().height
    if (scroll > 104) {
        header.classList.add("fixH")
    } else {
        header.classList.remove("fixH")
    }
    var upBtn = document.querySelector(".home-scroll")
    if (scroll > 500) {
        upBtn.classList.add("vis")
    } else {
        upBtn.classList.remove("vis")
    }
    
})
var scrollLinks = document.querySelectorAll('.smooth')

scrollLinks.forEach(function(btn){
    btn.addEventListener("click",function(e){
        e.preventDefault()
        const attribute = e.currentTarget.getAttribute("href").slice(1)
        var tag = document.getElementById(attribute)
        var position = tag.offsetTop 
        var fixedHeader = header.classList.contains("fixH")
        var containerHeight = container.getBoundingClientRect().height
        var linksHeight = links.getBoundingClientRect().height
        var headerHeight = header.getBoundingClientRect().height 
        if(fixedHeader){
            position = position - headerHeight
            console.log(position)
        }
        if(!fixedHeader){
            position = position - headerHeight - headerHeight
            console.log(position)
        }
        if (headerHeight > 104){
            position = position + linksHeight
            console.log(position)
        }
        container.style.height ="0px"
        window.scrollTo({
            left:0,top:position
        })

        
    })
})