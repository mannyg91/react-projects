import React from 'react';

function App() {



    const [text, setText] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(5)

    React.useEffect(() => {
        if (timeRemaining > 0) {        
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        }
    }, [timeRemaining])

    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
        console.log(text)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(' ')
        const filteredWords = wordsArr.filter(word => word !== "") // solves problem of blank textarea being counted as 1 word
        const wordCount = filteredWords.length
        console.log(wordCount)
        return wordCount
    }


    return (
        <main>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text} // not completely necessary, but ensures there is one source of truth
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={() => calculateWordCount(text)}>Start</button>
            <h1>Word count: ???</h1>
        </main>

    );
}

export default App;
