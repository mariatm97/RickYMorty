import style from './SearchBar.module.css'
export default function SearchBar(props) {
  return (
    <div>
      <input type='search' className={style.inp}/>
      {/* le pasamos como cb props.onSearch */}
      <button onClick={props.onSearch}>Agregar</button> 
    </div>
  );
}
