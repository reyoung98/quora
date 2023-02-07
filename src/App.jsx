import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Question } from './components/Question'
import './components/questionForm.scss'
// import { QuestionForm } from './components/QuestionForm'

export const questionList = [
  { username: "Codegeek", text: "Why is React the best?" },
  // { username: "Supercat", text: "What framework should I use for PHP backend?" }
]

function App() {

  const [questions, setQuestions] = useState(questionList)

  const [input, setInput] = useState('');
  const [textArea, setTextArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...questions]
    newList.push({ username: input, text: textArea })
    setQuestions(newList)
    setTextArea('')
    setInput('')
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleText = (e) => {
    setTextArea(e.target.value);
  }

  return (
    <div>

      {
        questions.map((question, index) => {
          return <Question key={index} questionData={questions[index]} />
        })
      }

      <div className="submit-question">
        <h3>Ask a question</h3>
        <form action="/" method="GET" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={input} onChange={handleInput} />
          <label htmlFor="question-text">Your question</label>
          <textarea name="question-text" id="question-text" value={textArea} onChange={handleText}></textarea>
          <button type="Submit">Submit question</button>
        </form>
      </div>

    </div>
  )
}

export default App
