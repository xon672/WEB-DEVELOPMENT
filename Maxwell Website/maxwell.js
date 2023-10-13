var navContainer = document.querySelector('.nav-container');
var logoContainer = document.querySelector('.logo-nav');
var openNavBtn = document.querySelector('.open-nav');
var homeBackground = document.querySelector('.home-background');
var links = document.querySelectorAll('.navlinks');
var arrowScroll = document.querySelector('.scroll-up');
var moreBtn = document.querySelector('.more-text');
var moreText = document.querySelector('.read-more');
var currentYear = document.querySelector('.year');
var inputs = document.querySelectorAll("input");
var textArea = document.querySelector("textarea");
currentYear.innerHTML = new Date().getFullYear(); 
//For eah 
links.forEach(smoothScroll);

//event listner
openNavBtn.addEventListener('click',openNavigation);
window.addEventListener('scroll',fixedNav);
moreBtn.addEventListener('click',openMoreText);
window.addEventListener("Load",emptyInputs);

//Functions
function emptyInputs(){
  textArea.innerHTML = "";
  // input.innerHTML = "";
  inputs.forEach(function(input){
    input.innerHTML = "";
  });
};
function openNavigation(){
  let navHeight = navContainer.getBoundingClientRect().height;
  let logoHeight = logoContainer.getBoundingClientRect().height;
  let totalHeight = logoHeight + navHeight + 20;
  //console.log(logoHeight);
  if (logoHeight === 105) {
    logoContainer.style.height = `${totalHeight}px`;
    openNavBtn.textContent = '×';
  }else{
    logoContainer.style.height = '105px';
    openNavBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  };
};
function smoothScroll(link){
  link.addEventListener('click',eachAnchor)
};
function eachAnchor(e){
  e.preventDefault()
  var target = e.currentTarget.getAttribute('href').slice(1);
  var element = document.getElementById(target);
  var position = element.offsetTop;
  var fixedNav = logoContainer.classList.contains('fixedH');
  let logoHeight = logoContainer.getBoundingClientRect().height;
  if (fixedNav) {
    position = position - 105
    //console.log(logoHeight);
  }else{
    position = position - logoHeight - 105
  }
  window.scrollTo(
    {
      left:0,top:position
    }
    );
    
  //console.log(position);
};
function fixedNav(){
  let scroll = window.pageYOffset;
  let logoHeight = logoContainer.getBoundingClientRect().height;
  let fixed = logoContainer.classList.contains('fixedH');
  let imgheight = homeBackground.getBoundingClientRect().height
  if (scroll > logoHeight) {
    logoContainer.classList.add('fixedH');
    logoContainer.style.background = 'rgba(0, 0, 0, 0.8)';
    logoContainer.style.height = '105px';
    openNavBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
   
   
  } else {
    logoContainer.classList.remove('fixedH');
    logoContainer.style.background = 'transparent';
  };
  if (fixed) {
    openNavBtn.classList.add('openTop');
  }else{
    openNavBtn.classList.remove('openTop');
  };
  if (scroll > 700) {
    arrowScroll.classList.add('show-arrow');
  } else {
    arrowScroll.classList.remove('show-arrow');
  };
  //console.log(scroll);
};
function openMoreText(){
  moreText.classList.add('addM');
  moreBtn.style.display = 'none';
};
