
(() => {
  const btn = document.querySelector('#menuBtn');
  const nav = document.querySelector('#siteNav');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
})();
