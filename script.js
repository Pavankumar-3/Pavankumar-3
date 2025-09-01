// Simple enhancements for nav + footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  const setState = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setState(open);
  });
}

// Mobile nav behavior
const mq = matchMedia('(max-width: 720px)');
function handleMQ(e){
  const isSmall = e.matches;
  document.body.classList.toggle('mobile', isSmall);
  if (isSmall){
    document.querySelector('.nav-toggle')?.setAttribute('style','display:block');
    nav?.setAttribute('style','display:none');
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded','false');
  } else {
    document.querySelector('.nav-toggle')?.setAttribute('style','display:none');
    nav?.setAttribute('style','display:flex');
  }
}
mq.addEventListener('change', handleMQ);
handleMQ(mq);

// When mobile menu opens, show nav as block
const observer = new MutationObserver(() => {
  if (nav?.classList.contains('open')) {
    nav.style.display = 'block';
  } else if (getComputedStyle(document.body).getPropertyValue('--mobile') !== '') {
    nav.style.display = 'none';
  }
});
if (nav) observer.observe(nav, { attributes: true });
