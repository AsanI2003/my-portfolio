  const btn = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  btn.addEventListener('click', () => {
  const isLight = html.getAttribute('data-bs-theme') === 'light';
  html.setAttribute('data-bs-theme', isLight ? 'dark' : 'light');
  btn.innerText = isLight ? 'Light' : 'Dark';
  });

const gmailLink = document.getElementById('gmail-link');
const email = "asanindusara348@gmail.com";

// Desktop Gmail URL (Opens in browser tab)
const desktopGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

// Mobile Link (Triggers Gmail App)
const mobileMailto = `mailto:${email}`;

// Check if the user is on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Set the correct link based on the device
if (isMobile) {
    gmailLink.href = mobileMailto;
} else {
    gmailLink.href = desktopGmail;
}