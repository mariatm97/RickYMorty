import style from '../Card/Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react';
import { addCharacter, deleteCharacter } from '../../redux/actions';

export function Card(props) {
   // console.log(style);
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      }, []);
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.deleteCharacter(props.id);
      } else {
         setIsFav(true)
         const character = { id: props.id, species: props.species, name: props.name, image: props.image }
         props.addCharacter(character);
      }
   }

   return (
      <div className={style.divCard}>
         {isFav ? (<button className={style.btnFav} onClick={handleFavorite}>❤️</button>) : (<button className={style.btnFav} onClick={handleFavorite}>🤍</button>)}
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

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   };
}

export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: (character) => { dispatch(addCharacter(character)) },
      deleteCharacter: (id) => { dispatch(deleteCharacter(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);