// Smooth scroll and active nav highlighting
(function () {
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('nav a');

  function onScroll() {
    var scrollY = window.pageYOffset;
    sections.forEach(function (section) {
      var top = section.offsetTop - 80;
      var bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(function (link) {
          link.removeAttribute('aria-current');
          if (link.getAttribute('href') === '#' + section.id) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
