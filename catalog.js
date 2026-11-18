// JavaScript source code
const selectedName = "Луна";
const quantityText = "3";
const unitValue = 3;
const extraValue = 3;
const isTraining = true;
let foundCount = 0;
let attempts = 0;
const catalog = [{position: "1", name: "Луна", specs: "Кошка 1 год", description: "Любопытная и внимательная к игрушкам"}, {position: "2", name: "Барсик", specs: "Кот 2 года", description: "Любит спокойное общение и мягкую лежанку"}, {position: "3", name: "Карлик", specs: "Карлик обыкновеный 46 лет", description: "Странный вкус в играх"}]
for (const count of catalog) {
	attempts = attempts + 1
}
function getCount(catalog, foundCount) {
	for (const sample of catalog) {
		if (sample.name === selectedName) {
			foundCount = foundCount + 1
		}
	}
	return foundCount;	
}
const fCount = getCount(catalog, foundCount)
function getResult(quantityText, unitValue, extraValue) {
	if (quantityText.trim() === "") {
		return "Ошибка: укажите количество";
	}
	const quantity = Number(quantityText);
	if (!Number.isFinite(quantity)) {
		return "Ошибка: введите число";
	}
	if (!Number.isInteger(quantity) || quantity <= 0) {
		return "Ошибка: нужно положительное целое количество";
	}
    const totalValue = quantity * unitValue + extraValue
    return totalValue;
}
const resultMessage = getResult(quantityText, unitValue, extraValue);
console.log("Записей:", attempts)
if (fCount === 1) {
	for (const item of catalog) {
		console.log(item.position + ". " + item.name);
		console.log(item.specs);
		console.log(item.description);
		if (item.name === selectedName) {
			console.log("Выбрано для расчёта:", selectedName);
			console.log("Итого:", resultMessage);
			console.log("Единица расчёта: игрушек");
		}
	}
}
if (fCount !== 1) {
	for (const item of catalog) {
		console.log(item.position + ". " + item.name);
		console.log(item.specs);
		console.log(item.description);
	}
	if (fCount === 0) {
		console.log("Найдено записей:", fCount + "; Запись не найдена");
		console.log(selectedName + "; расчёта нет")
	}
	if (fCount > 1) {
		console.log("Итого:", resultMessage);
		console.log("Единица расчёта: игрушек");
		console.log("Найдено записей:", fCount + "; Проверьте повторяющиеся названия");
	}
}

function filterByText(items, query) {
  const normalized = String(query).trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}
console.log(filterByText(catalog, "").length);
console.log(filterByText(catalog, "Л"));
console.log(filterByText(catalog, "  ЧАСТЬ  ").length);
console.log(filterByText(catalog, "нет такой записи"));
const names = catalog.map(item => item.name + '1');
console.log(names);
console.table(catalog);
console.log(catalog.length);

const status = document.querySelector("#status");
const first = catalog[0].name;
status.textContent = first + " — " + catalog.length + " записей";
const namesList = document.querySelector("#names");

function renderNames() {
  namesList.replaceChildren();
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}
const showButton = document.querySelector("#show-names");

showButton.addEventListener("click", renderNames, function () {
  status.textContent = "Список показан";
});
