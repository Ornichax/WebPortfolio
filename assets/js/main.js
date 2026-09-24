/**
 * Creative Media Portfolio - Main JavaScript
 * Preloader, Dark/Light Mode, Scroll-to-Top, and Scroll Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initTheme();
  initScrollToTop();
  initScrollReveal();
});

/**
 * 1. Preloader Handling
 */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }, 400);
  });

  // Safety fallback if load event takes too long
  setTimeout(() => {
    if (!preloader.classList.contains('loaded')) {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 600);
    }
  }, 2500);
}

/**
 * 2. Dark / Light Mode Switcher
 */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-switch-btn');
  const storedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set default theme: stored theme, or default to dark (ideal for creative media)
  const activeTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'dark');
  applyTheme(activeTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcons = document.querySelectorAll('.theme-icon');

  themeIcons.forEach(icon => {
    if (theme === 'light') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      icon.parentElement.setAttribute('title', 'สลับเป็น Dark Mode');
      icon.parentElement.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      icon.parentElement.setAttribute('title', 'สลับเป็น Light Mode');
      icon.parentElement.setAttribute('aria-label', 'Switch to light mode');
    }
  });
}

/**
 * 3. Scroll To Top Button
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (!scrollBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  }, { passive: true });

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 4. Scroll Reveal Animations (Intersection Observer)
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    reveals.forEach(el => el.classList.add('is-revealed'));
  }
}
