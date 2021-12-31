


/*Project Button Sort*/



$(document).ready(function(){
   
    let $btns = $('.project-area .button-group button')

    $btns.click(function(e){
        
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        })
        return false
    })
})







/*
Sticky Navbar
let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed(){
    if($('.header_area').length){
        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll >= nav_offset_top){
                $('header-area.main-menu').addClass('navbar_fixed');
            }else{
                $('.header_area.main-menu').removeClass('navbar_fixed');

            }
        })
    }
}
navbarFixed();
*/
/*
window.onscroll = function() {navbarFixed()};

var navbar = document.getElementById("navbarNav");

var sticky = navbar.offsetTop

function navbarFixed(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}
*/


// Get the modal
var modal;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function modalBtn(test) {
    var temp = "myModal";
    temp+= test;
    modal = document.getElementById(temp);
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
