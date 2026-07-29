/* =========================================
   Glipearte Pegue e Monte - Gallery JavaScript
   ========================================= */

(function() {
  'use strict';

  const galleryData = [
    { src: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=800&q=80', alt: 'Mesa de festa infantil decorada', categoria: 'Infantil', titulo: 'Festa Infantil Colorida' },
    { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80', alt: 'Decoração de aniversário', categoria: 'Infantil', titulo: 'Aniversário Encantado' },
    { src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80', alt: 'Mesa decorada com balões', categoria: 'Infantil', titulo: 'Balões e Alegria' },
    { src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80', alt: 'Festa adulto decoração', categoria: 'Adulto', titulo: 'Festa Adulto Elegante' },
    { src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80', alt: 'Chá de bebê decoração', categoria: 'Chá', titulo: 'Chá de Bebê Delicado' },
    { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', alt: 'Casamento decoração', categoria: 'Casamento', titulo: 'Casamento Romântico' },
    { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80', alt: 'Festa junina decoração', categoria: 'Adulto', titulo: 'Festa Junina Colorida' },
    { src: 'https://images.unsplash.com/photo-1523359346063-d879354c09a0?w=800&q=80', alt: 'Evento corporativo', categoria: 'Corporativo', titulo: 'Evento Corporativo' },
    { src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80', alt: 'Batizado decoração', categoria: 'Chá', titulo: 'Batizado Sereno' },
    { src: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&q=80', alt: 'Decoração festa rosa', categoria: 'Infantil', titulo: 'Festa Rosa Encantada' },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', alt: 'Decoração festa azul', categoria: 'Infantil', titulo: 'Festa Azul Mágica' },
    { src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80', alt: 'Mesa de doces festa', categoria: 'Adulto', titulo: 'Mesa de Doces Decorada' }
  ];

  const masonry = document.getElementById('galleryMasonry');
  const filterBtns = document.querySelectorAll('#galleryFilterBar .filter-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const lightboxPrev = lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox.querySelector('.lightbox-next');

  let currentFilter = 'todos';
  let filteredImages = [];
  let currentImageIndex = 0;

  function renderGallery() {
    if (!masonry) return;
    masonry.innerHTML = '';

    filteredImages = currentFilter === 'todos'
      ? galleryData
      : galleryData.filter(item => item.categoria === currentFilter);

    filteredImages.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = '' +
        '<img src="' + item.src + '" alt="' + item.alt + '" loading="lazy">' +
        '<div class="gallery-overlay"><span>' + item.titulo + '</span></div>';
      div.addEventListener('click', () => openLightbox(index));
      masonry.appendChild(div);
    });
  }

  function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    currentImageIndex = index;
    const item = filteredImages[index];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showImage(direction) {
    if (!filteredImages.length) return;
    currentImageIndex = (currentImageIndex + direction + filteredImages.length) % filteredImages.length;
    const item = filteredImages[currentImageIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGallery();
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => showImage(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => showImage(1));

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(-1);
    if (e.key === 'ArrowRight') showImage(1);
  });

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  renderGallery();
})();
