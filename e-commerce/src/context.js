import React, {useState, useEffect} from "react"

const Context = React.createContext() 

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(function() {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function addToCart(newImage) {
        setCartItems(prevImages => [...prevImages, newImage])
    }

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo // acts as the else
        })

        setAllPhotos(updatedArr)
        console.log(allPhotos)
    } 
    
    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addToCart, cartItems}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}