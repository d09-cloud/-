// JavaScript source code
const catalog = [{position: "1", name: "Луна", specs: "Кошка 1 год", description: "Любопытная и внимательная к игрушкам"}, {position: "2", name: "Барсик", specs: "Кот 2 года", description: "Любит спокойное общение и мягкую лежанку"}, {position: "3", name: "Карлик", specs: "Карлик обыкновеный 46 лет", description: "Странный вкус в играх"}]
function filterByText(items, query) {
  const normalized = String(query).trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}
const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

function renderCatalog(items) {
  catalogList.replaceChildren();
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";
    const title = document.createElement("h2");
    title.textContent = item.name;
    const specs = document.createElement("p");
    specs.textContent = item.specs;
    const description = document.createElement("p");
    description.textContent = item.description;
    card.append(title, specs, description);
    catalogList.append(card);
  }
  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}
renderCatalog(catalog);
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found);
});