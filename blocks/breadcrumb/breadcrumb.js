export default function decorate(block) {
  const CATEGORY_LABELS = {
    televisions: 'Televisions',
    tv: 'Televisions',
    airconditioners: 'Air Conditioners',
    ac: 'Air Conditioners',
    washingmachines: 'Washing Machines',
    washingmachine: 'Washing Machines',
    refrigerators: 'Refrigerators',
    refrigerator: 'Refrigerators',
    faq: 'Support Q&A',
    supportqa: 'Support Q&A',
    storelocator: 'Store Locator',
    aboutus: 'About us',
    contactus: 'Contact us',
    whyvise: 'Why VISE',
    termsofuse: 'Privacy policy & T&C',
  };

  function normalizeKey(key) {
    return key.replace(/[\s\-]/g, '').toLowerCase();
  }

  const path = window.location.pathname
    .replace('.html', '')
    .split('/')
    .filter(Boolean);

  let name = '';

  if (path.length > 0) {
    const normalized = normalizeKey(path[path.length - 1]);
    name = CATEGORY_LABELS[normalized] || path[path.length - 1];
  }

  const container = document.createElement('div');
  container.className = 'container';

  const ol = document.createElement('ol');
  ol.className = 'breadcrumbinr';

  const home = document.createElement('li');
  home.innerHTML = '<a href="/">Home</a>';

  ol.append(home);

  if (name) {
    const current = document.createElement('li');
    current.textContent = name;
    ol.append(current);
  }

  container.append(ol);
  block.append(container);
}