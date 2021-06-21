import React, { useState } from "react";
import "./CheckoutItem.css";



function CheckoutItem({ image, price, title }) {

    let itemCount = [];

    for (let i = 1; i <= 10; i++) {
        itemCount.push(i);
    }

    const [itemQuantity, setItemQuantitiy] = useState(price);

    function itemQuantitySum(e) {
        setItemQuantitiy(e.target.value * price)
    }

    return (<div className="basket-container">
        <div className="item-container">

            <div className="checkout-item-img">
                <img src={image} alt="test"></img>
            </div>
            <div className="item-info">
                <h3>{title}</h3>
                <label>Quantity </label>
                <select className="quantity-input" onChange={itemQuantitySum}>
                    {itemCount.map(item => {
                        return <option >{item}</option>
                    })}
                </select>
                <p class="price" value={itemQuantity}>{itemQuantity}</p>
                <button className="remove-item-btn" >Remove item</button>
            </div>

        </div>
    </div>
    )
}

export default CheckoutItem;
