document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');

  if (burger && menu) {
    burger.addEventListener('click', () => menu.classList.toggle('open'));
    // close mobile menu when a link is clicked
    menu.addEventListener('click', (e) => {
      if (e.target && e.target.tagName === 'A') menu.classList.remove('open');
    });
    // close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') menu.classList.remove('open');
    });
  }

  // Scroll reveal using IntersectionObserver with a graceful fallback
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    // fallback: show all
    revealEls.forEach(el => el.classList.add('in'));
  }

  // Contact form (demo behaviour)
  const form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('formMsg');
      if (msg) msg.textContent = 'Thank you — your enquiry has been noted. Our team will respond within one business day.';
      form.reset();
    });
  }
});
