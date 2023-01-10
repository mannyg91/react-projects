import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"

// destructured from props immediatley
function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context) // must always have some form of this if using a context

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id) // checks if any item's id in cartItems matches the img.id from the component instance
        if(alreadyInCart)
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        else if(hovered)
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }


    return (
        <div 
            className={`${className} image-container`}               
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img 
                src={img.url} 
                className="image-grid"
                alt = ""
            />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({ //shape automatically enforces obj type
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default Image