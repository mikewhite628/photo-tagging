import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

const PopMenu = ({isShowing, hide, modalDisplay, pikachuFound, linkFound, getSelection}) => isShowing ? ReactDom.createPortal(
    <React.Fragment>
        <div className=' modal-overlay' />
            <div style={modalDisplay} className='modal'>
                <div className='modal-header'>
                <button type='button' className='modal-close-button' onClick={hide}>
                    <span>&times;</span>
                </button>
                </div>
                    <ul>
                       <li onClick={getSelection} > {linkFound ? 'Link Found' : 'Link'}</li>
                       <li onClick={getSelection} > {pikachuFound ? 'Pikachu Found' : 'Pikachu'}</li>
                    </ul>
            </div>
    </React.Fragment>, document.body 
) : null

export default PopMenu