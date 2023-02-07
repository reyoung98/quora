import { useState } from "react"
import { Answer } from './Answer'
import './question.scss'

export const Question = (props) => {

    const [answers, setAnswers] = useState([
        { username: "javaqueen", text: "One of the main benefits of using React JS is its potential to reuse components. It saves time for developers as they don't have to write various codes for the same features. Furthermore, if any changes are made in any particular part, it will not affect other parts of the application." },
        { username: "callmeishmael", text: "This is a great answer." }
    ])

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
        </div>
    );
};