import React, { useState } from "react";
import "./Subtotal.css";

function Subtotal({ itemCount, subtotal, vat }) {

    const rand = "R";
    const subTotal = subtotal.toFixed(2);
    const vatTotal = vat.toFixed(2);
    const total = parseFloat(subTotal) + parseFloat(vatTotal);

    

    

    return (

        <div className="subtotal">
            <p className="subtotal-heading"><strong>Subtotal ({itemCount} Items):</strong> {itemCount !== 0 ? rand + subTotal : rand + "0.00"}</p>
            <p className="subtotal-heading"><strong>VAT:</strong> {itemCount !== 0 ? rand + vatTotal : rand + "0.00"}</p>
            <p className="subtotal-heading"><strong>Total:</strong> {itemCount !== 0 ? rand + total.toFixed(2) : rand + "0.00"}</p>


        </div>
    )
}

export default Subtotal;