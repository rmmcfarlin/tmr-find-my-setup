import { useState } from "react"

const QuizSelection = () => {

    const [typeSelection, setTypeSelection] = useState(null)
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = (value) => {
        setTypeSelection(value)
    }


    const options = ["Power Amplifiers", "Preamplifiers", "Integrated Amplifiers", "Speakers", "Subwoofers", "Streamers", "DACs"]

    const componentCopy = "Get recommendations for individual components based on your current system and listening preferences."
    const fullsystemCopy = "Generate a full system based on your room size, listening preferences, and more."

    const getTypeSelection = () => {
        if (typeSelection === "component") {return componentCopy}
        if (typeSelection === "fullsystem") {return fullsystemCopy}
    }

    return (
        <>
        <div className="selection-header left-content">
            <p className="quiz-question">Select a quiz to get started.</p>
        </div>
        <div className="selection-buttons right-content">
            <div id="quiz-type-selection">
                <button className="half-width-button" onClick={() => handleClick("fullsystem")}>Full System</button>
                <button className="half-width-button" onClick={() => handleClick("component")}>Components</button>
            </div>
             <p>{getTypeSelection()}</p>
            <div id="component-selection">
            </div>
            <button className="action-button">Start Quiz</button>
        </div>
        </>
    )
}

export default QuizSelection