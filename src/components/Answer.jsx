import { Likes } from './Likes'

export const Answer = (props) => {
    return (
        <>
            <p>{props.answer}</p>
            <Likes />
        </>
    )
}