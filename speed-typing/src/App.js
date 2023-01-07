import React from 'react';

function App() {

    const [text, setText] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(5)
    const [isTimeRunning, setIsTimeRunning] = React.useState(false)

    React.useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {        
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if (timeRemaining === 0) {
            setIsTimeRunning(false)
        }
    }, [timeRemaining, isTimeRunning])

    const wordCount = timeRemaining === 0 ? calculateWordCount(text) : 0;

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(' ')
        const filteredWords = wordsArr.filter(word => word !== "") // solves problem of blank textarea being counted as 1 word
        const wordCount = filteredWords.length
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
            <button onClick={() => setIsTimeRunning(true)}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </main>

    );
}

export default App;
