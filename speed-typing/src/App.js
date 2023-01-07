import React from 'react';

function App() {



    const [text, setText] = React.useState("")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
        console.log(text)
    }

    function calculateWordCount(text) {
        const wordsArr = text.split(' ')
        const wordCount = wordsArr.length
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
            <h4>Time remaining: ???</h4>
            <button onClick={() => calculateWordCount(text)}>Start</button>
            <h1>Word count: ???</h1>
        </main>

    );
}

export default App;
