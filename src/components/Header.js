import React, { useState, useEffect } from 'react'
import Link from '../images/link.png';
import Pikachu from '../images/Pikachu.png'

const Header = (props) => {

    const {
        pikachuFound,
        linkFound,
        gameStarted,
        setGameStarted
    } = props

    const [ startButton, setStartButton ] = useState('control-button gameplay-button')

    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [counter, setCounter] = useState(0);

    function reset() {
        setSecond('00');
        setMinute('00');
        setGameStarted(false);
        setCounter(0)
    }
    //The timer
    useEffect(() => {
        let intervalId;

        if (gameStarted) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);
    
                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;
    
                setSecond(computedSecond)
                setMinute(computedMinute)
    
                setCounter(counter => counter + 1);
            }, 1000)

        }
        return () => clearInterval(intervalId)
    }, [gameStarted, counter])

    const styleStartButton = () => {
        setStartButton('pause-button')
    }

return (
    <div className='nav'>
        {linkFound ? <img src={Link} className={'link-img found-img'}></img> : <img src={Link} className={'link-img'}></img>} {pikachuFound ? <img src={Pikachu} className={'pikachu-img found-img'}></img> : <img src={Pikachu} className={'pikachu-img'}></img>}
        <span> Find US </span>
        <span> Time Ramining {minute}:{second} </span>
        <button className={startButton} onClick={() => setGameStarted(!gameStarted)}> {gameStarted ? 'Pause' : 'Start'} </button>
        <button className={'gameplay-button'} onClick={() => reset()}> Reset </button>
        
    </div>
    )
}

export default Header