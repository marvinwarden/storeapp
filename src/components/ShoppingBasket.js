import React, { useState } from "react";
import "./ShoppingBasket.css";
import Subtotal from "./Subtotal";
import CheckoutItem from "./CheckoutItem";
import PaymentForm from "./PaymentForm";
import { useStateValue } from "./StateProvider";


function ShoppingBasket() {
    const [
        {
            basket,
        }
    ] = useStateValue();

    const sum = (total, price) => {

        return parseFloat(total) + parseFloat(price.price);
    }

    function sumCart() {
        console.log(basket)
        return basket.reduce(sum, 0);


    }

    const subtotal = sumCart();
    const vatPercentage = 0.15;

    const [cardType, setCardType] = useState("");

    return (
        <div className="shopping-basket">
            <h1 className="basket-heading">Shopping Basket</h1>
            <div className="basket">
                <div className="basket-section">
                    {basket.map(item => {
                        return <CheckoutItem image={item.image} price={item.price} title={item.title} />
                    })}

                </div>
                <div className="subtotal-section">

                    <Subtotal onLoad={sumCart()} subtotal={subtotal} vat={subtotal * vatPercentage} itemCount={basket.length} key={basket.id} />
                    <PaymentForm />

                </div>
            </div>
        </div>
    )
}

export default ShoppingBasket;