import './App.css';
import React, { useState, useEffect } from 'react';
import mashUp from './images/mashup.jpg';
import firebase from './firebase';
import Header from './components/Header';
import PopMenu from './components/PopMenu';
import UsePopMenu from './components/UsePopMenu';


function App() {

  const db = firebase.firestore()

  const [pikachuFound, setPikachuFound] = useState(false);
  const [linkFound, setLinkFound] = useState(false);
  const [selection, setSelection] = useState()
  const [timer, setTimer] = useState();
  const {isShowing, toggle} = UsePopMenu();
  let searchX = '';
  let searchY = '';
  const [guess, setGuess] = useState({X:'', Y:''})

  const [modalDisplay, setModalDisplay] = useState();

  const mouseCoords = (e) => {
    searchX = e.pageX;
    searchY = e.pageY;
  }

  
  const imageFound = (doc) => {
    alert(`${doc.data().name} found!`)
    if (doc.data().name === 'Pikachu') {
      setPikachuFound(true)
      console.log('found pika')
    } else if (doc.data().name === 'Link') {
      setLinkFound(true)
      console.log('found link')
    }
  }

  const getSelection = (e) => {
    const playerSelection =  e.target.innerHTML
     setSelection(playerSelection)
     checkForHit(guess)
     toggle()
     
 
  }

  const playerClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if(!isShowing){
      mouseCoords(e)
      setModalDisplay({top:`${searchY - 30}px`, left:`${searchX}px`})
      console.log(searchY, searchX)
      setGuess({X: x, Y: y})
      toggle()
      console.log(x, y)
      
    }
}


  function checkForHit () {
    db.collection('chars').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      registerHit(doc)
    })
  })
  }

  const registerHit = (doc) => {
    if ((doc.data().xmin < guess.X && doc.data().xmax > guess.X) &&
        (doc.data().ymin < guess.Y && doc.data().ymax > guess.Y) &&
        (` ${doc.data().name === selection}`)) {
        imageFound(doc)
        }
  } 

  console.log(pikachuFound, linkFound)
  return (
    <div className='container'>
    <div className="app">
      <Header timer={timer} setTimer={setTimer} linkFound={linkFound} pikachuFound={pikachuFound}/>
      <div className='gameboard'>
      <img className='gameImage' src={mashUp} onClick={playerClick} alt='anime collage'></img>
      <PopMenu
        isShowing={isShowing}
        hide={toggle}
        modalDisplay={modalDisplay}
        linkFound={linkFound} pikachuFound={pikachuFound}
        getSelection={getSelection}
        />
    </div>
    </div>
    </div>
  );
}

export default App;
