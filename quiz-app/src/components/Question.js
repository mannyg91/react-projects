import React from 'react'
import Answer from './Answer.js'

export default function Question(props) {
    const { question, incorrectAnswers, correctAnswer, quizEnded } = props;

    const [allAnswers, setAllAnswers] = React.useState([]) //used to shuffle answers
    

    const [selectedAnswer, setSelectedAnswer] = React.useState(null) //used to send up answer, may not need





    function shuffleAnswers() {
        const numAnswers = incorrectAnswers.length + 1
        const insertPosition = Math.floor(Math.random() * numAnswers);
        return incorrectAnswers.slice(0,insertPosition).concat(correctAnswer,incorrectAnswers.slice(insertPosition))
    }


    React.useEffect(() => {
        setAllAnswers(shuffleAnswers())
    }, [])


    const answerElements = allAnswers.map((answer)=>{
        return(<Answer 
            answer={answer}
            correct={answer === correctAnswer ? true : false }
            selected={selectedAnswer === answer} //checks if the current answer equals selected answer
            onSelect={setSelectedAnswer} 
            quizEnded = {quizEnded}
            />)
    })


    return (
        <div className="question-container">
            <div className="question">{question}</div>
            <div className="answers">{answerElements}</div>
        </div>
    )
}