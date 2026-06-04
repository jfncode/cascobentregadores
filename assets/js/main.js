(function () {
  'use strict';

  // ── Nav scroll effect ──
  var nav = document.getElementById('site-header');
  var scrollThreshold = 60;
  function onScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > scrollThreshold);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile menu toggle ──
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Phone mask ──
  var phoneInput = document.getElementById('whatsapp');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      var v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) v = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7);
      else if (v.length > 2) v = '(' + v.slice(0,2) + ') ' + v.slice(2);
      else if (v.length > 0) v = '(' + v;
      e.target.value = v;
    });
  }

  // ── Form submit → WhatsApp ──
  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = document.getElementById('nome').value;
      var whatsapp = document.getElementById('whatsapp').value;
      var plataforma = document.getElementById('plataforma').value;
      var relato = document.getElementById('relato').value;
      var msg = 'Olá, enviei um formulário pelo site entregadorbloqueado.com.br.\n\n'
        + 'Nome: ' + nome + '\n'
        + 'WhatsApp: ' + whatsapp + '\n'
        + 'Plataforma: ' + plataforma + '\n'
        + 'Relato: ' + relato;
      window.open('https://wa.me/5517991999006?text=' + encodeURIComponent(msg), '_blank');
    });
  }
})();
