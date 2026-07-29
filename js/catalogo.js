/* =========================================
   Glipearte Pegue e Monte - Catalog JavaScript
   ========================================= */

(function() {
  'use strict';

  const catalogData = [
    {
      id: 1,
      nome: 'Kit Festa Stitch',
      categoria: 'Infantil',
      tema: 'Stitch',
      descricao: 'Kit completo com painel, mesa decorada, balões e acessórios do Stitch.',
      itens: ['Painel 2m', 'Mesa temática', '20 Balões', 'Topo de bolo', 'Porta docinhos', 'Painel de chão'],
      preco: 189.90,
      imagem: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
      destaque: true
    },
    {
      id: 2,
      nome: 'Kit Frozen Realeza',
      categoria: 'Infantil',
      tema: 'Frozen',
      descricao: 'Transforme sua festa no reino de Arendelle com Elsa e Anna.',
      itens: ['Painel Frozen', 'Mesa azul e branca', 'Balões metalizados', 'Cortina de tule', 'Topo de bolo', 'Bandeirolas'],
      preco: 199.90,
      imagem: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=600&q=80',
      destaque: false
    },
    {
      id: 3,
      nome: 'Kit Mickey Aventura',
      categoria: 'Infantil',
      tema: 'Mickey',
      descricao: 'Clássico e divertido, ideal para festas de meninos e meninas.',
      itens: ['Painel Mickey', 'Mesa vermelha', 'Balões pretos e vermelhos', 'Centro de mesa', 'Painel de chão', 'Plaquinhas'],
      preco: 179.90,
      imagem: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
      destaque: true
    },
    {
      id: 4,
      nome: 'Kit Minnie Rosa',
      categoria: 'Infantil',
      tema: 'Minnie',
      descricao: 'Delicado e romântico, perfeito para aniversários de meninas.',
      itens: ['Painel Minnie', 'Mesa rosa', 'Balões rosas', 'Laços decorativos', 'Topo de bolo', 'Cortina de papel'],
      preco: 179.90,
      imagem: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80',
      destaque: false
    },
    {
      id: 5,
      nome: 'Kit Fazendinha',
      categoria: 'Infantil',
      tema: 'Fazendinha',
      descricao: 'Animais da fazenda, cores vibrantes e muita diversão.',
      itens: ['Painel Fazendinha', 'Mesa rústica', 'Balões coloridos', 'Bandeirolas', 'Miniaturas de animais', 'Palha decorativa'],
      preco: 169.90,
      imagem: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80',
      destaque: false
    },
    {
      id: 6,
      nome: 'Kit Safari',
      categoria: 'Infantil',
      tema: 'Safari',
      descricao: 'Aventura na selva com leões, elefantes e girafas.',
      itens: ['Painel Safari', 'Mesa verde', 'Balões safari', 'Folhagens', 'Animais de pelúcia', 'Placas temáticas'],
      preco: 189.90,
      imagem: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      destaque: false
    },
    {
      id: 7,
      nome: 'Kit Princesas',
      categoria: 'Infantil',
      tema: 'Princesas',
      descricao: 'Um sonho de princesa com cores pastel e detalhes dourados.',
      itens: ['Painel Princesas', 'Mesa rosa e dourada', 'Balões metalizados', 'Coroa decorativa', 'Tule e cetim', 'Topo de bolo'],
      preco: 209.90,
      imagem: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=600&q=80',
      destaque: true
    },
    {
      id: 8,
      nome: 'Kit Super Heróis',
      categoria: 'Infantil',
      tema: 'Super Heróis',
      descricao: 'Poderosos heróis para uma festa cheia de aventura.',
      itens: ['Painel Heróis', 'Mesa colorida', 'Balões vibrantes', 'Máscaras', 'Capas decorativas', 'Placas de cidade'],
      preco: 179.90,
      imagem: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
      destaque: false
    },
    {
      id: 9,
      nome: 'Kit Boteco do Zé',
      categoria: 'Adulto',
      tema: 'Boteco',
      descricao: 'Decoração despojada para festas de adulto e confraternizações.',
      itens: ['Painel Boteco', 'Mesa rústica', 'Bandeirolas', 'Placas divertidas', 'Luminárias', 'Centro de mesa'],
      preco: 229.90,
      imagem: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80',
      destaque: false
    },
    {
      id: 10,
      nome: 'Kit Tardezinha',
      categoria: 'Adulto',
      tema: 'Tardezinha',
      descricao: 'Estilo de arraiá chic para festas descontraídas de adulto.',
      itens: ['Painel Tardezinha', 'Mesa xadrez', 'Bandeirolas', 'Palha e chapéus', 'Luminárias', 'Placas temáticas'],
      preco: 239.90,
      imagem: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80',
      destaque: true
    },
    {
      id: 11,
      nome: 'Kit Homem-Aranha',
      categoria: 'Infantil',
      tema: 'Homem-Aranha',
      descricao: 'Teias, cores vermelha e azul para a festa do aranha.',
      itens: ['Painel Aranha', 'Mesa vermelha', 'Balões vermelho e azul', 'Teias decorativas', 'Máscara', 'Plaquinhas'],
      preco: 189.90,
      imagem: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
      destaque: false
    },
    {
      id: 12,
      nome: 'Kit Barbie Mundo',
      categoria: 'Infantil',
      tema: 'Barbie',
      descricao: 'Rosa, glamour e magia para fãs da Barbie.',
      itens: ['Painel Barbie', 'Mesa rosa pink', 'Balões pink', 'Acessórios fashion', 'Espelho decorativo', 'Topo de bolo'],
      preco: 199.90,
      imagem: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80',
      destaque: false
    },
    {
      id: 13,
      nome: 'Kit Dinossauro',
      categoria: 'Infantil',
      tema: 'Dinossauro',
      descricao: 'Aventura pré-histórica com dinossauros e vegetação.',
      itens: ['Painel Dinossauro', 'Mesa verde', 'Balões verde e marrom', 'Folhagens', 'Dinossauros de pelúcia', 'Placas'],
      preco: 179.90,
      imagem: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      destaque: false
    },
    {
      id: 14,
      nome: 'Kit Sonic',
      categoria: 'Infantil',
      tema: 'Sonic',
      descricao: 'Velocidade e diversão com o Sonic e seus amigos.',
      itens: ['Painel Sonic', 'Mesa azul', 'Balões azul e vermelho', 'Anéis dourados', 'Placas', 'Centro de mesa'],
      preco: 189.90,
      imagem: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
      destaque: false
    },
    {
      id: 15,
      nome: 'Kit Pokémon',
      categoria: 'Infantil',
      tema: 'Pokémon',
      descricao: 'Capture a diversão com Pikachu e amigos.',
      itens: ['Painel Pokémon', 'Mesa amarela', 'Balões coloridos', 'Pokébolas', 'Placas', 'Miniaturas'],
      preco: 189.90,
      imagem: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80',
      destaque: false
    },
    {
      id: 16,
      nome: 'Kit Chá Revelação Azul e Rosa',
      categoria: 'Chá Revelação',
      tema: 'Chá Revelação',
      descricao: 'Decoração delicada para o grande momento da revelação.',
      itens: ['Painel Chá Revelação', 'Mesa azul e rosa', 'Balões revelação', 'Caixa surpresa', 'Bandeirolas', 'Acessórios'],
      preco: 219.90,
      imagem: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=600&q=80',
      destaque: true
    },
    {
      id: 17,
      nome: 'Kit Chá de Bebê Ursinho',
      categoria: 'Chá de Bebê',
      tema: 'Chá de Bebê',
      descricao: 'Carinhoso e delicado para celebrar a chegada do bebê.',
      itens: ['Painel Ursinho', 'Mesa branca', 'Balões pastel', 'Ursinhos decorativos', 'Fraldas decorativas', 'Bandeirolas'],
      preco: 199.90,
      imagem: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80',
      destaque: false
    },
    {
      id: 18,
      nome: 'Kit Casamento Romântico',
      categoria: 'Casamento',
      tema: 'Casamento',
      descricao: 'Elegância e romance para cerimônias e recepções.',
      itens: ['Painel casamento', 'Mesa branca', 'Balões branco e dourado', 'Flores artificiais', 'Cortina de tule', 'Letras love'],
      preco: 349.90,
      imagem: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      destaque: true
    },
    {
      id: 19,
      nome: 'Kit Batizado Anjo',
      categoria: 'Batizado',
      tema: 'Batizado',
      descricao: 'Delicado e sereno para batizados e celebrações religiosas.',
      itens: ['Painel Batizado', 'Mesa branca', 'Balões branco e dourado', 'Anjinho', 'Velas decorativas', 'Cruz decorativa'],
      preco: 249.90,
      imagem: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
      destaque: false
    },
    {
      id: 20,
      nome: 'Kit Festa Junina',
      categoria: 'Festa Junina',
      tema: 'Festa Junina',
      descricao: 'Arraiá completo com balões, bandeirolas e muito estilo.',
      itens: ['Painel Festa Junina', 'Mesa xadrez', 'Balões coloridos', 'Bandeirolas', 'Palha decorativa', 'Chapéus de palha'],
      preco: 199.90,
      imagem: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&q=80',
      destaque: false
    },
    {
      id: 21,
      nome: 'Kit Natal Mágico',
      categoria: 'Natal',
      tema: 'Natal',
      descricao: 'Decoração natalina para festas e ceias de fim de ano.',
      itens: ['Painel Natal', 'Mesa vermelha', 'Balões verde e vermelho', 'Pinheiro decorativo', 'Luzes de natal', 'Enfeites'],
      preco: 229.90,
      imagem: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
      destaque: false
    },
    {
      id: 22,
      nome: 'Kit Corporativo',
      categoria: 'Corporativo',
      tema: 'Corporativo',
      descricao: 'Decoração profissional para eventos empresariais.',
      itens: ['Painel personalizado', 'Mesa corporativa', 'Balões metalizados', 'Banner', 'Arranjo de mesa', 'Placas'],
      preco: 399.90,
      imagem: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      destaque: true
    }
  ];

  const catalogGrid = document.getElementById('catalogGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');
  const kitModal = document.getElementById('kitModal');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');

  let currentFilter = 'todos';
  let currentSearch = '';
  let favorites = JSON.parse(localStorage.getItem('glipearte-favorites') || '[]');

  function formatPrice(price) {
    return 'R$ ' + price.toFixed(2).replace('.', ',');
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter(fav => fav !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('glipearte-favorites', JSON.stringify(favorites));
    renderCatalog();
  }

  function getFilteredKits() {
    return catalogData.filter(kit => {
      const matchesFilter = currentFilter === 'todos' || kit.categoria === currentFilter;
      const search = currentSearch.toLowerCase();
      const matchesSearch = kit.nome.toLowerCase().includes(search) ||
                            kit.tema.toLowerCase().includes(search) ||
                            kit.categoria.toLowerCase().includes(search) ||
                            kit.descricao.toLowerCase().includes(search);
      return matchesFilter && matchesSearch;
    });
  }

  function renderCatalog() {
    if (!catalogGrid) return;
    const filtered = getFilteredKits();
    catalogGrid.innerHTML = '';

    if (filtered.length === 0) {
      if (noResults) noResults.style.display = 'block';
    } else {
      if (noResults) noResults.style.display = 'none';
      filtered.forEach(kit => {
        const card = document.createElement('div');
        card.className = 'kit-card';
        card.innerHTML = '' +
          '<div class="kit-image">' +
            '<img src="' + kit.imagem + '" alt="' + kit.nome + '" loading="lazy">' +
            (kit.destaque ? '<span class="kit-tag">Destaque</span>' : '') +
            '<button class="kit-favorite ' + (isFavorite(kit.id) ? 'active' : '') + '" data-id="' + kit.id + '" aria-label="Favoritar">' +
              '<i class="' + (isFavorite(kit.id) ? 'fas' : 'far') + ' fa-heart" aria-hidden="true"></i>' +
            '</button>' +
          '</div>' +
          '<div class="kit-content">' +
            '<h3 class="kit-title">' + kit.nome + '</h3>' +
            '<p class="kit-desc">' + kit.descricao + '</p>' +
            '<div class="kit-items">' +
              kit.itens.slice(0, 4).map(item => '<span class="kit-item-tag">' + item + '</span>').join('') +
            '</div>' +
            '<div class="kit-footer">' +
              '<div class="kit-price">' + formatPrice(kit.preco) + '<span>/kit</span></div>' +
            '</div>' +
            '<div class="kit-buttons">' +
              '<button class="btn btn-secondary btn-sm details-btn" data-id="' + kit.id + '">Ver detalhes</button>' +
              '<a href="' + glipearteBuildWhatsApp('Olá! Gostaria de reservar o kit ' + kit.nome + ' da categoria ' + kit.categoria + '.') + '" class="btn btn-primary btn-sm" target="_blank" rel="noopener">Reservar</a>' +
            '</div>' +
          '</div>';
        catalogGrid.appendChild(card);
      });
    }

    attachCardEvents();
  }

  function attachCardEvents() {
    document.querySelectorAll('.kit-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id, 10);
        toggleFavorite(id);
      });
    });

    document.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id, 10);
        openKitModal(id);
      });
    });
  }

  function openKitModal(id) {
    const kit = catalogData.find(k => k.id === id);
    if (!kit || !kitModal || !modalBody) return;

    modalBody.innerHTML = '' +
      '<img src="' + kit.imagem + '" alt="' + kit.nome + '" class="modal-image">' +
      '<div class="modal-body">' +
        '<span class="kit-tag" style="position: static; display: inline-block; margin-bottom: 12px;">' + kit.categoria + '</span>' +
        '<h2 class="modal-title">' + kit.nome + '</h2>' +
        '<div class="modal-price">' + formatPrice(kit.preco) + '</div>' +
        '<p style="color: var(--texto-claro); line-height: 1.7; margin-bottom: 24px;">' + kit.descricao + '</p>' +
        '<div class="modal-section">' +
          '<h4>Itens Inclusos</h4>' +
          '<ul>' + kit.itens.map(item => '<li>' + item + '</li>').join('') + '</ul>' +
        '</div>' +
        '<div class="modal-section">' +
          '<h4>Sugestões de Complementos</h4>' +
          '<p style="color: var(--texto-claro);">Bolo fake, docinhos personalizados, lembrancinhas e painéis extras podem ser combinados para deixar sua festa ainda mais especial.</p>' +
        '</div>' +
        '<div class="modal-section" style="display: flex; gap: 12px; flex-wrap: wrap;">' +
          '<a href="' + glipearteBuildWhatsApp('Olá! Tenho interesse no kit ' + kit.nome + '. Pode me passar mais informações?') + '" class="btn btn-primary" target="_blank" rel="noopener">' +
            '<i class="fab fa-whatsapp" aria-hidden="true"></i> Reservar pelo WhatsApp' +
          '</a>' +
          '<button class="btn btn-secondary modal-close-btn">Fechar</button>' +
        '</div>' +
      '</div>';

    kitModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalBody.querySelector('.modal-close-btn').addEventListener('click', closeKitModal);
  }

  function closeKitModal() {
    if (!kitModal) return;
    kitModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeKitModal);
  }
  if (kitModal) {
    kitModal.addEventListener('click', (e) => {
      if (e.target === kitModal) closeKitModal();
    });
  }

  /* Filter buttons */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCatalog();
    });
  });

  /* Search */
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim();
      renderCatalog();
    });
  }

  /* URL Params */
  const urlParams = new URLSearchParams(window.location.search);
  const urlCategory = urlParams.get('categoria');
  const urlSearch = urlParams.get('busca');
  if (urlCategory) {
    currentFilter = urlCategory;
    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === urlCategory);
    });
  }
  if (urlSearch && searchInput) {
    currentSearch = urlSearch;
    searchInput.value = urlSearch;
  }

  renderCatalog();

  /* Calculator */
  const calcBtn = document.getElementById('calcBtn');
  const calcResult = document.getElementById('calcResult');
  const calcPrice = document.getElementById('calcPrice');

  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const tipo = document.getElementById('calcTipo').value;
      const convidados = document.getElementById('calcConvidados').value;
      const tema = document.getElementById('calcTema').value;

      let base = 150;
      if (tipo === 'infantil') base += 50;
      if (tipo === 'adulto') base += 80;
      if (tipo === 'cha') base += 70;
      if (tipo === 'casamento') base += 150;
      if (tipo === 'corporativo') base += 200;

      if (convidados === 'medio') base += 50;
      if (convidados === 'grande') base += 120;
      if (convidados === 'evento') base += 250;

      if (tema) base += 30;

      if (calcPrice) calcPrice.textContent = 'R$ ' + base.toFixed(2).replace('.', ',');
      if (calcResult) calcResult.style.display = 'block';
    });
  }
})();
