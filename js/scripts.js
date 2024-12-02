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

  /*The script that handles the buttons in the skills container/*/
  function showContent(category) {
    const skillsContent = document.getElementById('skills-content');
    let content = '';

    switch (category) {
      case 'Technologies':
        content = '<h3>Programs</h3><p>Programs I have intermediate-to-advanced skill with</p> <img src="images/python-logo-only.png" alt="python logo" class="alt-image"> <img src="images/HTML5_logo.png" alt="html5 logo" class="alt-image"><img src="images/CSS3_logo.png" alt="CSS3 logo" class="alt-image"><img src="images/sql-logo.svg" alt="SQL logo" class="alt-image"><img src="images/figma-logo.png" alt="figma logo" class="alt-image">';
        break;
      case 'languages':
        content = '<h3>Languages</h3><h4>Spanish (Native)<br><br> English: C1 Cambridge Advanced (Fluent)</h4>';
        break;
      case 'certifications':
        content = '<h3>Certifications</h3><h4>Certificate in Recreational Activities Coordinator <br><br> Google Data Analytics Certificate</h4>';
        break;
      default:
        content = '<p>Select an option to see details.</p>';
    }

    skillsContent.innerHTML = content;
  }