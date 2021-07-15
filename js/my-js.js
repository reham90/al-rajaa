$(document).ready(function() {
    if($(window).width()>991){

(function($) { // Begin jQuery36.

  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').hover(function(e) {
      $(this).siblings('.nav-dropdown').css("display" ,"block");
      // Close one dropdown when selecting another
    
      e.stopPropagation();
    });

      $('.second-list').click(function(e) {
      $(this).siblings('.nav-dropdown-2').slideToggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown-2').not($(this).siblings()).hide();
      e.stopPropagation();
    });



    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });

   

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
    
     

$("#re-show").toggle();

$("#re-hide").css("display" ,"block");

$("#cover").toggle();




  


    });

  $('#re-show').click(function(event) {

 if (document.dir=="rtl") {

     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");


$("#nav").toggle();
  

  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});

$('#re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");

 $("#cover").toggle();

 $("#re-show").toggle();
});

 $('#cover').on('click', function() {
$("#re-hide").click();
 });


    // Hamburger to X toggle
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
});

$(document).ready(function() {
    if($(window).width()<991){

 (function($) { // Begin jQuery36.

  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').slideToggle();
      // Close one dropdown when selecting another
      
      e.stopPropagation();
    });

      $('.second-list').click(function(e) {
      $(this).siblings('.nav-dropdown-2').slideToggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown-2').not($(this).siblings()).hide();
      e.stopPropagation();
    });


    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });

   $('.dropdown').click(function(e) {
      $('.drop-mobile').slideToggle();
      // Close one dropdown when selecting another
      
      e.stopPropagation();
    });

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
    
     

$("#re-show").toggle();

$("#re-hide").css("display" ,"block");

$("#cover").toggle();


    });

  $('#re-show').click(function(event) {

 if (document.dir=="rtl") {

     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");


$("#nav").toggle();
  

  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});

$('#re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");

 $("#cover").toggle();

 $("#re-show").toggle();
});

 $('#cover').on('click', function() {
$("#re-hide").click();
 });


    // Hamburger to X toggle
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"


    }
});







function openCity(evt, cityName) {
  var i, tabcontent, tablinks,tabcontenttwo;
  tabcontent = document.getElementsByClassName("tab-content");
  tabcontenttwo = document.getElementsByClassName("tab-content-two");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (i = 0; i < tabcontenttwo.length; i++) {
    tabcontenttwo[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if($(window).width()<991){
   var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function myFunction(y) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
});
}
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    // Add Active Class
    $(".search-icon").click(function() {
        $(".search-screen").addClass("active");
    });

    // Remove Active Class
    $(".close-icon").click(function() {
        $(".search-screen").removeClass("active");
    });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    var owl = $('.slider');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var owl = $('.best');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1200: {
                items: 4
            }

        }
    })




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    if($(window).width()<991){
    var owl = $('.features');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-right'></i>", "<i class='fas fa-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  $(window).on('load', function() {
        $('#myModal').modal('show');
    });

    });