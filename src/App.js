import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import React, { useState } from 'react'
import { About } from './components/About/About'
import { Detail } from './components/Detail/Detail'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Form } from './components/Forms/Form'
import Favorites from './components/Favorites/Favorites'

function App() {

  const [characters, setCharacters] = useState([])
  const location = useLocation()

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          for (let element of characters) {
            if (data.id === element.id)
              return window.alert('El personaje ya ha sido agregado');
          }
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }


  const onClose = event => {
    setCharacters(
      characters.filter(char => char.id !== Number(event.target.id))
    );
  };

  return (
    <div className='App' style={{ padding: '24% 3%' }}>

      {location.pathname === '/' ? <Form /> : null}
      {location.pathname === '/' ? null : <Nav onSearch={onSearch} />}

      <Routes>

        <Route exact path='/home' element={<div>
          <Cards characters={characters} onClose={onClose} /></div>} />

        <Route exact path='/about' element={<About />} />

        <Route exact path='/detail/:detailId' element={<Detail />} />

        <Route exact path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
