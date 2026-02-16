const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderButton = document.getElementById("seeOrder");
const customerName = document.querySelector("#customerName");


const changeHandler = () => {
  const basePrice = Number(document.getElementById('type').selectedOptions[0].dataset.price);
  const toppingsTotal = [...document.querySelectorAll(".topping:checked")].reduce((sum, topping) => sum + Number(topping.dataset.price), 0);
  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce((sum, extra) => sum + Number(extra.dataset.price), 0);

  let deliveryCharge = 0;
  const deliveryRadio = document.querySelector(".delivery:checked");
  if (deliveryRadio) {
    deliveryCharge = Number(deliveryRadio.dataset.price);
  }

  const totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryCharge;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);

//"See Order" button click event
seeOrderButton.addEventListener("click", () => {
  if (!customerName.value.trim()) {
    alert("Please enter your name.");
    return
  }
  else {
    const orderId = Date.now(); // Order ID
    const selectedPancake = pancakeType.options[pancakeType.selectedIndex].text;
    const selectedToppings = [...document.querySelectorAll(".topping:checked")].map(topping => topping.value);
    const selectedExtras = [...document.querySelectorAll(".extra:checked")].map(extra => extra.value);

    // Ensure a delivery method is selected, default to "Eat In" if not
    const deliveryOption = document.querySelector('[name="delivery"]:checked');
  
    // If no delivery option is selected, default to "Eat In"
    const deliveryMethod = deliveryOption ? deliveryOption.parentElement.textContent.trim() : "Eat In"; 

    const totalPrice = parseFloat(totalPriceDisplay.textContent);

    // Create a new order object
    const newOrder = {
      id: orderId,
      customerName: customerName.value,
      selectedPancake: selectedPancake,
      toppings: selectedToppings,
      extras: selectedExtras,
      deliveryMethod: deliveryMethod,
      totalPrice: totalPrice,
      status: "waiting", // Default status is "waiting"
    };

    // Get existing orders from localStorage or initialize as empty
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add new order to the orders array
    orders.push(newOrder);

    // Save updated orders to localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Now redirect to All Orders page (all-orders.html)
    window.location.href = "all-orders.html"; // Make sure this file is in your project folder
  }
});