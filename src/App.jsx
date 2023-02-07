import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Question } from './components/Question'
import { QuestionForm } from './components/QuestionForm'


function App() {
  const [questions, setQuestions] = useState([
    {username: "Codegeek", text: "Why is React the best?"},
    {username: "Supercat", text: "What framework should I use for PHP backend?"}
])



  return (
    <div>

      {
        questions.map((question, index) => {
          return <Question key={index} questionData={questions[index]} />
        })
      }
    <QuestionForm /> 
      
    </div>
  )
}

export default App
