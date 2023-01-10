import React, {useContext} from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../Context"

function Photos() {

    //gets the array that was passed as a value in the context provider
    const {allPhotos} = useContext(Context)

    //.map has an index property that can be accessed
    const photoElements = allPhotos.map((photo, index) => (
            //uses the created Image component, passes the obj, so that the URL can be accessed within Image.js
            <Image key={photo.id} img={photo} className={getClass(index)} />
        )
    )


    return (
        <main className="photos">
            {photoElements}
        </main>
    )
}

export default Photos