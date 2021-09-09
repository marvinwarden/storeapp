import React from "react";
import "./AddressForm.css"

function AddressForm() {
    return <div className="address-container" >
        <div className="address-form" >
            <h2 className="address-heading">Delivery Address</h2>
            <input className="apartment" placeholder="House/Apartment/Suite & Street" />
            <input placeholder="City" />
            <input placeholder="State/province" />
            <input placeholder="Country" />
            <input placeholder="ZIP/postal code" />
            
        </div>
    </div>
}

export default AddressForm;