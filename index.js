const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
  console.log(topOfNav, window.scrollY, nav.offsetHeight);
  if(window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');
  } else{
    document.body.classList.remove('fixed-nav');
  }
}


window.addEventListener('scroll', fixNav)
