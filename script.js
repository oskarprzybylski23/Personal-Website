// Script to change navigation bar colours based on page section
document.addEventListener('DOMContentLoaded', function() {
  // Get all the navigation links
  var navLinks = document.querySelectorAll('.link');

  // Calculate the position of each section on the page
  var sections = document.querySelectorAll('section');
  var footer = document.querySelector('footer');
  var sectionPositions = [];

  function calculateSectionPositions() {
    sectionPositions = Array.from(sections).map(function(section) {
      return {
        id: section.id,
        top: section.offsetTop,
        bottom: section.offsetTop + section.offsetHeight
      };
    });
  }

  calculateSectionPositions(); // Initial calculation of section positions
  console.log(sectionPositions);

  // Recalculate section positions on window resize
  window.addEventListener('resize', function() {
    calculateSectionPositions();
  });

  // Add scroll event listener to track the position
  window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset;

    // Reset the color of all navigation links
    navLinks.forEach(function(link) {
      link.style.color = '';
    });

    // Check if scroll position is within the footer section
    var isOverFooter = currentPosition >= footer.offsetTop;

    if (!isOverFooter) {
      // Find the current section based on the scroll position
      var currentSection = sectionPositions.find(function(section) {
        return currentPosition >= section.top && currentPosition < section.bottom;
      });
      console.log(currentSection);
      // If a current section is found, change the color of its corresponding navigation link
      if (currentSection) {
        var currentLink = document.querySelector('a[href="#' + currentSection.id + '"]');
        if (currentLink) {
          currentLink.style.color = 'var(--secondary)'; // Set the desired color
        }
      }

      // Change the color of all links if the scroll position is within the second and fourth sections
      if (currentPosition >= sectionPositions[1].top && currentPosition < sectionPositions[3].bottom) {
        navLinks.forEach(function(link) {
          if (link.style.color !== 'var(--secondary)') {
            link.style.color = 'var(--font2)'; // Set the desired color
          }
        });
      }

      // Show navigation links if they were hidden
      navLinks.forEach(function(link) {
        link.style.display = '';
      });
    } else {
      // Hide navigation links when scrolling over the footer
      navLinks.forEach(function(link) {
        link.style.display = 'none';
      });
    }
  });
});


// 
