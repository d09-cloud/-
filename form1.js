// JavaScript source code
console.log("Форма запущена");
const form1 = document.querySelector("form");
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  const quantityText = document.querySelector("#quantity").value;
  const select = document.querySelector("#item");
  const itemName = select.options[select.selectedIndex].text;
  const message = getResult(quantityText, unitValue, extraValue);
  result.textContent = itemName + ". " + message;
});