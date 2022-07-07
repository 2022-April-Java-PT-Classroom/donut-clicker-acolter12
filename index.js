
var button = document.querySelectorAll('#navBarItem');
var h2 = document.getElementsByClassName('.fred-theBaker, .conatct-info');
var content = document.querySelector('.hide1, .hide2');
button.addEventListener('click',function() {
    content.classList.toggle('show1');
    content.classList.toggle('show2');
  });


