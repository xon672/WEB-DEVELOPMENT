var menu = [
    {
        id:1,
        img:"/images/default.png",
        category: "brakefast",
        title:"Rice and Beans",
        price:"$200",
        about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur autem optio ex iste facere nemo voluptatem tempore sunt eius ipsa ea rerum molestias, maiores excepturi vero aspernatur sapiente, eum nisi."
    },
    {
        id:2,
        img:"/images/default.png",
        category:"lunch",
        title:"Eba and okra",
        price:"$200",
        about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur autem optio ex iste facere nemo voluptatem tempore sunt eius ipsa ea rerum molestias, maiores excepturi vero aspernatur sapiente, eum nisi."
    },
    {
        id:3,
        img:"/images/default.png",
        title:"Eba and egusi",
        category:"brakefast",
        price:"$200",
        about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur autem optio ex iste facere nemo voluptatem tempore sunt eius ipsa ea rerum molestias, maiores excepturi vero aspernatur sapiente, eum nisi."
    },
    {
        id:4,
        img:"/images/default.png",
        category:"lunch",
        title:"Eba and okra",
        price:"$200",
        about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur autem optio ex iste facere nemo voluptatem tempore sunt eius ipsa ea rerum molestias, maiores excepturi vero aspernatur sapiente, eum nisi."
    },
    {
        id:5,
        img:"/images/default.png",
        category:"dinner",
        title:"Eba and okra",
        price:"$200",
        about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur autem optio ex iste facere nemo voluptatem tempore sunt eius ipsa ea rerum molestias, maiores excepturi vero aspernatur sapiente, eum nisi."
    },
    {
        id:5,
        img:"/images/default.png",
        category:"desert",
        title:"Eba and okra",
        price:"$200",
        about:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur autem optio ex iste facere nemo voluptatem tempore sunt eius ipsa ea rerum molestias, maiores excepturi vero aspernatur sapiente, eum nisi."
    },
]
var menuContainer = document.querySelector(".menu-container")
var btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded",function(){
    displayMenuContent(menu)
    autoBtn()
})

function displayMenuContent(items){
    var displayMenu = items.map(function(display){
        return `<article class="menu-center">
        <img src="${display.img}" alt="${display.title}">
        <h2 class="header">${display.title} <span class="price">${display.price}</span></h2>
        <span class="underline2"> </span>
        <p class="about">${display.about}</p>
    </article>`
    }).join("")
    menuContainer.innerHTML = displayMenu
}

function autoBtn(){
    var categories = menu.reduce(function(values,items){
        if (!values.includes(items.category)){
            values.push(items.category)
        }
        return values
    },["all"])
    var categoriesBtn = categories.map(function(cate){
        return `<button class="btn-filter" data-id="${cate}">${cate}</button>`
    }).join("")
    btnContainer.innerHTML = categoriesBtn
    var btnFilter = document.querySelectorAll(".btn-filter")
    btnFilter.forEach(function(btn){
        btn.addEventListener('click',function(e){
            var clicked = e.currentTarget.dataset.id
            var filter = menu.filter(function(menuItems){
                if (menuItems.category === clicked) {
                    return menuItems
                }
            })
            if (clicked === "all") {
                displayMenuContent(menu)
            } else {
                displayMenuContent(filter)
            }
            console.log(filter)
        })
    })
}

