const creditCardType = require("credit-card-type");



export default function cardFormat() {
    var visaCards = creditCardType("4111");
    console.log(visaCards);
    const cardNumberInput = document.querySelector(".card-number");
    const cardType = document.querySelector(".card-select");

    if (cardNumberInput.value.length === 4 || cardNumberInput.value.length === 9 || cardNumberInput.value.length === 14) {
        return cardNumberInput.value = cardNumberInput.value += " ";
    }






}

