import React from 'react'

export default function Answer(props) {

    let style ={}

    const { answer, correct, selected, OnSelect, quizEnded } = props;


    if (selected && !quizEnded) {
        style = {
            backgroundColor: '#D6DBF5',
            color:  '#293264',
            border: 'none'
        }
    } else if (!selected && quizEnded) {
        style = {
            opacity: '.5'
        }
    }




    return (<button style={style} className="answer" onClick={() => props.onSelect(answer)}>{answer}</button>)

}