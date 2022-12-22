import React from 'react'
import Card from "../Card/Card";
import { connect } from "react-redux"
import style from './Favorites.module.css'

export function Favorites({ myFavorites }) {
    return (
        <div>
            {/* <h1 className={style.h1}>My Favorites</h1> */}
            <div className={style.div}>
                {myFavorites.map((character) =>
                (<Card
                    id={character.id}
                    name={character.name}
                    gender={character.gender}
                    species={character.species}
                    image={character.image}
                    origin={character.origin}
                />)
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