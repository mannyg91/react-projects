import React, {useState, useEffect, useRef} from 'react';

function App() {
    const STARTING_TIME = 5

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textAreaRef = useRef(null)

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {        
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    // const wordCount = timeRemaining === 0 ? calculateWordCount(text) : 0;
    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        console.log(textAreaRef)
        textAreaRef.current.disabled = false
        textAreaRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }



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
                ref={textAreaRef}
                disabled={!isTimeRunning}
                onChange={handleChange}
                value={text} // not completely necessary, but ensures there is one source of truth
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button disabled={isTimeRunning} onClick={startGame}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </main>

    );
}

export default App;
