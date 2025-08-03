import { use, useState } from "react"
import quizData from "../quizdata.json"


const ErrMessage = () => {
    return (
        <p id="no-answer-message">Please select an answer</p>
    )
}


const QuizMain = ({quiz, setQuizCompleted}) => {

const [i, setI] = useState(0)
const [selectedAnswer, setSelectedAsnwer] = useState(null)
const [errMsg, setErrMsg] = useState(false)
const [responses, setResponses] = useState([])

let currQuiz = quizData.quizzes.find(q => q.title === quiz)
let currQuizLength = currQuiz.questions.length
let currQuestion = currQuiz.questions[i].question
let currOptions = currQuiz.questions[i].options

const handleClick = () => {
    if (selectedAnswer) {
        if (i === currQuizLength - 1) {
            setResponses(prev => [...prev, selectedAnswer])
            setQuizCompleted(true)
        }   
        setResponses(prev => [...prev, selectedAnswer])
        setI(i + 1)
        setSelectedAsnwer(null)
    } 

    if (selectedAnswer === null) {
        setErrMsg(true)
    }
   
}

const handleSelect = (option) => {
    setSelectedAsnwer(option)
    setErrMsg(false)
}

 const getOptionClass = (option) => {

        let className = "answer-button"
        if (option === selectedAnswer) {
            className += " active"
        }
        return className
    }

console.log(responses)

    return (
        <>
        <div className="quiz-question-container left-content">
            <p className="quiz-question">{currQuestion}</p>
        </div>
         <div className="quiz-answer-container right-content">
            {errMsg ? (
                <ErrMessage />
            ) : <></>}
            {currOptions.map((option, index) => {
                return (
                    <button key={index} className={getOptionClass(option)} onClick={() => handleSelect(option)}>
                        {option}
                    </button>
                )
            })
            }
        <button className="action-button" onClick={() => handleClick()}>Next</button>
        </div>
        </>
    )
}

export default QuizMain