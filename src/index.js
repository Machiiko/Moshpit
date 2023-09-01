


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

});

// Zoom Function on Team Section
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".zoom").css({
          backgroundSize: (1 + scroll/17)  + "%",
          top: -(scroll/0.1)  + "%",
  
      
      });
  });