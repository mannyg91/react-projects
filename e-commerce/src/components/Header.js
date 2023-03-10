import React, {useContext} from "react"
import { Link } from 'react-router-dom'
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    console.log(cartItems)

    function mainCartIcon() {
        if(cartItems.length > 0)
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"> </i>
        else
            return <i className="ri-shopping-cart-line ri-fw ri-2x"> </i>
    }

    return (
        <header>
            
            <Link to="/"><h2>Picsome</h2></Link>
            <Link to="/cart">{mainCartIcon()}</Link>
            
        </header>
    )
}

export default Header
