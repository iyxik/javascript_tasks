const type = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPrice = document.querySelector("#totalPrice");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");

const price = () => {
  let pancakeType = Number(type.value);
  toppings.forEach((topping) => {
    if (topping.checked) {
      pancakeType += Number(topping.value);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      pancakeType += Number(extra.value);
    }
  });

  totalPrice.textContent = `${pancakeType}€`;
  totalPriceDisplay.textContent = `${pancakeType}€`;
};
type.addEventListener("change", price);
toppings.forEach((topping) => topping.addEventListener("change", price));
extras.forEach((extra) => extra.addEventListener("change", price));
