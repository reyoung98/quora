// import { useState } from "react";
// import './questionForm.scss'
// import { questionList } from '../App'

// export const QuestionForm = () => {

//     const [input, setInput] = useState('');
//     const [textArea, setTextArea] = useState('');
//     const [questions, setQuestions] = useState(questionList);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newList = [...questions]
//         newList.push({username: input, text: textArea})
//         setQuestions(newList)  
//     }

//     const handleInput = (e) => {
//         setInput(e.target.value);
//     }

//     const handleText = (e) => {
//         setTextArea(e.target.value);
//     }

//     return (
//         <div className="submit-question">
//             <h3>Ask a question</h3>
//             <form action="/" method="GET" onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username</label>
//                 <input type="text" name="username" id="username" value={input} onChange={handleInput} />
//                 <label htmlFor="question-text">Your question</label>
//                 <textarea name="question-text" id="question-text" value={textArea} onChange={handleText}></textarea>
//                 <button type="Submit">Submit question</button>
//             </form>
//         </div>
//     )
// }
