import React, { useState, useEffect } from 'react'

const Header = (props) => {

    const {
        pikachuFound,
        linkFound,
    } = props

    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    function reset() {
        setSecond('00');
        setMinute('00');
        setIsActive(false);
        setCounter(0)
    }
    //The timer
    useEffect(() => {
        let intervalId;

        if (isActive) {
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
    }, [isActive, counter])
    //have a 5 min timer
    //have images of the characters your searching for
    //X them out when they are found

return (
    <div className='nav'>
        <span>{linkFound ? 'Link Found' : 'Link'} {pikachuFound ? 'Pikachu Found' : 'Pikachu'}</span>
        <span> Find US </span>
        <span> Time Ramining {minute}:{second} </span>
        <button onClick={() => setIsActive(!isActive)}> {isActive ? 'Pause' : 'Start'} </button>
        <button onClick={() => reset()}> Reset </button>
        
    </div>
    )
}

export default Header