export default function decorate(block) {
  const row = block.querySelector(':scope > div:nth-child(2)');
  if (!row) return;

  const cols = row.querySelectorAll('div');

  const desktopImg = cols[0]?.querySelector('img');
  const mobileImg = cols[1]?.querySelector('img');

  if (!desktopImg || !mobileImg) return;

  const picture = document.createElement('picture');

  const source = document.createElement('source');
  source.setAttribute('media', '(max-width: 991px)');
  source.srcset = mobileImg.src;

  const img = document.createElement('img');
  img.src = desktopImg.src;
  img.alt = desktopImg.alt || 'Footer Banner';

  picture.append(source, img);

  block.textContent = '';
  block.append(picture);
}