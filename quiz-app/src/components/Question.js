import React from 'react'
import Answer from './Answer.js'

export default function Question(props) {
    const { question, incorrectAnswers, correctAnswer, quizEnded } = props;

    const [allAnswers, setAllAnswers] = React.useState([]) //used to shuffle answers
    const [selectedAnswer, setSelectedAnswer] = React.useState("") //used to send up answer, may not need
    const [isSelected, setIsSelected] = React.useState(false) //impacts css style


    //set state or prop here, pass to the question component, when clicked, the state will be changed



    function shuffleAnswers() {
        const numAnswers = incorrectAnswers.length + 1
        const insertPosition = Math.floor(Math.random() * numAnswers);
        return incorrectAnswers.slice(0,insertPosition).concat(correctAnswer,incorrectAnswers.slice(insertPosition))
    }

    React.useEffect(() => {
        setAllAnswers(shuffleAnswers())
    }, [])
    // const allAnswers = shuffleAnswers()




    //how do I send 
    const answerElements = allAnswers.map((answer)=>{
        return(<Answer 
            content={answer}
            correct={answer === correctAnswer ? true : false }
            setSelectedAnswer={setSelectedAnswer}
            />)

        // return (<button style={styles} className="answer" onClick={clickAnswer}>{answer}</button>)
    })


    return (
        <div className="question-container">
            <div className="question">{question}</div>
            <div className="answers">{answerElements}</div>
        </div>
    )
}