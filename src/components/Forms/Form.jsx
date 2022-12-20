import React, { useState, useEffect } from 'react'
import style from './Form.module.css'
import { validate } from './validation';
import { useNavigate } from 'react-router-dom';

export const Form = (props) => {

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  })

  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);
  const username = 'mtmd027@gmail.com';
  const password = 'Soyhenry2022!';

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
    <div className={style.divForm}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username' className={style.labelForm}>Name: </label>
        <input name='username'
          placeholder='Escribe tu nombre de usuario...'
          type='text'
          value={userData.username}
          onChange={handleInputChange}
          className={errors.username && style.warning}>
        </input>
        {errors.username && <p className={style.danger}>{errors.username}</p>}
        <br></br>

        <label htmlFor='password' className={style.labelForm}>Password: </label>
        <input name='password'
          placeholder='Escribe tu password...'
          type='password'
          value={userData.password}
          onChange={handleInputChange}
          className={errors.password && style.warning}>
        </input>
        {errors.password && <p className={style.danger}>{errors.password}</p>}

        <button type='submit' className={style.btnform}>Send</button>
      </form>
    </div>
  )
}
