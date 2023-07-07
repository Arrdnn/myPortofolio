// window.addEventListener('load', function() {
//     var preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
// });

const menuToggle = document.querySelector('.menu-toggle input');
const option = document.querySelector('.option ul');

menuToggle.addEventListener('click', function () {
    option.classList.toggle('geser');
});

var btnContainer = document.getElementById("nav");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}