import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.divCards}>
      {characters.map((chart, i) =>
        <Card
          id={chart.id}
          name={chart.name}
          species={chart.species}
          gender={chart.gender}
          image={chart.image}
          onClose={props.onClose}
          key={i}
        />
      )}
    </div>
  )
}
