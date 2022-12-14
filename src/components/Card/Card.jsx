import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   console.log(style);
   return (
      <div className={style.divCard}>
         <button className={style.btn} onClick={props.onClose} id={props.id}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={style.nm}>{props.name}</h2>
         </Link>
         <h2 className={style.others}>{props.species}</h2>
         <h2 className={style.others}>{props.gender}</h2>
         <img className={style.imag} src={props.image} alt="imagen" />
      </div>
   );
}
