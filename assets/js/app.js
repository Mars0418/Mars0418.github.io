(() => {
  'use strict';
  const {renderMain, renderSidebar, text, ids} = window.SiteRenderer;
  const data = window.SiteData;
  let lang = 'en';
  let navigationFrame = 0;
  let trigger;
  const main = document.getElementById('main-content');
  const sidebar = document.getElementById('profile');
  const dialog = document.getElementById('image-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const storage = {
    get: () => { try { return localStorage.getItem('zhenghan-language'); } catch { return null; } },
    set: value => { try { localStorage.setItem('zhenghan-language', value); } catch {} },
  };
  function observeSections() {
    let active = ids[0];
    const threshold = Math.min(150, window.innerHeight * 0.2);
    for (const id of ids) {
      if (document.getElementById(id).getBoundingClientRect().top <= threshold) active = id;
    }
    sidebar.querySelectorAll('.section-nav a').forEach(link => {
      const selected = link.hash === '#' + active;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', () => {
    if (navigationFrame) return;
    navigationFrame = requestAnimationFrame(() => {
      navigationFrame = 0;
      observeSections();
    });
  }, {passive:true});
  function setLanguage(next, preserve = true) {
    if (!['en', 'zh'].includes(next)) return;
    const expanded = document.getElementById('news-toggle')?.getAttribute('aria-expanded') === 'true';
    const coursesOpen = document.querySelector('.coursework')?.open;
    const current = ids.map(id => document.getElementById(id)).filter(el => el.getBoundingClientRect().top <= 100).at(-1);
    const offset = current?.getBoundingClientRect().top;
    lang = next;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? '朱正涵 | 清华大学' : 'Zhenghan Zhu | Tsinghua University';
    main.innerHTML = renderMain(data, lang);
    sidebar.innerHTML = renderSidebar(lang);
    document.querySelectorAll('[data-language]').forEach(button => {
      const active = button.dataset.language === lang;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('selected', active);
    });
    document.getElementById('close-dialog').setAttribute('aria-label', lang === 'zh' ? '关闭图片' : 'Close image');
    if (expanded) toggleNews(true);
    if (coursesOpen) document.querySelector('.coursework').open = true;
    if (preserve && current) {
      const newTop = document.getElementById(current.id).getBoundingClientRect().top;
      window.scrollBy({top: newTop - offset, behavior: 'instant'});
    }
    storage.set(lang);
    observeSections();
  }
  function toggleNews(force) {
    const button = document.getElementById('news-toggle');
    const open = force ?? button.getAttribute('aria-expanded') !== 'true';
    document.getElementById('news-archive').hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.innerHTML = `${open ? text[lang].less : text[lang].more} <span aria-hidden="true">${open ? '↑' : '↓'}</span>`;
  }
  document.addEventListener('click', event => {
    const language = event.target.closest('[data-language]');
    if (language) { setLanguage(language.dataset.language); return; }
    if (event.target.closest('#news-toggle')) { toggleNews(); return; }
    const imageLink = event.target.closest('[data-lightbox]');
    if (imageLink && typeof dialog.showModal === 'function') {
      event.preventDefault();
      trigger = imageLink;
      dialogImage.src = imageLink.href;
      dialogImage.alt = imageLink.querySelector('img')?.alt || imageLink.getAttribute('aria-label') || '';
      dialog.showModal();
      document.body.classList.add('dialog-open');
    }
  });
  document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); trigger?.focus({preventScroll: true}); });
  const requested = new URLSearchParams(location.search).get('lang');
  const initial = requested || storage.get();
  if (['en', 'zh'].includes(initial) && initial !== lang) setLanguage(initial, false);
  else observeSections();
})();
