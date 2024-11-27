window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function showContent(category) {
    const skillsContent = document.getElementById('skills-content');
    let content = '';

    switch (category) {
      case 'programs':
        content = '<h3>Programs</h3><p>Details about various programs...</p>';
        break;
      case 'languages':
        content = '<h3>Languages</h3><p>Details about different languages...</p>';
        break;
      case 'certifications':
        content = '<h3>Certifications</h3><p>Details about certifications...</p>';
        break;
      default:
        content = '<p>Select an option to see details.</p>';
    }

    skillsContent.innerHTML = content;
  }