// ================================================================
//  main.js — Navigation, galerie, lightbox
//  NE PAS MODIFIER CE FICHIER
// ================================================================

// ---- Année footer ----
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('footer-year');
  if (y) y.textContent = new Date().getFullYear();
  renderGallery();
});


// ================================================================
//  NAVIGATION
// ================================================================

function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  const sec = document.getElementById(id);
  const lnk = document.querySelector(`nav a[data-section="${id}"]`);
  if (sec) sec.classList.add('active');
  if (lnk) lnk.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Fermer le menu mobile
  document.getElementById('main-nav').classList.remove('open');
}

function toggleMenu() {
  document.getElementById('main-nav').classList.toggle('open');
}

// Fermer le menu mobile en cliquant ailleurs
document.addEventListener('click', e => {
  const nav = document.getElementById('main-nav');
  const btn = document.querySelector('.nav-toggle');
  if (nav && btn && !nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('open');
  }
});


// ================================================================
//  GALERIE — rendu 100% DOM API (anti-XSS)
// ================================================================

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  if (typeof PHOTOS === 'undefined' || PHOTOS.length === 0) {
    const msg = document.createElement('p');
    msg.style.color = 'var(--text-light)';
    msg.style.padding = '2rem 0';
    msg.textContent = 'Aucune photo pour le moment.';
    grid.appendChild(msg);
    return;
  }

  PHOTOS.forEach((photo, i) => {
    // Valider le chemin de l'image
    const src = photo.image && /^images\//.test(photo.image)
      ? photo.image
      : PLACEHOLDER_SVG;

    // Conteneur
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', photo.titre || `Photo ${i + 1}`);
    item.addEventListener('click', () => openLightbox(i));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(i); });

    // Image
    const img = document.createElement('img');
    img.src = src;
    img.alt = photo.titre || '';
    img.loading = 'lazy';
    img.addEventListener('error', () => { img.src = PLACEHOLDER_SVG; });
    item.appendChild(img);

    // Overlay au survol
    const overlay = document.createElement('div');
    overlay.className = 'gallery-item-overlay';

    const titre = document.createElement('div');
    titre.className = 'gallery-item-titre';
    titre.textContent = photo.titre || '';
    overlay.appendChild(titre);

    if (photo.categorie) {
      const cat = document.createElement('div');
      cat.className = 'gallery-item-categorie';
      cat.textContent = photo.categorie;
      overlay.appendChild(cat);
    }

    item.appendChild(overlay);
    grid.appendChild(item);
  });
}


// ================================================================
//  LIGHTBOX
// ================================================================

let lbIndex = 0;

function openLightbox(index) {
  lbIndex = index;
  _lbRefresh();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + PHOTOS.length) % PHOTOS.length;
  _lbRefresh();
}

function _lbRefresh() {
  const photo = PHOTOS[lbIndex];
  if (!photo) return;

  // Image
  const img = document.getElementById('lb-img');
  const src = photo.image && /^images\//.test(photo.image)
    ? photo.image
    : PLACEHOLDER_SVG;
  img.src = src;
  img.alt = photo.titre || '';
  img.onerror = () => { img.src = PLACEHOLDER_SVG; };

  // Textes — textContent uniquement (anti-XSS)
  document.getElementById('lb-counter').textContent    = `${lbIndex + 1} / ${PHOTOS.length}`;
  document.getElementById('lb-categorie').textContent  = photo.categorie   || '';
  document.getElementById('lb-titre').textContent      = photo.titre       || '';
  document.getElementById('lb-description').textContent= photo.description || '';
  document.getElementById('lb-exif').textContent       = photo.exif        || '';

  // Afficher/masquer les boutons si une seule photo
  const hidden = PHOTOS.length <= 1;
  document.querySelector('.lb-prev').classList.toggle('lb-nav-hidden', hidden);
  document.querySelector('.lb-next').classList.toggle('lb-nav-hidden', hidden);
}

function closeLightboxOverlay(e) {
  if (e.target.classList.contains('lightbox')) closeAllLightboxes();
}

function closeAllLightboxes() {
  document.querySelectorAll('.lightbox').forEach(lb => lb.classList.remove('active'));
  document.body.style.overflow = '';
}

// Navigation clavier
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('active')) return;
  if (e.key === 'Escape')      closeAllLightboxes();
  if (e.key === 'ArrowLeft')   lbNav(-1);
  if (e.key === 'ArrowRight')  lbNav(1);
});

// Swipe tactile
let touchStartX = 0;
document.getElementById('lightbox')?.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });
document.getElementById('lightbox')?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) lbNav(dx < 0 ? 1 : -1);
}, { passive: true });
