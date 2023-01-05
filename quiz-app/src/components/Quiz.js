import React from 'react'
import Question from './Question.js'

export default function Quiz() {

    //does this need to be a state?
    const [questions, setQuestions] = React.useState([])
    const [quizEnded, setQuizEnded] = React.useState(false)


    //ran per each question, should only run once
    React.useEffect(() => {
        async function getQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            const data = await res.json()
            setQuestions(data.results)
            console.log(data.results)
        }
        getQuestions()
    }, [])


    const checkAnswersHTML = (
            <div className="check-answers">
                {quizEnded ? 
                    <div className="results">You scored {3}/{5} correct answers
                        <button>Play again</button>
                    </div>
                    : <button onClick={() => setQuizEnded(true)}>Check Answers</button>
                }
            </div>
        )
    

    const questionElements = questions.map(item => (
        <Question className="question"
            question={item.question} 
            incorrectAnswers={item.incorrect_answers}
            correctAnswer={item.correct_answer}
            quizEnded = {quizEnded}
        />

    ))


    return(
        <div className="quiz">
            {questionElements}
            {checkAnswersHTML}
        </div>
    )
}