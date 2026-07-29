/* =========================================
   Glipearte Pegue e Monte - Contact JavaScript
   ========================================= */

(function() {
  'use strict';

  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const telefoneInput = document.getElementById('telefone');

  function maskPhone(value) {
    let v = value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 7) {
      v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (v.length > 2) {
      v = v.replace(/(\d{2})(\d+)/, '($1) $2');
    }
    return v;
  }

  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      e.target.value = maskPhone(e.target.value);
    });
  }

  function showError(id, show) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show', show);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return phone.replace(/\D/g, '').length >= 10;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const tipoEvento = document.getElementById('tipoEvento').value;
      const mensagem = document.getElementById('mensagem').value.trim();

      let valid = true;

      if (!nome) { showError('nomeError', true); valid = false; }
      else { showError('nomeError', false); }

      if (!email || !validateEmail(email)) { showError('emailError', true); valid = false; }
      else { showError('emailError', false); }

      if (!telefone || !validatePhone(telefone)) { showError('telefoneError', true); valid = false; }
      else { showError('telefoneError', false); }

      if (!tipoEvento) { showError('tipoEventoError', true); valid = false; }
      else { showError('tipoEventoError', false); }

      if (!mensagem) { showError('mensagemError', true); valid = false; }
      else { showError('mensagemError', false); }

      if (!valid) return;

      const dataEvento = document.getElementById('dataEvento').value;
      const texto = 'Olá! Meu nome é ' + nome + '.\n' +
                    'Tenho interesse em um kit de decoração para ' + tipoEvento + '.\n' +
                    (dataEvento ? 'Data do evento: ' + dataEvento + '\n' : '') +
                    'Mensagem: ' + mensagem + '\n' +
                    'Telefone: ' + telefone + '\n' +
                    'E-mail: ' + email;

      const whatsappUrl = 'https://wa.me/5585999999999?text=' + encodeURIComponent(texto);
      window.open(whatsappUrl, '_blank', 'noopener');

      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'block';
    });
  }
})();
