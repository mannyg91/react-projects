// this custom hook won't necessarily improve reusability since its a very specific use-case. This is for learning purposes.

import {useState, useEffect, useRef} from 'react'


function useWordGame(startingTime = 5) {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
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
        setTimeRemaining(startingTime)
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

    return {textAreaRef, isTimeRunning, handleChange, text, timeRemaining, startGame, wordCount}
}

export default useWordGame