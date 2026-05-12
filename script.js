  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  btn.addEventListener('click', () => {
  const isLight = html.getAttribute('data-bs-theme') === 'light';
  html.setAttribute('data-bs-theme', isLight ? 'dark' : 'light');
  btn.innerText = isLight ? 'Light' : 'Dark';
  });