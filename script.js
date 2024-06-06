// Smooth scroll function
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const duration = 800; // Adjust the duration as needed
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Event listener for smooth scroll on nav link click
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target);
    });
  });
});

// Auto-highlight active nav link on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
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

// Add bumper when scrolling to the bottom
window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;
  const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

  if (distanceFromBottom < 100) { // Adjust threshold as needed
    const bumper = document.querySelector('.bumper');
    bumper.classList.add('active');
  } else {
    const bumper = document.querySelector('.bumper');
    bumper.classList.remove('active');
  }
});
