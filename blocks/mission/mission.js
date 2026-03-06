export default function decorate(block) {
  const rows = [...block.querySelectorAll('table tr')].slice(1);

  const container = document.createElement('div');
  container.className = 'mission-cards';

  rows.forEach((row) => {
    const cols = row.querySelectorAll('td');

    const imageUrl = cols[0].textContent.trim();
    const title = cols[1].textContent.trim();
    const text = cols[2].textContent.trim();

    const card = document.createElement('div');
    card.className = 'mission-card';

    card.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${text}</p>
    `;

    container.appendChild(card);
  });

  block.innerHTML = '';
  block.append(container);
}
