var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
window.addEventListener('scroll',reveal);
function reveal(){
  var reveals=document.querySelectorAll('.section1');
  for(var i=0;i<reveals.length;i++){
    var windowheight= window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
  }
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}