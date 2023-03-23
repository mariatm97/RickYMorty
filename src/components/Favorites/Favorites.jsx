import React from 'react'
import { connect } from "react-redux"
import style from './Favorites.module.css'
import { Link } from "react-router-dom";

export function Favorites({ myFavorites }) {
    return (
        <div>
            <h1 className={style.h1Fav}>¡My Favorites Characters!</h1>
            <div className={style.divFav}>
                {myFavorites?.map((character) =>
                (<div className={style.favoriteCard} key={character.id}>
                    <img src={character.image} alt="" />
                    <Link style={{ textDecoration: 'none' }} to={`/detail/${character.id}`} >
                        <h1 className={style.favName}>{character.name}</h1>
                    </Link>
                    {/* name={character.name}
                    gender={character.gender}
                    species={character.species}
                    image={character.image}
                    origin={character.origin} */}
                </div>)
                )};
            </div>
        </div>

    )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites);