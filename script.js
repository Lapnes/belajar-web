document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      });
    });
  
    window.addEventListener('scroll', function() {
      let current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    });
  });
  