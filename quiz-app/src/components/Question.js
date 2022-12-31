import React from 'react'

export default function Question(props) {
    const { question, incorrectAnswers, correctAnswer } = props;

    function shuffleAnswers() {
        const numAnswers = incorrectAnswers.length + 1
        const insertPosition = Math.floor(Math.random() * numAnswers);
        return incorrectAnswers.slice(0,insertPosition).concat(correctAnswer,incorrectAnswers.slice(insertPosition))
    }

    const allAnswers = shuffleAnswers()

    const answerElements = allAnswers.map((answer)=>{
        return (<button className="answer">{answer}</button>)
    })


    return (
        <div className="question-container">
            <div className="question">{question}</div>
            <div className="answers">{answerElements}</div>
        </div>
    )
}