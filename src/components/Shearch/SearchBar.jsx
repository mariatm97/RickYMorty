import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar(props) {

  const [character, setCharacter] = useState('')

  const handleInputChange = (event) => {
    setCharacter(event.target.value)
  }
  const randomId = Math.floor(Math.random() * 826);

  return (
    <div className={style.div}>
      <button className={style.boton} onClick={() => props.onSearch(randomId)}>RandomCard</button>
      <input type='search' className={style.inp} onChange={handleInputChange} />
      {/* le pasamos como cb props.onSearch */}
      <button className={style.boton} onClick={() => props.onSearch(character)}>Agregar</button>

    </div>
  );
}
