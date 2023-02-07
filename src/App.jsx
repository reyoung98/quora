import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Question } from './components/Question'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Question title="What’s the big deal with React.js?" text="What are some facts about why React is technically superior" />
      <Question title="Is React.js worth it?" text="Let us know" />
      <Question title="Should I learn React.js or Vue.js?" text="Basically is it worth it if I learn Vue.js first and then React.js" />
    </div>
  )
}

export default App
