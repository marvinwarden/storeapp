import React from "react";
import "./Subtotal.css";

function Subtotal({ itemCount, subtotal, vat }) {

    const rand = "R";
    const subTotal = subtotal.toFixed(2);
    const vatTotal = vat.toFixed(2);
    const total = parseFloat(subTotal) + parseFloat(vatTotal);

    return (

        <div className="subtotal">
            <p className="subtotal-heading"><strong>Subtotal ({itemCount} Items):</strong> {rand + subTotal}</p>
            <p className="subtotal-heading"><strong>VAT:</strong> {rand + vatTotal}</p>
            <p className="subtotal-heading"><strong>Total:</strong> {rand + total.toFixed(2)}</p>


        </div>
    )
}

export default Subtotal;