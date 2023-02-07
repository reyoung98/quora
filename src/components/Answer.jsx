import { useState } from "react"
import { Likes } from './Likes'

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
        <>
         <p>{props.answer}</p>
            <Likes />
            {
                comment !== '' && (
                    <p>{comment}</p>
                ) 
            }
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleInput}/>
                <button type="submit">Add comment</button>
            </form>
           
        </>
    )
}