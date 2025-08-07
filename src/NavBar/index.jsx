import './index.css'

export function NavBar(props) {

    function goToPrevious() {
        if (props.currentIndex === 0) return
        props.setAnswerIsVisible(false)
        props.setCurrentIndex(props.currentIndex - 1)
    }

    function goToNext() {
        if (props.currentIndex === props.lastIndex) return
        props.setAnswerIsVisible(false)
        props.setCurrentIndex(props.currentIndex + 1)
    }

    function flipCard() {
        props.setAnswerIsVisible(!props.answerIsVisible)
    }

    return <div className="navbar">
        <button onClick={goToPrevious} disabled={props.currentIndex === 0}>anterior</button>
        <button onClick={flipCard}>mostrar {props.answerIsVisible ? 'pergunta' : 'resposta'}</button>
        <button onClick={goToNext} disabled={props.currentIndex === props.lastIndex}>próxima</button>
    </div>
}