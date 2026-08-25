// Academic Website Interactions
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. BibTeX Show/Hide Toggles
  const bibtexButtons = document.querySelectorAll('.toggle-bibtex');
  bibtexButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const isHidden = targetEl.classList.contains('hidden');
        if (isHidden) {
          targetEl.classList.remove('hidden');
          button.innerHTML = `<i data-lucide="chevron-up" class="w-3.5 h-3.5"></i> Hide BibTeX`;
        } else {
          targetEl.classList.add('hidden');
          button.innerHTML = `<i data-lucide="code" class="w-3.5 h-3.5"></i> Show BibTeX`;
        }
        if (window.lucide) lucide.createIcons();
      }
    });
  });
});
