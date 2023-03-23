import SearchBar from '../Shearch/SearchBar'
import style from './Nav.module.css'
import { Link } from 'react-router-dom';

function Nav(props) {

   return (
      <div className={style.div}>
         
            <SearchBar
               onSearch={props.onSearch}
            />

            <Link to={`/favorites`} >
               <button className={style.btnNav}>My Favorites</button>
            </Link>

            <Link to={`/about`} >
               <button className={style.btnNav}>About</button>
            </Link>


            <Link to={`/home`} >
               <button className={style.btnNav}>Home</button>
            </Link>

      </div>
   );
}
export default Nav;


// const getAllVideGames = async () => {

//    const DBvideogames = await Videogame.findAll({
//       attributes: ['name', 'image'],
//       include: [{ model: Genre, attributes: ['name'] }]
//    }) //bdd

//    let pages = 0;//cada pagina trae 20 games , itero el while 5 veces
//    let results = [...gameDB]; //sumo lo que tengo en la DB
//    let apiVideogames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
//    while (pages < 6) {
//       pages++;
//       //filtro solo la DATA que necesito enviar al FRONT
//       const apiGames = apiVideogames.data.results.map(game => {
//          return {
//             name: game.name,
//             image: game.background_image,
//             genres: game.genres?.map(el => el.name),
//             created: false,
//          }
//       });
//       results = [...results, ...apiGames]
//       apiVideogames = await axios.get(apiVideogames.data.next) //vuelvo a llamar a la API con next
//    }
//    return results
// }


// let pages = 0;
// let apiVideogames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
// while (pages < 6) {
//    pages++;
//    const apiGames = apiVideogames.data.results?.map(game => {
//       return {
//          name: game.name,
//          image: game.background_image,
//          genres: game.genres?.map(el => el.name),
//          created: false,
//       }
//    });
//    results = [...results, ...apiGames]
//    apiVideogames = await axios.get(apiVideogames.data.next);
// }
// return results;