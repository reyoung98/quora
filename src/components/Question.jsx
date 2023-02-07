import { useState } from "react"
import { Answer } from './Answer'
import './question.scss'
import '../components/questionForm.scss'


export const Question = (props) => {

    const [answers, setAnswers] = useState([
        { username: "javaqueen", text: "One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application." },
        { username: "callmeishmael", text: "React, compared to other popular frontend frameworks like Angular & Vue, is much easier to learn. In fact, it’s one of the main reasons why React gained so much traction in little time. It helps businesses quickly build their projects." }
    ])

    const [input, setInput] = useState('');
    const [textArea, setTextArea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newList = [...answers]
        newList.push({ username: input, text: textArea })
        setAnswers(newList)
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
        <div className="question">
            <div className="question-section">
                <h3 className="question-title">{props.questionData.text}</h3>
                <p className="question-asker">Author: {props.questionData.username}</p>
            </div>

            {
                answers.map((answer, index) => {
                    return <Answer key={index} answerData={answers[index]} />
                })
            }

            <div className="form submit-answer">
                <h3>Answer this question</h3>
                <form action="/" method="GET" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={input} onChange={handleInput} />
                    <label htmlFor="question-text">Your answer</label>
                    <textarea name="question-text" id="question-text" value={textArea} onChange={handleText}></textarea>
                    <button type="Submit">Submit answer</button>
                </form>
            </div>

        </div>
    );
};