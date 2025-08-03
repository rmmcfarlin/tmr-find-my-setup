import { useState } from "react"
import QuizSelection from "./quizselection"
import QuizMain from "./quizmain"
import EmailSubscription from "./emailsubscribe"

const QuizWrapper = () => {

    const [quizName, setQuizName] = useState(null)
    const [quizCompleted, setQuizCompleted] = useState(false)

    return (
        <>
        {quizCompleted ? (
            <EmailSubscription />
        ) : (
            quizName ? (
        <QuizMain  quiz={quizName} setQuizCompleted={setQuizCompleted}/>
        ) : (
        <QuizSelection setQuizName={setQuizName} />
        )
        )
        }
        
        </>

    )
}

export default QuizWrapper