  // JavaScript code in your script.js file
  document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('.link');

    // Calculate the position of each section on the page
    var sections = document.querySelectorAll('section');
    var sectionPositions = Array.from(sections).map(function(section) {
      return {
        id: section.id,
        top: section.offsetTop,
        bottom: section.offsetTop + section.offsetHeight
      };
    });

    // Add scroll event listener to track the position
    window.addEventListener('scroll', function() {
      var currentPosition = window.pageYOffset;

      // Reset the color of all navigation links
      navLinks.forEach(function(link) {
        link.style.color = '';
      });

      // Find the current section based on the scroll position
      var currentSection = sectionPositions.find(function(section) {
        return currentPosition >= section.top && currentPosition < section.bottom;
      });

      var secondSection = document.querySelector('#about');
      var thirdSection = document.querySelector('#why');
      var secondSectionTop = secondSection.offsetTop;
      var secondSectionBottom = secondSection.offsetTop + secondSection.offsetHeight;
      var thirdSectionTop = thirdSection.offsetTop;
      var thirdSectionBottom = thirdSection.offsetTop + thirdSection.offsetHeight;

      // If a current section is found, change the color of its corresponding navigation link
      if (currentSection) {
        var currentLink = document.querySelector('a[href="#' + currentSection.id + '"]');
        if (currentLink) {
          currentLink.style.color = 'var(--secondary)'; // Set the desired color
        }
      }

      // Change the color of all links if the scroll position is within the second section
      if (currentPosition >= secondSectionTop && currentPosition < thirdSectionBottom) {
        navLinks.forEach(function(link) {
          link.style.color = 'var(--font2)'; // Set the desired color
        });
      }
    });
  });
