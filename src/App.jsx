import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import { NavBar } from './NavBar'

function App() {

  const questions = [
    { text: "O que é React?", answer: "Uma biblioteca Javascript para construção de interfaces gráficas" },
    { text: "O que é JSX?", answer: "Uma extensão de linguagem Javascript" },
    { text: "O que é um componente?", answer: "Uma função ou classe que retorna um elemento React" },
    { text: "O que é estado em React?", answer: "Uma forma de armazenar dados que podem mudar ao longo do tempo" },
    { text: "O que é uma prop?", answer: "Uma forma de passar dados de um componente pai para um componente filho" },
    { text: "O que é o Virtual DOM?", answer: "Uma representação em memória do DOM real" },
    { text: "O que é um hook em React?", answer: "Uma função especial que permite usar estado e outras funcionalidades do React em componentes funcionais" }  
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [answerIsVisible, setAnswerIsVisible] = useState(false)

  const currentQuestion = questions[currentIndex]

  const lastIndex = questions.length - 1

  return (
    <div className='app'>
      <Card text={answerIsVisible ? currentQuestion.answer : currentQuestion.text} />
      <NavBar
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        lastIndex={lastIndex}
        answerIsVisible={answerIsVisible}
        setAnswerIsVisible={setAnswerIsVisible}
      />
    </div>
  )
}

export default App