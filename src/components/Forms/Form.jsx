import React, { useState, useEffect } from 'react'
import style from './Form.module.css'
import { validate } from './validation';
import { useNavigate, Link } from 'react-router-dom';

export const Form = (props) => {

  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '12345678p';

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const handleInputChange = (event) => {
    const prop = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [prop]: value })
    setErrors(validate({ ...userData, [prop]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.marg} /*style={{ float: 'right' }}*/>
        <div className={style.tittleLand}>
          {/* <h1>Welcome to the world of</h1> */}
          <img src={require('../imagenes/rick_and_morty_logo.png')} alt="rick and morty" />
          {/* <h2>Welcome!</h2>
          <h4>Log in to access all features</h4> */}
        </div>
        <img src={require('../imagenes/rick-and-morty-fond.png')} alt="rick and morty" />

        <div className={style.divForm}>
          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor='username' className={style.labelForm}>Username: </label>
              <input name='username'
                placeholder='Enter your username...'
                type='text'
                value={userData.username}
                onChange={handleInputChange}
                className={errors.username && style.error}
                autoComplete='off'>
              </input>
              {/* {errors.username && <p className={style.danger}>{errors.username}</p>} */}
              {/* <br></br> */}
            </div>

            <div>
              <label htmlFor='password' className={style.labelForm}>Password: </label>
              <input name='password'
                placeholder='Enter your password...'
                type='password'
                value={userData.password}
                onChange={handleInputChange}
                className={errors.password && style.error}
                autoComplete='off'>
              </input>
              {/* {errors.password && <p className={style.danger}>{errors.password}</p>} */}
            </div>

            <div>
              <button type='submit' className={style.btnform}>Login</button>
            </div>

            <Link to={`/home`} >
              <button className={style.btnGuest}>Continue as a guest</button>
            </Link>

          </form>

        </div>
        <div className={errors.username || errors.password ? style.danger : null}>

          <p>{errors.username}</p>
          <p>{errors.password}</p>

        </div>
      </div>
    </div>
  )
}
