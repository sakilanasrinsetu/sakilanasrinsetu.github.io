'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  if (!reducedMotion.matches) {
    document.body.classList.add('motion-ready');
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  }
  const links = [...navigation.querySelectorAll('a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const visible = new Map();
  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => visible.set(entry.target.id, entry.isIntersecting));
    const active = sections.find(section => visible.get(section.id));
    if (!active) return;
    links.forEach(link => {
      const current = link.hash === `#${active.id}`;
      link.classList.toggle('active', current);
      if (current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
  sections.forEach(section => activeObserver.observe(section));
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) card.classList.add('visible');
  });
}));
const roles = ['Python & Django Developer', 'AI & Computer Vision Enthusiast', 'Software Engineering Team Leader', 'M.S. Information Assurance Student'];
const role = document.querySelector('#rotating-role');
let roleIndex = 0;
let timer;
function scheduleRole() {
  clearTimeout(timer);
  if (reducedMotion.matches || document.hidden) return;
  timer = setTimeout(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    const text = roles[roleIndex];
    let character = 0;
    role.textContent = '';
    function type() {
      if (reducedMotion.matches || document.hidden) { role.textContent = text; return; }
      role.textContent = text.slice(0, ++character);
      if (character < text.length) timer = setTimeout(type, 35); else scheduleRole();
    }
    type();
  }, 4500);
}
scheduleRole();
reducedMotion.addEventListener('change', () => { role.textContent = roles[roleIndex]; scheduleRole(); });
document.addEventListener('visibilitychange', () => { role.textContent = roles[roleIndex]; scheduleRole(); });
document.querySelector('#year').textContent = new Date().getFullYear();
