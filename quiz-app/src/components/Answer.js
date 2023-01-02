import React from 'react'

export default function Answer(props) {

    //can make a set effect here, whenever selectedAnswer changes, we can check if the current is the selected answer, then conditionally apply style

    React.useEffect(() => {
        props.isSelected ? 
    })


    function clickAnswer(event) {
        
        // event.target.innerText === props.correctAnswer ? setUserCorrect(true) : setUserCorrect(false)
        console.log(props.correct)
        props.setIsSelected(true)
        props.setSelectedAnswer(event.target.innerText)
    }

    return (<button className="answer" onClick={clickAnswer}>{props.content}</button>)

}