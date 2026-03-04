document.documentElement.classList.add('js');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navMenu');
const shuffleBtn = document.getElementById('shuffleBtn');
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const projectsStatus = document.getElementById('projectsStatus');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const revealItems = document.querySelectorAll('.reveal');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (shuffleBtn && projectsGrid) {
  shuffleBtn.addEventListener('click', () => {
    const visibleCards = Array.from(projectsGrid.children).filter(
      (card) => !card.hidden,
    );

    visibleCards
      .sort(() => Math.random() - 0.5)
      .forEach((card) => projectsGrid.appendChild(card));

    if (projectsStatus) {
      projectsStatus.textContent = `تم ترتيب ${visibleCards.length} مشاريع بشكل عشوائي.`;
    }
  });
}

if (filterButtons.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      projectCards.forEach((card) => {
        const category = card.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        card.hidden = !shouldShow;
      });

      if (projectsStatus) {
        const visibleCount = Array.from(projectCards).filter((card) => !card.hidden).length;
        const filterLabel = button.textContent ? button.textContent.trim() : '';
        projectsStatus.textContent = `تم عرض ${visibleCount} مشاريع ضمن فلتر ${filterLabel}.`;
      }
    });
  });
}

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    formFeedback.className = 'form-feedback';
    formFeedback.textContent = '';
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => input.setAttribute('aria-invalid', 'false'));

    const setError = (elementId, messageText) => {
      formFeedback.textContent = messageText;
      formFeedback.classList.add('error');
      const element = document.getElementById(elementId);
      if (element) {
        element.setAttribute('aria-invalid', 'true');
        element.focus();
      }
    };

    if (name.length < 2) {
      setError('name', 'يرجى كتابة اسم صحيح (حرفان على الأقل).');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('email', 'يرجى إدخال بريد إلكتروني صحيح.');
      return;
    }

    if (!service) {
      setError('service', 'يرجى اختيار نوع الخدمة المطلوبة.');
      return;
    }

    if (message.length < 15) {
      setError('message', 'يرجى كتابة نبذة أوضح عن المشروع (15 حرفًا على الأقل).');
      return;
    }

    // Simulated Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'جاري الإرسال...';

      setTimeout(() => {
        formFeedback.textContent = `شكرًا ${name}، تم استلام طلبك بنجاح وسيتم التواصل معك خلال 24 ساعة.`;
        formFeedback.classList.add('success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }, 800);
    } else {
      formFeedback.textContent = `شكرًا ${name}، تم استلام طلبك بنجاح وسيتم التواصل معك خلال 24 ساعة.`;
      formFeedback.classList.add('success');
      contactForm.reset();
    }
  });
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('show'));
}
