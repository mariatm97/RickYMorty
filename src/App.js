import './App.css'
import Cards from './components/Cards/Cards'
// import characters from './data.js'
import Nav from './components/Nav/Nav'
import React, { useState, useEffect } from 'react'
import { About } from './components/About/About'
import { Detail } from './components/Detail/Detail'
import { Route, useLocation } from 'react-router-dom';
import { Form } from './components/Forms/Form'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

function App() {

  const [characters, setCharacters] = useState([])
  const location = useLocation()

  // const history = useHistory();
  // const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'mtmd027@gmail.com';
  const password = 'Soyhenry2022!';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      // navigate('/home');
      // history.push('/home');
    }
  }

  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access]);
  //   !access && history.push('/');
  // }, [access, history]);

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

  function handleSubmit(userData) {
    login(userData)
  }

  return (
    <div className='App' style={{ padding: '24% 3%' }}>

      <Route path='/'>
        {location.pathname === '/' ? null : <Nav
          onSearch={onSearch} />}
      </Route>

      <Route exact path='/'>
        <Form
          login={login}
          handleSubmit={handleSubmit}
        />
      </Route>

      <Route path='/home'>
        <div>
          <Cards
            characters={characters}
            onClose={onClose}
          />
        </div>
      </Route>

      <Route path='/about'>
        <About />
      </Route>

      {/* <Route path='*'> <Error /> </Route> */}

      <Route path='/detail/:detailId' component={Detail}></Route>
    </div>
  )
}

export default App
