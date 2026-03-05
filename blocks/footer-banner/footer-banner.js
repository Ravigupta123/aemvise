export default function decorate(block) {

  const row = block.querySelector("tr:nth-child(2)");
  if (!row) return;

  const cols = row.querySelectorAll("td");

  const desktop = cols[0].textContent.trim();
  const mobile = cols[1].textContent.trim();

  const picture = document.createElement("picture");

  const source = document.createElement("source");
  source.setAttribute("media", "(max-width: 991px)");
  source.setAttribute("srcset", mobile);

  const img = document.createElement("img");
  img.src = desktop;
  img.alt = "Footer Banner";

  picture.append(source, img);

  block.textContent = "";
  block.append(picture);

}