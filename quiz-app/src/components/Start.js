import React from 'react'

export default function Start(props) {
    return (
        <div className="start-container">
            <h1>Quizzical</h1>
            <p>Quiz questions taken from the Open Trivia Database API</p>
            <button className="start-btn" onClick={props.handleClick}>Start Quiz</button>
        </div>
    )
}