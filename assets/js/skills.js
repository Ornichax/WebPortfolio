/**
 * Creative Media Portfolio - Skills JavaScript
 * Animated Skill Progress Bars, Category Filtering & Subtle Hover Dynamics
 */

document.addEventListener('DOMContentLoaded', () => {
  initSkillProgressAnimation();
  initSkillFiltering();
  initSkillCard3DTilt();
});

/**
 * 1. Animate Progress Bars when Scrolled into View
 */
function initSkillProgressAnimation() {
  const skillSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.skill-progress-bar-fill');
  if (!skillSection || !progressBars.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width') || '80%';
          bar.style.width = targetWidth;
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillSection);
}

/**
 * 2. Skills Category Tabs (All, Design, Media, Web & Tech)
 */
function initSkillFiltering() {
  const filterBtns = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-item-col');
  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/**
 * 3. 3D Tilt Effect on Skill Cards
 */
function initSkillCard3DTilt() {
  const cards = document.querySelectorAll('.skill-card');
  if (!cards.length) return;

  // Only enable on desktop devices with pointer
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }
}
