import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import Link from '../images/link.png';
import Pikachu from '../images/Pikachu.png'

const WelcomeMenu = ({welcomeShowing, startGame}) => !welcomeShowing ? ReactDom.createPortal(
    <React.Fragment>
        <div className='modal-overlay' />
        <div className='welcome-wrapper'>
                <div className='welcome-modal'>
                
                <p>
                Find the Characters below to win!
                </p>
                    <img src={Link} className={'welcome-link'}></img>
                    <img src={Pikachu} className={'welcome-pikachu'}></img>
                <button type='button' className='game-start-button' onClick={startGame}>
                    <span>START!</span>
                </button>
            </div>
            </div>

    </React.Fragment>, document.body 
) : null

export default WelcomeMenu