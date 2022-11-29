import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.divCard}>
         <button className={style.butt} onClick={props.onClose}>X</button>
         <h2 className={style.h2Subtitle}>{props.name}</h2>
         <h2 className={style.h2Subtitle}>{props.species}</h2>
         <h2 className={style.h2Subtitle}>{props.gender}</h2>
         <img className={style.imag} src={props.image} alt="imagen" />
      </div>
   );
}
