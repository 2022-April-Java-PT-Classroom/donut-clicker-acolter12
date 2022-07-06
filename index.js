
var button = document.querySelectorAll('#navBarItem1, #navBarItem2, #navBarItem3');
var h2 = document.getElementsByClassName('.fred-theBaker, .cookie-clicker, .conatct-info');
var content = document.querySelector('.hide1, .hide2, .hide3');
button.addEventListener('click',function() {
    content.classList.toggle('show1');
    content.classList.toggle('show2');
  });


