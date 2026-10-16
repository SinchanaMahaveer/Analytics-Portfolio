const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Replace the placeholder href with your published Tableau URL when it is ready.
const tableauLink = document.getElementById('tableauLink');
if (tableauLink) {
  tableauLink.addEventListener('click', (event) => {
    if (tableauLink.getAttribute('href') === '#') {
      event.preventDefault();
      alert('Add your published Tableau Public URL to index.html when your workbook is ready.');
    }
  });
}
