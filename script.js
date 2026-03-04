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
        projectsStatus.textContent = `تم عرض ${visibleCount} مشاريع ضمن فلتر ${button.textContent?.trim()}.`;
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

    formFeedback.className = 'form-feedback';

    if (name.length < 2) {
      formFeedback.textContent = 'يرجى كتابة اسم صحيح (حرفان على الأقل).';
      formFeedback.classList.add('error');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      formFeedback.textContent = 'يرجى إدخال بريد إلكتروني صحيح.';
      formFeedback.classList.add('error');
      return;
    }

    if (!service) {
      formFeedback.textContent = 'يرجى اختيار نوع الخدمة المطلوبة.';
      formFeedback.classList.add('error');
      return;
    }

    if (message.length < 15) {
      formFeedback.textContent = 'يرجى كتابة نبذة أوضح عن المشروع (15 حرفًا على الأقل).';
      formFeedback.classList.add('error');
      return;
    }

    formFeedback.textContent = `شكرًا ${name}، تم استلام طلبك بنجاح وسيتم التواصل معك خلال 24 ساعة.`;
    formFeedback.classList.add('success');
    contactForm.reset();
  });
}

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
