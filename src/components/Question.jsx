import { Answer } from './Answer'

export const Question = (props) => {
    return (
        <div className="question">
            <h3 className="title">{props.title}</h3>
            <p className="definition">{props.text}</p>
            <Answer answer="This is an answer" /> 
            <Answer answer="This is another answer" /> 
        </div>
    );
};