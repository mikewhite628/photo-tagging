import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom';
import Header from './Header'

const GameOver = ({toggleGameOver, pikachuFound, linkFound, second, minute}) => pikachuFound && linkFound ? ReactDom.createPortal(
    <React.Fragment>
        <div className='modal-overlay' />
        <div className='welcome-wrapper'>
                <div className='welcome-modal'>
                <button type='button' className='modal-close-button' onClick={toggleGameOver}>
                    <span>&#x2715;</span>
                </button>
                <span> - GAME OVER - </span>
                <p>
                {`It took you ${minute}:${second} to find Link and Pikachu!`}
                </p>
                <span>Great Job!</span>
            </div>
            </div>

    </React.Fragment>, document.body 
) : null

export default GameOver