/* =========================================
   Glipearte Pegue e Monte - Main JavaScript
   ========================================= */

(function() {
  'use strict';

  const GLIPEARTE_WHATSAPP = '5585999999999';

  /* ---------- Mobile Menu ---------- */
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  function toggleMobileMenu() {
    if (!mobileMenu || !mobileMenuOverlay) return;
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', toggleMobileMenu);
    });
  }

  /* ---------- Header Scroll Effect ---------- */
  const header = document.getElementById('header');
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- Progress Bar ---------- */
  const progressBar = document.getElementById('progressBar');
  function updateProgressBar() {
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();

  /* ---------- Back to Top ---------- */
  const backToTop = document.getElementById('backToTop');
  function toggleBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  /* ---------- Dark Mode ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
    }
  }

  const savedTheme = localStorage.getItem('glipearte-theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('glipearte-theme', newTheme);
    });
  }

  /* ---------- Fade In Animation on Scroll ---------- */
  const fadeElements = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => fadeObserver.observe(el));

  /* ---------- Testimonials Carousel ---------- */
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const carouselDots = document.querySelectorAll('.carousel-dot');
  let currentTestimonial = 0;
  let testimonialInterval;

  function showTestimonial(index) {
    if (!testimonialsTrack) return;
    currentTestimonial = index;
    testimonialsTrack.style.transform = 'translateX(-' + (index * 100) + '%)';
    carouselDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextTestimonial() {
    const total = carouselDots.length;
    showTestimonial((currentTestimonial + 1) % total);
  }

  if (carouselDots.length > 0 && testimonialsTrack) {
    carouselDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showTestimonial(index);
        resetTestimonialInterval();
      });
    });
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  /* ---------- FAQ Accordion ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  /* ---------- Newsletter Form ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        alert('Obrigado por se cadastrar! ' + email + ' foi adicionado à nossa newsletter.');
        newsletterForm.reset();
      }
    });
  }

  /* ---------- Theme Cards Redirect ---------- */
  const themeCards = document.querySelectorAll('.theme-card');
  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      const theme = card.getAttribute('data-theme');
      if (theme) {
        window.location.href = 'catalogo.html?busca=' + encodeURIComponent(theme);
      }
    });
  });

  /* ---------- Utility: WhatsApp Link Builder ---------- */
  window.glipearteBuildWhatsApp = function(message) {
    const text = encodeURIComponent(message || 'Olá! Gostaria de saber mais sobre os kits de decoração da Glipearte.');
    return 'https://wa.me/' + GLIPEARTE_WHATSAPP + '?text=' + text;
  };

  /* ---------- Lazy load images that need it ---------- */
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
})();
