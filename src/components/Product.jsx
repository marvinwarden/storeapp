import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";



function Product(props) {

    const [state, dispatch] = useStateValue();
   
    const addToBasket = () => {
        
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                qty: props.quantity
            },
        });
    };

    return <div className="product-container">
        <div className="product">
            <div className="product-card">
                <img className="product-img" src={props.image} alt={props.description} />
                <p className="product-name" >{props.title}</p>
                <p className="product-price" >{"R" + props.price}</p>
            </div>
            <div className="add-cart">
                <button onClick={addToBasket} className="add-cart-btn" >Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Product;
