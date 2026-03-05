export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  const wrapper = document.createElement('div');
  wrapper.className = 'mission-grid';

  rows.slice(1).forEach((row) => {
    const cols = row.querySelectorAll('div');

    if (cols.length < 3) return;

    const imgUrl = cols[0].textContent.trim();
    const title = cols[1].textContent.trim();
    const text = cols[2].textContent.trim();

    const section = document.createElement('div');
    section.className = 'mission-item';

    const image = document.createElement('img');
    image.src = imgUrl;
    image.alt = title;

    const content = document.createElement('div');
    content.className = 'mission-content';

    const heading = document.createElement('h2');
    heading.textContent = title;

    const body = document.createElement('p');
    body.textContent = text;

    content.append(heading, body);
    section.append(image, content);
    wrapper.append(section);
  });

  block.textContent = '';
  block.append(wrapper);
}