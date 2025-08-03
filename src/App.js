import logo from './logo.svg';
import './stylesheets/App.css';
import './stylesheets/main.css';
import { useState } from 'react';
import AppWrapper from './components/appwrapper';
import StartMenu from './components/startmenu';
import QuizWrapper from './components/quizwrapper';


function App() {

  const [quizStarted, setQuizStarted] = useState(false)

  return (
    <div className="App">
      <AppWrapper>
        {quizStarted ? (
          <QuizWrapper />
        ) : (
          <StartMenu quizStarted={quizStarted} setQuizStarted={setQuizStarted}/>
        )

        }
         
      </AppWrapper>
    </div>
  );
}

export default App;
