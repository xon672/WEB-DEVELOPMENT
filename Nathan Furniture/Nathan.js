var openNavBtn = document.querySelector('.openNavBar');
var navContainer = document.querySelector('.navContainer');


openNavBtn.addEventListener('click',openNavigation);


function openNavigation(){
  navContainer.classList.toggle('addleft');
  var check = navContainer.classList.contains('addleft');
  if(!check){
    openNavBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
  else if(check){
    openNavBtn.innerHTML = '<i class="fa-sharp fa-solid fa-power-off"></i>';
  }
};
