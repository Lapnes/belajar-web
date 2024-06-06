document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById('navbar');
  const aboutMeSection = document.getElementById('about-me');

  document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const navbarRect = navbar.getBoundingClientRect();
    const aboutMeRect = aboutMeSection.getBoundingClientRect();

    // Menampilkan atau menyembunyikan navigasi berdasarkan posisi kursor
    if (
      mouseX < navbarRect.left || mouseX > navbarRect.right ||
      mouseY < navbarRect.top || mouseY > navbarRect.bottom
    ) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }

    // Menampilkan atau menyembunyikan konten "About Me" berdasarkan posisi kursor
    if (
      mouseX >= aboutMeRect.left && mouseX <= aboutMeRect.right &&
      mouseY >= aboutMeRect.top && mouseY <= aboutMeRect.bottom
    ) {
      // Kursor berada di atas konten "About Me", tampilkan konten
      aboutMeSection.classList.remove('hidden');
    } else {
      // Kursor berada di luar konten "About Me", sembunyikan konten
      aboutMeSection.classList.add('hidden');
    }
  });
});