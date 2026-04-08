function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

function closeMenu() {
  const menu = document.getElementById('menu');
  menu.classList.remove('active');
}

// Add animation on scroll (simple reveal)
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
  });
});
