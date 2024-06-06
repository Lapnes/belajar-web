// document.addEventListener("DOMContentLoaded", function() {
//     const navLinks = document.querySelectorAll('nav a');
//     const sections = document.querySelectorAll('section');
  
//     navLinks.forEach(link => {
//       link.addEventListener('mouseover', function() {
//         navLinks.forEach(link => link.classList.remove('active'));
//         link.classList.add('active');
//       });
//     });
  
//     window.addEventListener('scroll', function() {
//       let current = '';
  
//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (pageYOffset >= sectionTop - sectionHeight / 3) {
//           current = section.getAttribute('id');
//         }
//       });
  
//       navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href').substring(1) === current) {
//           link.classList.add('active');
//         }
//       });
//     });
//   });
  

  // src/script.js
function smoothScroll(target) {
  console.log("Script is running!");
  var targetElement = document.querySelector(target);
  var startPosition = window.pageYOffset;
  var targetPosition = targetElement.getBoundingClientRect().top + startPosition;
  var distance = targetPosition - startPosition;
  var startTime = null;
  var duration = 800; // Adjust the duration as needed

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
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

// Add bumper when scrolling to the bottom
window.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.scrollHeight;
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var distanceFromBottom = documentHeight - (scrollTop + windowHeight);

  if (distanceFromBottom < 100) { // Atur threshold sesuai kebutuhan
    var bumper = document.querySelector('.bumper');
    bumper.classList.add('active');
  } else {
    var bumper = document.querySelector('.bumper');
    bumper.classList.remove('active');
  }
});