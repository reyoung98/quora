import { useState } from "react"
import { Likes } from './Likes'
import './answer.scss'

export const Answer = (props) => {
    const [input, setInput] = useState('')
    const [comment, setComment] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setComment(input);
        setInput('');
    }


    return (
        <div className="answers">
         
             <p>{props.answerData.text}</p>
                <Likes />
                {
                    comment !== '' && (
                        <p className="comment">{comment} <span class="comment-user">- myusername</span></p>
                    ) 
                }
         
            <form className="comment-form" onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleInput}/>
                <button type="submit">Reply</button>
            </form>
           
        </div>
    )
}