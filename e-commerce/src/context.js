import React, {useState} from "react"

const Context = React.createContext() 

function ContextProvider(props) {
    const [photos, setPhotos] = useState([])


    return (
        <Context.Provider value={photos}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}