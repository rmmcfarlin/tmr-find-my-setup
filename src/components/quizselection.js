import { useState } from "react"
import ComponentSelection from "./componentselection"
import listeningRoom from "../assets/listening-room.webp"

const QuizSelection = ({setQuizName}) => {

    const [typeSelection, setTypeSelection] = useState('fullsystem')
    const [componentSelection, setComponentSelection] = useState(null)
    const [quizSelection, setQuizSelection] = useState('fullsystem')


    const handleClick = (value) => {
        setTypeSelection(value)
        if (value === "fullsystem") {
            setQuizSelection("fullsystem")
        } if (value === "component") {
            setQuizSelection(null)
        }
    }

    const selectComponent = (value) => {
        setComponentSelection(value)
        setQuizSelection(value)
    }

    const handleStart = (quizSelection) => {
        setQuizName(quizSelection)
    }

    const componentCopy = "Get recommendations for individual components based on your current system and listening preferences."
    const fullsystemCopy = "Generate a full system based on your room size, listening preferences, and more."

    const getTypeSelection = () => {
        if (typeSelection === "component") {return componentCopy}
        if (typeSelection === "fullsystem") {return fullsystemCopy}
    }

    const getTypeButtonClass = (value) => {

        let className = "half-width-button"
        if (value === typeSelection) {
            className += " active"
        }
        return className
    }



    return (
        <>
        <div className="selection-header left-content">
            <p className="quiz-question">Select an quiz to get started.</p>
        </div>
        <div className="selection-buttons right-content">
            <div id="quiz-type-selection">
                <button className={getTypeButtonClass("fullsystem")} onClick={() => handleClick("fullsystem")}>Full System</button>
                <button className={getTypeButtonClass("component")} onClick={() => handleClick("component")}>Components</button>
            </div>
             <p>{getTypeSelection()}</p>
            <div id="component-selection">
                {typeSelection ? ( typeSelection === "fullsystem" ? (
                    <img src={listeningRoom} className="fullsystem-photo"></img>
                ) : (
                    <ComponentSelection selectComponent={selectComponent} componentSelection={componentSelection} />
                )) : <div></div>}
            </div>
            <button className="action-button" onClick={() => handleStart(quizSelection)}>Start Quiz</button>
        </div>
        </>
    )
}

export default QuizSelection