export default function decorate(block) {
  const path = window.location.pathname;
  const segments = path.split('/').filter((seg) => seg);

  const nav = document.createElement('nav');
  nav.className = 'breadcrumb-nav';

  const list = document.createElement('ul');

  // Home
  const homeLi = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.textContent = 'Home';
  homeLi.append(homeLink);
  list.append(homeLi);

  let currentPath = '';

  segments.forEach((seg, index) => {
    currentPath += `/${seg}`;

    const li = document.createElement('li');

    const name = seg
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    if (index === segments.length - 1) {
      const span = document.createElement('span');
      span.textContent = name;
      li.append(span);
    } else {
      const link = document.createElement('a');
      link.href = currentPath;
      link.textContent = name;
      li.append(link);
    }

    list.append(li);
  });

  nav.append(list);
  block.textContent = '';
  block.append(nav);
}