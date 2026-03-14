document.documentElement.classList.add('js');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navMenu');
const navBackdrop = document.getElementById('navBackdrop');
const shuffleBtn = document.getElementById('shuffleBtn');
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const projectsStatus = document.getElementById('projectsStatus');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const formSecondaryCta = document.getElementById('formSecondaryCta');
const revealItems = document.querySelectorAll('.reveal');

if (navToggle && navLinks) {
  const setMenuState = (isOpen) => {
    navLinks.classList.toggle('open', isOpen);
    navLinks.setAttribute('aria-hidden', String(!isOpen));
    navBackdrop?.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeNavMenu = () => setMenuState(false);

  setMenuState(false);

  navToggle.addEventListener('click', () => {
    const isOpen = !navLinks.classList.contains('open');
    setMenuState(isOpen);
  });

  navBackdrop?.addEventListener('click', closeNavMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeNavMenu();
    }
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavMenu);
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
  const setError = (input, message) => {
    formFeedback.textContent = message;
    formFeedback.classList.add('error');
    formFeedback.setAttribute('aria-live', 'assertive');
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', 'formFeedback');
    input.focus();
  };

  const clearErrors = () => {
    formFeedback.textContent = '';
    formFeedback.className = 'form-feedback';
    formFeedback.setAttribute('aria-live', 'polite');
    contactForm.querySelectorAll('[aria-invalid]').forEach((el) => {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    });
  };

  contactForm.addEventListener('input', (e) => {
    const target = e.target;
    if (target.getAttribute('aria-invalid') === 'true') {
      target.removeAttribute('aria-invalid');
      target.removeAttribute('aria-describedby');
      if (!contactForm.querySelector('[aria-invalid="true"]')) {
        formFeedback.textContent = '';
        formFeedback.className = 'form-feedback';
      }
    }
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const service = String(formData.get('service') || '').trim();
    const message = String(formData.get('message') || '').trim();

    clearErrors();
    if (formSecondaryCta) {
      formSecondaryCta.hidden = true;
      formSecondaryCta.textContent = '';
    }

    if (name.length < 2) {
      setError(contactForm.name, 'حقل الاسم: اكتب اسمك الحقيقي بحيث لا يقل عن حرفين.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError(contactForm.email, 'حقل البريد الإلكتروني: أدخل بريدًا صالحًا مثل name@example.com.');
      return;
    }

    if (!service) {
      setError(contactForm.service, 'حقل نوع الخدمة: اختر الخدمة الأقرب لاحتياج مشروعك.');
      return;
    }

    if (message.length < 15) {
      setError(contactForm.message, 'حقل نبذة المشروع: أضف تفاصيل أكثر (الهدف، الجمهور، والمدة) بحد أدنى 15 حرفًا.');
      return;
    }

    formFeedback.textContent = `شكرًا ${name}، تم استلام طلبك بنجاح وسيتم التواصل معك خلال 24 ساعة.`;
    formFeedback.classList.add('success');
    formFeedback.setAttribute('aria-live', 'polite');
    if (formSecondaryCta) {
      formSecondaryCta.innerHTML = 'خطوة إضافية سريعة: تابعنا على المنصات أو أرسل ملفاتك المرجعية إلى <a href="mailto:hello@lianstudio.com">hello@lianstudio.com</a>.';
      formSecondaryCta.hidden = false;
    }
    contactForm.reset();
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
