import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from '../Detail/Detail.module.css'
import { Link } from 'react-router-dom'

export const Detail = () => {

  let { detailId } = useParams();

  const [character, setCharacter] = useState('')
  console.log(character)
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((err) => {
        window.alert('No hay personajes con ese ID');
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.divDet}>
      <h1 className={style.hDet}>{character.name}</h1>
      <img className={style.imgDet} src={character.image} alt="imagen" />
      <p className={style.ps}>Status: {character.status}</p>
      <p className={style.ps}>Specie: {character.species}</p>
      <p className={style.ps}>Gender: {character.gender}</p>
      <p className={style.ps}>Origin: {character.origin?.name}</p>
      <Link to={'/home'} >
        <button className={style.btn}>Home</button>
      </Link >
    </div >

  )
}




