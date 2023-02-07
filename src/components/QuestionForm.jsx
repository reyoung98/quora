import { useState } from "react";
import './questionForm.scss'

export const QuestionForm = () => {

    const [input, setInput] = useState('');
    const [textArea, setTextArea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        newQuestionList = [...questions]
        // setQuestions  // need to add data to questions array

    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleText = (e) => {
        setTextArea(e.target.value);
    }
    return (
        <div className="submit-question">
            <h3>Ask a question</h3>
            <form action="/" method="GET" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={input} onChange={handleInput} />
                <label htmlFor="usename">Your question</label>
                <textarea name="username" id="username" value={textArea} onChange={handleText}></textarea>
                <button type="Submit">Submit question</button>
            </form>
        </div>
    )
}
