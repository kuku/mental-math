import './App.css';
import { useState } from 'react';


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateQuestions(minMinuend, maxMinuend, minSubtrahend,maxSubtrahend, sign) {
  let questions = []
  for (let i = 0;i<100; i++) {
    let minuend = randomIntFromInterval(minMinuend,maxMinuend)
    let subtrahend = randomIntFromInterval(minSubtrahend,maxSubtrahend)
    let question = `${minuend} ${sign} ${subtrahend} = `
    questions.push(question)
  }
  return questions
}

function App() {
  const [conditions, setConditions] = useState({
    minMinuend: 10,
    maxMinuend: 20,
    minSubtrahend: 1,
    maxSubtrahend: 10,
    sign: "-",
  })

  let minMinuend = !isNaN(parseInt(conditions.minMinuend)) ? parseInt(conditions.minMinuend) : 0
  let maxMinuend = !isNaN(parseInt(conditions.maxMinuend)) ? parseInt(conditions.maxMinuend) : 0
  let minSubtrahend = !isNaN(parseInt(conditions.minSubtrahend)) ? parseInt(conditions.minSubtrahend) : 0
  let maxSubtrahend = !isNaN(parseInt(conditions.maxSubtrahend)) ? parseInt(conditions.maxSubtrahend) : 0
  let sign = "-"
  if (conditions.sign === "-" || conditions.sign === "+") {
    sign = conditions.sign
  }
  
  let questions = generateQuestions(minMinuend, maxMinuend, minSubtrahend, maxSubtrahend, sign)
  let questionsJsx = questions.map((question,i) => <div className="Question" key={i}>{question}</div>)
  const handleChange = (e) => {
    const {name, value} = e.target
    setConditions({...conditions, [name]: value})
    console.log(conditions)
  }
  return (
    <div className="App">
      <div className="Conditions">
        <h2>生成条件</h2>
        <div className="Conditions-content">
          <input onChange={handleChange} className="Conditions-number-input" value={conditions.minMinuend} type="number" name="minMinuend"></input>
          <input onChange={handleChange} className="Conditions-number-input" value={conditions.maxMinuend} type="number" name="maxMinuend"></input>
          <input onChange={handleChange} className="Conditions-number-input" value={conditions.minSubtrahend} type="number" name="minSubtrahend"></input>
          <input onChange={handleChange} className="Conditions-number-input" value={conditions.maxSubtrahend} type="number" name="maxSubtrahend"></input>
          <input onChange={handleChange} className="Conditions-number-input" value={conditions.sign} type="text" name="sign"></input>
        </div>
      </div>
      <div className="Questions">
      {questionsJsx}
     </div>
    </div>
  );
}

export default App;
