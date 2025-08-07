export function NavBar(props){

    function goToPrevious() {
        if(props.currentIndex === 0) return
       props.setCurrentIndex(props.currentIndex -1)
    }

    function goToNext() {
        if(props.currentIndex === props.lastIndex) return
       props.setCurrentIndex(props.currentIndex +1)
    }

    return <div>
        <button onClick={goToPrevious}>anterior</button>
        <button>mostrar resposta</button>
        <button onClick={goToNext}>próxima</button>
    </div>
}