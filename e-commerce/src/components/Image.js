import React from "react"

// destructured from props immediatley
function Image({className, img}) {
    return (
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image