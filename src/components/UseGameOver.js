import React, { useState, useEffect } from 'react'

const UseGameOver = () => {
    const [gameOverShowing, setGameOverShowing] = useState(false);


    function toggleGameOver() {
        setGameOverShowing(!gameOverShowing)
       
    }

    

    return {
        gameOverShowing,
        toggleGameOver, 
    }
}

export default UseGameOver