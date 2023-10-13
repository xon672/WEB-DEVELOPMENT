var colorArray = ['green','greenyellow', 'yellow','red', 'purple','gray']
var btn = document.getElementById('btn');
var color = document.querySelector('.color');


btn.addEventListener('click',function(){
    var select = random();

    console.log(select);
    document.body.style.backgroundColor = colorArray[select];
    color.textContent = colorArray[select];
});

function random(){
    return Math.floor(Math.random() * colorArray.length);
};


// below is for hex values


var arrayColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
var bto = document.getElementById('bto');
var text = document.querySelector('.text');

bto.addEventListener("click", function(){
    var hex = "#";
    for(i=0; i<6;i++){
        hex += arrayColor[getRandom()];
    };
    document.body.style.backgroundColor = hex;
    text.textContent = hex;
});

function getRandom(){
    return Math.floor(Math.random() * arrayColor.length)
};



