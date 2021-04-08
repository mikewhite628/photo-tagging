import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import Link from '../images/link.png';
import Pikachu from '../images/Pikachu.png'

const PopMenu = ({isShowing, hide, modalDisplay, pikachuFound, linkFound, getSelection}) => isShowing ? ReactDom.createPortal(
    <React.Fragment>
        <div className=' modal-overlay' />
            <div style={modalDisplay} className='modal'>
                <div className='modal-header'>
                <button type='button' className='popmenu-close-button' onClick={hide}>
                    <span>&times;</span>
                </button>
                </div>
                       <div onClick={getSelection} id={'Link'} className={'selection-container'}>{linkFound ? 'Link Found' : 'Link'}<img src={Link} id={'Link'} className={'pop-link'}></img> </div> 
                       <div onClick={getSelection} id={'Pikachu'} className={'selection-container'}>{pikachuFound ? 'Pikachu Found' : 'Pikachu'} <img src={Pikachu} id={'Pikachu'} className={'pop-pikachu'}></img> </div>

            </div>
    </React.Fragment>, document.body 
) : null

export default PopMenu