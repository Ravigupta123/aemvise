export default function decorate(block) {
  const picture = block.querySelector('picture');

  if (!picture) return;

  const img = picture.querySelector('img');

  if (img) {
    img.loading = 'eager';
    img.classList.add('hero-image');
  }
}