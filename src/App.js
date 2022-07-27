import { useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAns,setRightAns] = useState(0);
  const [wrongAns,setWrongAns] = useState(0);
  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 5);
      setRightAns(rightAns+1);
    }
    else {
      setWrongAns(wrongAns+1);
      setScore(score-4);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <>
        <div className="title">
            <div className="progressbar-cont" >
              <b>Right Ans</b>
            <ProgressBar bgcolor="white" progress={(rightAns/questions.length*100).toString()}  height={15} color="green"/>
            </div>
            <div className="points">
            <b>Points</b>
            <b>{score}</b>
            </div>
            <div className="progressbar-cont">
            <b>Wrong Ans</b>
            <ProgressBar bgcolor="white" progress={(wrongAns/questions.length*100).toString()}  height={15} color="red"/>
            </div>
            </div>
        <div className="score-section">
          
          Você pontuou {score} de {questions.length}
        
        </div>
        </>
      ) : (
        <>
            <div className="title">
            <div className="progressbar-cont">
              <b>Right Ans</b>
            <ProgressBar bgcolor="white" progress={(rightAns/questions.length*100).toString()}  height={15} color="green"/>
            </div>
            <div className="points">
            <b>Points</b>
            <b>{score}</b>
            </div>
            <div className="progressbar-cont">
            <b>Wrong Ans</b>
            <ProgressBar bgcolor="white" progress={(wrongAns/questions.length*100).toString()}  height={15} color="red"/>
            </div>
            </div>
          <div className="question-section">
            
            
            <div className="question-count">
            
            
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
            <b>Note: Right ans is 5 points and Wrong ans leads to -4 points</b>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
