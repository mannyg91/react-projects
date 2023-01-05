import React from 'react'

export default function Answer(props) {





    const style = props.selected ? {
        backgroundColor: '#D6DBF5',
        color:  '#293264',
        border: 'none'
    } : null


    return (<button style={style} className="answer" onClick={() => props.onSelect(props.answer)}>{props.answer}</button>)

}