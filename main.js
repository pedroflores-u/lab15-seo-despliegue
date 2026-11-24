document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  const quoteButtons = document.querySelectorAll('.btn-quote');
  const quoteStatus = document.getElementById('quote-status');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.filter;
      cards.forEach((card) => {
        if (category === 'todos' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  quoteButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const model = btn.dataset.model;
      quoteStatus.textContent = `Solicitud de cotización registrada para: ${model}`;
      quoteStatus.scrollIntoView({ behavior: 'smooth' });
    });
  });
});