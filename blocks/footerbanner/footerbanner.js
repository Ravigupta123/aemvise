export default function decorate(block) {
  const rows = [...block.querySelectorAll('tr')];

  if (rows.length < 2) return;

  const desktopImg = rows[1].children[0].textContent.trim();
  const mobileImg = rows[1].children[1].textContent.trim();

  block.innerHTML = `
    <picture>
      <source media="(max-width: 768px)" srcset="${mobileImg}">
      <img src="${desktopImg}" alt="Footer Banner">
    </picture>
  `;
}
