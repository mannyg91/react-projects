import React from 'react';
import Quiz from './components/Quiz.js'
import Start from './components/Start.js'


function App() {

  const [start, setStart] = React.useState(false) //set to false when done

  function startQuiz() {
    console.log("started")
    setStart(true)
  }

  return (
    <main>
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      {start ? <Quiz /> : <Start handleClick={startQuiz} />}
    </main>
  );
}

export default App;
