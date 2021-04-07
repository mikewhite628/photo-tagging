import './App.css';
import React, { useState, useEffect } from 'react';
import mashUp from './images/mashup.jpg';
import firebase from './firebase';
import Header from './components/Header';
import PopMenu from './components/PopMenu';
import UsePopMenu from './components/UsePopMenu';
import UseWelcome from './components/UseWelcome';
import WelcomeMenu from './components/WelcomeMenu';
import GameOver from './components/GameOver';
import UseGameOver from './components/UseGameOver';


function App() {

  const db = firebase.firestore()

  const [gameStarted, setGameStarted] = useState(false);
  const { gameOverShowing, toggleGameOver } = UseGameOver()
  const [pikachuFound, setPikachuFound] = useState(false);
  const [linkFound, setLinkFound] = useState(false);
  const [selection, setSelection] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const {isShowing, toggle} = UsePopMenu();
  let searchX = '';
  let searchY = '';
  const [guess, setGuess] = useState({X:'', Y:''})
  const {welcomeShowing, toggleWelcome} = UseWelcome()
  const [modalDisplay, setModalDisplay] = useState();

  const mouseCoords = (e) => {
    searchX = e.pageX;
    searchY = e.pageY;
  }

  
  const imageFound = (doc) => {
    console.log(`${doc.data().name} found!`)
    if (doc.data().name === 'Pikachu') {
      setPikachuFound(true)
      console.log('found pika')
    } else if (doc.data().name === 'Link') {
      setLinkFound(true)
      console.log('found link')
    }
  }

  const getSelection = (e) => {
    setSelection(e.target.innerHTML)
    toggle()
  }

  const checkSelection = () => {
    checkForHit(guess)
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
        (`${doc.data().name}` === selection)) {
          console.log(`doc name: ${doc.data().name}`)
        imageFound(doc)
        }
  } 

  const startGame = () => {
    toggleWelcome()
    setGameStarted(!gameStarted)
  }

  return (
    <div className='container'>
    <div className="app">
    <WelcomeMenu 
          welcomeShowing={welcomeShowing}
          hide={toggleWelcome}
          startGame={startGame}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      <GameOver 
        gameOverShowing={gameOverShowing}
        toggleGameOver={toggleGameOver}
        linkFound={linkFound}
        pikachuFound={pikachuFound}
        />
      <Header linkFound={linkFound} pikachuFound={pikachuFound} gameStarted={gameStarted} setGameStarted={setGameStarted} />
      <div className='gameboard'>
      <img className='gameImage' src={mashUp} onClick={playerClick} alt='anime collage'></img>
      <PopMenu
        isShowing={isShowing}
        hide={toggle}
        modalDisplay={modalDisplay}
        linkFound={linkFound} pikachuFound={pikachuFound}
        getSelection={getSelection}
        />
        {selection ? checkSelection() : console.log('notyhing selected')}
    </div>
    </div>
    </div>
  );
}

export default App;
