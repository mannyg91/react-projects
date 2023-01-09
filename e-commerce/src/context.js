import React, {useState, useEffect} from "react"

const Context = React.createContext() 

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(function() {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    console.log(allPhotos)
    
    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}