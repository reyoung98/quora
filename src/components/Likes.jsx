import { useState } from "react"
import './likes.scss'

export const Likes = (props) => {
    const [likes, setLikes] = useState(0)

    const addLike = () => {
        setLikes(likes + 1)
    }

    return (
        <div className="likes">
            <button onClick={addLike}>👍</button>
            <p>{likes}</p>
        </div>
    )
}