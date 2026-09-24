/**
 * Creative Media Portfolio - Contact Form JavaScript
 * Interactive Form Validation, Submission Simulation & Toast Notification
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initEmailCopyShortcut();
});

/**
 * 1. Contact Form Handling
 */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const toastEl = document.getElementById('contactToast');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Form inputs
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('กรุณากรอกข้อมูลให้ครบถ้วนในช่องที่จำเป็น', 'error');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showToast('กรุณากรอกรูปแบบอีเมลให้ถูกต้อง', 'error');
      return;
    }

    // Simulate sending with loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin me-2"></i> กำลังส่งข้อความ...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Show success toast
      showToast('ขอบคุณสำหรับข้อความ! ได้รับข้อมูลแล้วและจะตอบกลับโดยเร็วที่สุด 🎉', 'success');

      // Reset form
      contactForm.reset();
    }, 1200);
  });
}

/**
 * 2. Toast Notification Function
 */
function showToast(message, type = 'success') {
  const toastEl = document.getElementById('contactToast');
  if (!toastEl) return;

  const toastMessage = toastEl.querySelector('.toast-text');
  const toastIcon = toastEl.querySelector('.toast-icon');

  if (toastMessage) toastMessage.textContent = message;
  if (toastIcon) {
    if (type === 'success') {
      toastIcon.className = 'fa-solid fa-circle-check toast-icon text-success';
    } else {
      toastIcon.className = 'fa-solid fa-circle-exclamation toast-icon text-warning';
    }
  }

  toastEl.classList.add('show');

  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 4500);
}

/**
 * 3. Quick Copy Email on Click
 */
function initEmailCopyShortcut() {
  const emailItem = document.querySelector('.channel-email');
  if (!emailItem) return;

  emailItem.addEventListener('click', (e) => {
    // If user clicked directly on copy action or wants quick copy
    const emailText = 'student.creativemedia@email.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailText).then(() => {
        showToast(`คัดลอกอีเมล "${emailText}" เรียบร้อยแล้ว!`, 'success');
      }).catch(() => {
        // Fallback or ignore
      });
    }
  });
}
