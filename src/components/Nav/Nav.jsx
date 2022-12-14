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
         <Link to='/home' className={style.home}>Home</Link>
         <Link to='/about' className={style.about}>About</Link>
         {/* </div> */}
      </div>
   );
}
export default Nav;