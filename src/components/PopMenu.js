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
                       <div onClick={getSelection}>{linkFound ? 'Link Found' : 'Link'}</div><img src={Link} className={'pop-link'}></img>
                       <div onClick={getSelection}>{pikachuFound ? 'Pikachu Found' : 'Pikachu'}</div><img src={Pikachu} className={'pop-pikachu'}></img>
            </div>
    </React.Fragment>, document.body 
) : null

export default PopMenu