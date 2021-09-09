import React from "react";
import Product from "./Product";
import Products from "../clothing.js";
import "./Home.css";

function Home() {
    return <div className="home">
        <div className="product-row">
            {Products.map(product => {
                return <Product image={product.img} title={product.item} price={product.price} key={product.id} id={product.id} quantity={product.qty}/>
            })}
        </div>
    </div>
}

export default Home;

