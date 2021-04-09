import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom';
import Header from './Header'

const GameOver = ({toggleGameOver, pikachuFound, linkFound, timeRemaining, playAgain}) => pikachuFound && linkFound ? ReactDom.createPortal(
    <React.Fragment>
        <div className='modal-overlay' />
        <div className='welcome-wrapper'>
                <div className='welcome-modal'>
                <div className={'gameover-text'}>
                <button type='button' className='restart-button' onClick={playAgain}>
                    <span>Play Again!</span>
                </button>
                <span> - GAME OVER - </span>
                <p>
                {`It took you ${timeRemaining} to find Link and Pikachu!`}
                </p>
                <span>Great Job!</span>
                </div>
            </div>
            </div>

    </React.Fragment>, document.body 
) : null

export default GameOver