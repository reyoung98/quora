import { useState } from "react"
import { Likes } from './Likes'
import './answer.scss'

export const Answer = (props) => {

    const [comments, setComments] = useState([])

    const [input, setInput] = useState('')
    // const [comment, setComment] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newArray = [...comments];
        newArray.push(input);
        setComments(newArray);
        setInput('');
    }


    return (
        <div className="answers">

            <p>{props.answerData.text}</p>
            <div className="answer-username">- {props.answerData.username}</div>
            <Likes />
            {
                comments.map((comment, index) => {
                    return <p key={index} className="comment">{comments[index]} <span className="comment-user">- myusername</span></p>
                })
            }

            <form className="comment-form" onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleInput} />
                <button type="submit">Reply</button>
            </form>

        </div>
    )
}