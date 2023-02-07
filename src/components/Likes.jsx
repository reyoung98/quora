import { useState } from "react"

export const Likes = (props) => {
    const [likes, setLikes] = useState(0)

    const addLike = () => {
        setLikes(likes + 1)
    }

    return (
        <>
            <p>Likes: {likes}</p>
            <button onClick={addLike}>I like this</button>
        </>
    )
}