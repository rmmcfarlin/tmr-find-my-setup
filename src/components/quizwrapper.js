import { useState } from "react"
import QuizSelection from "./quizselection"
import QuizMain from "./quizmain"

const QuizWrapper = () => {

    const [quizName, setQuizName] = useState(null)

    return (
        <>
        {quizName ? (
        <QuizMain  quiz={quizName}/>
        ) : (
        <QuizSelection setQuizName={setQuizName}/>
        )}
        </>

    )
}

export default QuizWrapper