import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const GameOver = ({toggleGameOver, pikachuFound, linkFound}) => pikachuFound && linkFound ? ReactDom.createPortal(
    <React.Fragment>
        <div className='modal-overlay' />
        <div className='welcome-wrapper'>
                <div className='welcome-modal'>
                <button type='button' className='modal-close-button' onClick={toggleGameOver}>
                    <span>&#x2715;</span>
                </button>
                <p>
                GAME OVER
                </p>
            </div>
            </div>

    </React.Fragment>, document.body 
) : null

export default GameOver