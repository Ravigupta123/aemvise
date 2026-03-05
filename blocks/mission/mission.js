export default function decorate(block) {

  const rows = [...block.querySelectorAll("tr")];

  rows.slice(1).forEach((row) => {

    const cols = row.querySelectorAll("td");

    if (cols.length < 3) return;

    const imgUrl = cols[0].textContent.trim();
    const title = cols[1].textContent.trim();
    const text = cols[2].textContent.trim();

    const section = document.createElement("div");
    section.className = "mission-item";

    const picture = document.createElement("img");
    picture.src = imgUrl;
    picture.alt = title;

    const content = document.createElement("div");
    content.className = "mission-content";

    const heading = document.createElement("h2");
    heading.textContent = title;

    const body = document.createElement("p");
    body.textContent = text;

    content.append(heading, body);

    section.append(picture, content);

    block.append(section);

  });

}