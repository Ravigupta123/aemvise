// import './topbanner.css';

export default function decorate(block) {
  const row = block.querySelector('div');
  if (!row) return;

  // Get URLs written in the HTML
  const urls = row.textContent
    .trim()
    .split('\n')
    .map((u) => u.trim())
    .filter((u) => u);

  const desktop = urls[0];
  const mobile = urls[1];

  // Create picture element
  const picture = document.createElement('picture');

  const source = document.createElement('source');
  source.setAttribute('media', '(max-width: 768px)');
  source.setAttribute('srcset', mobile);

  const img = document.createElement('img');
  img.src = desktop;
  img.alt = 'Top Banner';
  img.loading = 'eager';

  picture.append(source, img);

  // Replace block content
  block.textContent = '';
  block.appendChild(picture);
}
