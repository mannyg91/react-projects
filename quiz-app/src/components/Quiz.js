import React from 'react'
import Question from './Question.js'

export default function Quiz() {


    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        async function getQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setQuestions(data.results)
        }
        getQuestions()
    }, [])

    console.log(questions)

    const questionElements = questions.map(item => (
        <Question className="question"
            question={item.question} 
            incorrectAnswers={item.incorrect_answers}
            correctAnswer={item.correct_answer}
        />
    ))


    return(
        <div>
            {questionElements}
        </div>
    )
}