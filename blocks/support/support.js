export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const wrapper = document.createElement('div');
  wrapper.className = 'support-grid';

  rows.forEach((row) => {
    if (!row.textContent.trim()) return;

    const card = document.createElement('div');
    card.className = 'support-card';

    card.innerHTML = row.innerHTML;

    wrapper.append(card);
  });

  block.textContent = '';
  block.append(wrapper);
}