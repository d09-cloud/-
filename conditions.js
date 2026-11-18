// JavaScript source code
console.log("Расчёт моего приложения");
let itemName = "Карлик";
let quantityText = " ";
let unitValue = 3;
let extraValue = 3;
let isTraining = true;
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

