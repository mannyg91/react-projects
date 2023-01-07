import React from 'react'
import Question from './Question.js'

export default function Quiz() {

    const [questions, setQuestions] = React.useState([])
    const [quizEnded, setQuizEnded] = React.useState(false) // can probably turn this into an object that also records the total number of answers
    const [correctCount, setCorrectCount] = React.useState(0)

    const numberOfQuestions = 10;

    React.useEffect(() => {
        startGame()
    }, [])


    function startGame() {
        setQuestions([])
        setQuizEnded(false)
        setCorrectCount(0)

        async function getQuestions() {
            const res = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`)
            const data = await res.json()
            setQuestions(data.results)
        }
        getQuestions()
    }



    const checkAnswersHTML = (
            <div className="check-answers">
                {quizEnded ? 
                    <div className="results">You scored {correctCount}/{numberOfQuestions} correct answers
                        <button onClick={startGame}>Play again</button>
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
            correctCount={correctCount}
            setCorrectCount={setCorrectCount}
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