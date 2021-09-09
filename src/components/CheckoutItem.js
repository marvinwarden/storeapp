import React, { useState } from "react";
import "./CheckoutItem.css";



function CheckoutItem({ image, price, title, quantity, click, id, }) {

    
    const [itemPrice, setItemPrice] = useState(price * quantity);
    const [itemQuantity, setItemQuantity] = useState(quantity);

    
    
    function itemPriceSum(e) {
        setItemQuantity(e.target.value);
        setItemPrice(price * e.target.value)
        
        
    }


    return (<div className="basket-container">
        <div className="item-container">

            <div className="checkout-item-img">
                <img src={image} alt="test"></img>
            </div>
            <div className="item-info">
                <h3>{title}</h3>    
                Quantity: <input onChange={itemPriceSum} value={itemQuantity} className="quantity-input"/>
                    <p class="price" >{"R" + itemPrice.toFixed(2)}</p>
                <button onClick={(e) => click(id, quantity)} className="remove-item-btn" >Remove item</button>
            </div>

        </div>
    </div>
    )
}

export default CheckoutItem;
