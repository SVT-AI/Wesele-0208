
function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
}
function checkPassword() {
  const pass = document.getElementById('password-input').value;
  if (pass === 'Hania3') {
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('gallery').classList.remove('hidden');
    loadGallery();
  } else {
    document.getElementById('wrong-password').classList.remove('hidden');
  }
}
function loadGallery() {
  const gallery = document.getElementById('image-gallery');
  for (let i = 1; i <= 30; i++) {
    const img = document.createElement('img');
    img.src = 'images/photo' + i + '.jpg';
    img.loading = 'lazy';
    img.alt = 'Zdjęcie ' + i;
    img.className = 'gallery-image';
    gallery.appendChild(img);
  }
}
function enhanceImages() {
  const images = document.querySelectorAll('.gallery-image');
  images.forEach(img => img.classList.add('enhanced'));
}
