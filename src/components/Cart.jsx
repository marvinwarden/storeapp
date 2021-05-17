import React from "react";
import "./Cart.css";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

function Cart() {
    return <div class="cart">

        <a href="#blank" className="cart-heading"><LocalMallOutlinedIcon className="cart-icon" /> Cart</a>
    </div>
}

export default Cart;