(function () {
  var overlay = document.getElementById('modal-overlay');
  var content = document.getElementById('modal-content');
  var closeBtn = document.getElementById('modal-close');

  function openModal(templateId) {
    var template = document.getElementById(templateId);
    if (!template) return;
    content.innerHTML = '';
    content.appendChild(template.content.cloneNode(true));
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn.getAttribute('data-modal-target'));
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeModal();
    }
  });
})();
