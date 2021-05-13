import React from "react";
import "./Product.css";



function Product(props) {
    return <div className="product-container">
        <div className="product">
            <div className="product-card">
                <img className="product-img" src={props.image} alt={props.description} />
                <p className="product-name" >{props.title}</p>
                <p className="product-price" >{props.price}</p>
            </div>
            <div className="add-cart">
                <button className="add-cart-btn" >Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Product;
