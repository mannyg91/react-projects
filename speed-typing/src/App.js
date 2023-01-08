import React from 'react';
import useWordGame from './hooks/useWordGame'

function App() {
    const {textAreaRef, isTimeRunning, handleChange, text, timeRemaining, startGame, wordCount} = useWordGame(10)

            
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
