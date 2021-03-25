import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const WelcomeMenu = ({welcomeShowing, hide, startGame}) => !welcomeShowing ? ReactDom.createPortal(
    <React.Fragment>
        <div className='modal-overlay' />
        <div className='welcome-wrapper'>
                <div className='welcome-modal'>
                <button type='button' className='modal-close-button' onClick={startGame}>
                    <span>start</span>
                </button>
                <p>
                Hello! Welcome to my game do this to play! 
                </p>
            </div>
            </div>

    </React.Fragment>, document.body 
) : null

export default WelcomeMenu