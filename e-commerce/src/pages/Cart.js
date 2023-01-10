import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, setCartItems} = useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function totalCost() {
        const totalCost = 5.99 * cartItems.length
        return totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Order placed!")
            setCartItems([])
        }, 1000)

    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost()} </p>
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
        </main>
    )
}

export default Cart