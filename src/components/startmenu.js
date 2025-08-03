
const StartMenu = ({quizStarted, setQuizStarted}) => {

    return (
    <>
        <div className="startmenu-header left-content">
            <h1 className="quiz-question">Find Your Perfect Setup</h1>
        </div>
        <div className="startmenu-info right-content">
            <div>
                <p>Looking to build a new system, but don’t know where to start?</p>
                <p>Searching for your next upgrade, but want to make sure it’s a good match?</p>
                <p>Take our system builder quiz, and find your perfect setup!</p>
            </div>
            <button className="action-button" onClick={() => setQuizStarted(true)}>Take the Quiz</button>
        </div>
    </>
    )
}

export default StartMenu