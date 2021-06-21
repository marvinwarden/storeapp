import React from "react";
import "./Cart.css";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Cart() {

    const [
        {
            basket
        }
    ] = useStateValue();

    return <div class="cart-container">
        <Link to="/ShoppingBasket">
            <div class="cart">
                <a href="/shoppingbasket" className="cart-heading"><LocalMallOutlinedIcon className="cart-icon" />
                Cart</a>
            </div>
            <div class="item-count">
                <p>{
                    basket.length
                }</p>
            </div>
        </Link>
    </div>

}

export default Cart;
