import "./PaymentForm.css";

function PaymentForm() {

    return <div className="payments">
        <h2 className="payment-heading" >Payment</h2>
        <div className="card-type ">
            <label>CARD TYPE</label>
            <select className="payment-input card-select" name="cardOptions">
                <option value="Visa">Select Card Type</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Maestro">Maestro</option>
            </select>
        </div>
        <form action="http://localhost:4242/create-checkout-session" method="POST">
            <label>CARDHOLDER NAME</label>
            <input
                className="payment-input"
                type="text"
                placeholder="Name on Card"
                
            />
            <label>CARD NUMBER</label>
            <input className="payment-input card-number"
                type="text"
                name="cardNumber"
                placeholder="Valid Card Number"
                
            />
            <div className="card-center">
                <div className="card-expiration">
                    <label>EXPIRATION DATE</label>
                    <input
                        className="payment-input expiry"
                        type="text"
                        name="expiration"
                        placeholder="MM/YY"
                        
                    />
                </div>
                <div className="card-cvv">
                    <label>CVV CODE</label>
                    <input
                        className="payment-input cvv"
                        type="text"
                        name="cvv-code"
                        placeholder="CVC"
                        
                    />
                </div>
            </div>
            <button type="submit" className="to-checkout">Process Payment</button>
        </form>
    </div>
}

export default PaymentForm;