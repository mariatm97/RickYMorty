import SearchBar from '../Shearch/SearchBar'
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

function Nav(props) {

   return (
      <div className={style.div}>
         <SearchBar
            onSearch={props.onSearch}
         />
         {/* <div className={style.divlink}> */}
         <button className={style.home}><Link to='/home' >Home</Link></button>
         <button className={style.about}><Link to='/about' >About</Link></button>
         {/* </div> */}
      </div>
   );
}
export default Nav;