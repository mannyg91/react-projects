import React from 'react'

export default function Answer(props) {
    


    function clickAnswer() {
        // setAnswerSelected(event.target.innerText)
        // event.target.innerText === props.correctAnswer ? setUserCorrect(true) : setUserCorrect(false)
        console.log(props.correct)
    }

    return (<button className="answer" onClick={clickAnswer}>{props.content}</button>)

}