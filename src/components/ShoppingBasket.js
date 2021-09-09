import React, { useState } from "react";
import "./ShoppingBasket.css";
import Subtotal from "./Subtotal";
import CheckoutItem from "./CheckoutItem";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import { useStateValue } from "./StateProvider";


function ShoppingBasket() {
    const [
        {
            basket,
        }
    ] = useStateValue();

    const newBasket = basket.reduce((acc, item) => {
        return acc.find(duplicateItem => item.id === duplicateItem.id) 
        ?   [...acc.map(duplicateItem => 
                (duplicateItem.id === item.id) ? {...duplicateItem, price: duplicateItem.price , qty: duplicateItem.qty + 1 } : duplicateItem,
                ),
            ]
            
        : [...acc, { ...item, qty: 1}];
        
     }, []);

    const [cartItems, setCartItems] = useState(newBasket)
    
     console.log(cartItems)
    function removeItems(item, qty) {    

            (cartItems.length === 0) && setNewSubtotal(0.00)

            setCartItems((prev) => [
                   ...prev.filter((duplicateItem) => duplicateItem.id !== item
                )]);
            
            


            // setCartItems((prev) => [
            //     ...prev.map((duplicateItem) =>
            //     duplicateItem.id === item ? {...duplicateItem, qty: duplicateItem.qty - 1} : duplicateItem 
            //     ),
            // ]) 

    } 
     
   

    const sum = (total, price) => {
        return parseFloat(total) + parseFloat(price.price);
    }

    function sumCart() {
        return basket.reduce(sum, 0);
    }

    function updateSubtotal() {
        setNewSubtotal((prev) => prev - subtotal)
    }

    const subtotal = sumCart();
    const vatPercentage = 0.15;

    
    const [prevSubtotal, setNewSubtotal] = useState(subtotal);


    return (
        <div className="shopping-basket">
            <h1 className="basket-heading">Shopping Basket</h1>
            <div className="basket">
                <div className="basket-section">

                        {cartItems.map(item => {
                            
                            return <CheckoutItem onChange={updateSubtotal} key={item.id} updateTotal={subtotal} click={removeItems} image={item.image} price={item.price} title={item.title} id={item.id} quantity={item.qty}/>
                            
                       })}
                            
                </div>
                <div className="subtotal-section">

                    <Subtotal onLoad={sumCart} subtotal={prevSubtotal} vat={subtotal * vatPercentage} itemCount={cartItems.length} key={basket.id} />
                    <AddressForm />
                    <PaymentForm />

                </div>
            </div>
        </div>
    )
}

export default ShoppingBasket;