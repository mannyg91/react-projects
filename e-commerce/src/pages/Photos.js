import React, {useContext} from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../Context"

function Photos() {

    const {allPhotos} = useContext(Context)

    //.map has an index property that can be accessed
    const photoElements = allPhotos.map((photo, index) => (
            //uses the created Image component, passes the obj, so that the URL can be accessed within Image.js
            <Image key={photo.id} img={photo} className={getClass(index)} />
        )
    )


    return (
        <main className="photos">
            <h1>Images go here</h1>
            {photoElements}
        </main>
    )
}

export default Photos