import React from 'react'
import style from '../About/About.module.css'

export const About = () => {
  return (
    <div>
      <div className={style.divAb}>
        <h1 className={style.hAb}>Maria Teresa Morón</h1>
        <img className={style.imgAb} src={require('../imagenes/Foto-MTMD.jpg')} alt="Foto" />
        <p className={style.pAb}>Status: Alive</p>
        <p className={style.pAb}>Specie: Human</p>
        <p className={style.pAb}>Gender: Female</p>
        <p className={style.pAb}>Origin: Earth (C-137)</p>
        <p className={style.pAb}>GitHub: mariatm97</p>
        <p className={style.pAb}>LinkedIn: Maria Teresa Morón</p>
        <p className={style.pAb}>Email: mtmd027@gmail.com</p>
      </div>

      {/* <div className={style.divAb}>
        explicación acerca de la aplicación!
      </div> */}
    </div>
  )
}
