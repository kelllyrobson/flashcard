import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import { NavBar } from './NavBar'

function App() {

  const questions = [
    { text: "O que é React?", answer: "Uma biblioteca Javascript para construção de interfaces gráficas"},
     { text: "O que é JSX?", answer: "Uma extensão de linguagem Javascript"},
      { text: "O que é um componente?", answer: "Uma função ou classe que retorna um elemento React"},
      { text: "O que é estado em React?", answer: "Uma forma de armazenar dados que podem mudar ao longo do tempo"},
      { text: "O que é uma prop?", answer: "Uma forma de passar dados de um componente pai para um componente filho"},
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answerIsVisible, setAnswerIsVisible] = useState(false)
  
  const currentQuestion = questions[currentIndex]

  const lastIndex = questions.length - 1

  return (
    <>
     <Card text={answerIsVisible ? currentQuestion.answer : currentQuestion.text}/>
     <NavBar 
     setCurrentIndex={setCurrentIndex} 
     currentIndex={currentIndex}
     lastIndex={lastIndex}
     />
    </>
  )
}

export default App