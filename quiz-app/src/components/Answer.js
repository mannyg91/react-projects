import React from 'react'

export default function Answer(props) {

    let style ={}

    const { answer, correct, selected, onSelect, quizEnded, correctCount, setCorrectCount } = props;

    function handleClick() {
        onSelect(answer)
    }

    if (!quizEnded) {
        if (selected) {
            style = {
                backgroundColor: '#D6DBF5',
                color:  '#293264',
                border: 'none'
            }
        }
    }

    if (quizEnded) {
        if (!selected) {
            style = {
                opacity: '.5'
            }
        } else if (selected && !correct) {
            style = {
                backgroundColor: '#F8BCBC',
                opacity: '.5',
                border: 'none'
            }
        } else {
            style = {
                backgroundColor: '#94D7A2',
                color: '#293264',
                border: 'none'
            }
  
            setCorrectCount(correctCount + 1) // causes a loop, needs to be reworked
        }
    }


    return (<button style={style} className="answer" onClick={handleClick}>{answer}</button>)

}