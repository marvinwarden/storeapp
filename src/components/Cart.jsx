import React from "react";
import "./Cart.css";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

function Cart() {
    return <div class="cart">
        <LocalMallOutlinedIcon />
        <p className="cart-heading">Cart</p>
    </div>
}

export default Cart;