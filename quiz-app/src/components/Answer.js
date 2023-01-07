import React from 'react'

export default function Answer(props) {

    let style ={}

    const { answer, correct, selected, onSelect, quizEnded, setCorrectCount } = props;

    function handleClick() {
        onSelect(answer)
    }

    React.useEffect(function() {
        if (selected && correct) 
            setCorrectCount(prevCount => prevCount + 1) // causes a loop, needs to be reworked
    }, [quizEnded])



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
  

        }
    }


    return (<button style={style} className="answer" onClick={handleClick}>{answer}</button>)

}