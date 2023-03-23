import React from 'react'
import style from '../About/About.module.css'

export const About = () => {
  return (
    <div>
      <div className={style.divAb}>
        <h1 className={style.h1Ab}>Teresa Morón</h1>
        <img className={style.imgAb} src={require('../imagenes/avatar1.png')} alt="Foto" />
        <div className={style.abouText}>
          <p><b>Hi! My name is Teresa,</b> I created a page so that Rick and Morty fans can find all the characters in this animated series.You can search for them by their ID or discover random characters by clicking the 'Random Card' button; You can also access more detailed information about a character by clicking on their name.</p>
          <p>I hope you find it usefull!</p>
        </div>
      </div>
      <div className={style.aboutinf}>
        <div className={style.aboutcontext}> <h3 className={style.h3Ab}>Status: </h3> <p className={style.pAb}>Alive</p></div>
        <div className={style.aboutcontext}><h3 className={style.h3Ab}>Specie: </h3> <p className={style.pAb}>Human</p></div>
        <div className={style.aboutcontext}><h3 className={style.h3Ab}>Gender: </h3> <p className={style.pAb}>Female</p></div>
        <div className={style.aboutcontext}><h3 className={style.h3Ab}>Origin: </h3> <p className={style.pAb}>Earth (C-137)</p></div >
        <div className={style.aboutcontext}><h3 className={style.h3Ab}>GitHub: </h3> <p className={style.pAb}>mariatm97</p></div >
        <div className={style.aboutcontext}><h3 className={style.h3Ab}>LinkedIn: </h3> <p className={style.pAb}>mariatm97</p></div >
        {/* <div className={style.aboutcontext}><h3 className={style.h3Ab}>Email: </h3> <p className={style.pAb}>mtmd027@gmail.com</p></div > */}
      </div>


      {/* <div className={style.divAb}>
        explicación acerca de la aplicación!
      </div> */}
    </div>
  )
}
