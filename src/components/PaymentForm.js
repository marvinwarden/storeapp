import React, { useState } from "react";
import "./PaymentForm.css";

function PaymentForm() {

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [cvcNumber, setCvcNumber] = useState('')
    const [expiration, setExpiration] = useState('');

    function cardNumberFormat(e) {
        let cardNumberValue = e.target.value;
        setCardNumber(cardNumberValue);
        if (cardNumberValue.length === 4 || cardNumberValue.length === 9 || cardNumberValue.length === 14) {
            setCardNumber(cardNumberValue += " ");
        }
    }

    function cardHolder(e) {
        setCardHolderName(e.target.value)
    }

    function expirationDate(e) {
        setExpiration(e.target.value);
        if (e.target.value.length === 2) {
            setExpiration(e.target.value + " " + "/ ")
        }
    }

    return <div className="payments">
        <h2 className="payment-heading" >Payment</h2>
        <div className="card-type ">
            <label>CARD TYPE</label>
            <select className="payment-input card-select" name="cardOptions">
                <option value="Visa">Select Card Type</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Maestro">Maestro</option>
            </select>
        </div>
        <form action="/" method="POST">
            <label>CARDHOLDER NAME</label>
            <input
                className="payment-input"
                type="text"
                placeholder="Name on Card"
                required
                value={cardHolderName}
                onChange={cardHolder}
            />
            <label>CARD NUMBER</label>
            <input className="payment-input card-number"
                type="text"
                name="cardNumber"
                placeholder="Valid Card Number"
                required pattern="(\d{4}\s?){4}"
                value={cardNumber}
                onChange={cardNumberFormat}
            />
            <div className="card-center">
                <div className="card-expiration">
                    <label>EXPIRATION DATE</label>
                    <input
                        className="payment-input"
                        type="text"
                        name="expiration"
                        placeholder="MM/YY"
                        value={expiration}
                        onChange={expirationDate}
                    />
                </div>
                <div className="card-cvv">
                    <label>CVV CODE</label>
                    <input
                        className="payment-input"
                        type="text"
                        name="cvv-code"
                        placeholder="CVC"
                        required
                    />
                </div>
            </div>
            <button type="submit" className="to-checkout">Process Payment</button>
        </form>
    </div>
}

export default PaymentForm;