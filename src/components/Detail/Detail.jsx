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
      <div>
        <h1 className={style.hDet}>{character.name}</h1>
        <img className={style.imgDet} src={character.image} alt="imagen" />
      </div>
      <div className={style.textinf}>
        <div className={style.dettext}><h3 className={style.hinf}>Status: </h3><p className={style.ps}>{character.status}</p></div>
        <div className={style.dettext}><h3 className={style.hinf}>Specie: </h3><p className={style.ps}>{character.species}</p></div>
        <div className={style.dettext}><h3 className={style.hinf}>Gender: </h3><p className={style.ps}>{character.gender}</p></div>
        <div className={style.dettext}><h3 className={style.hinf}>Origin: </h3><p className={style.ps}>{character.origin?.name}</p></div >
      </div>
      <div className={style.contbtn}>
        <Link to={'/home'} >
          <button className={style.btn}>Return</button>
        </Link >
      </div>
    </div >

  )
}




