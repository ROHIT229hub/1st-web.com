// Nav toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Simple contact form handling (demo)
const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    result.textContent = 'Please fill all fields.';
    result.style.color = 'crimson';
    result.classList.remove('hidden');
    return;
  }

  // Demo response (in real site you'd send to server)
  result.textContent = `Thanks ${name}! Your message was received (demo).`;
  result.style.color = 'green';
  result.classList.remove('hidden');
  form.reset();
});

// Change primary color (demo)
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  document.body.classList.toggle('alt-color');
});
