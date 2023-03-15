import "./card-list.styles.css";
import Card from "../card/card-component";

const CardList = ({ players }) => (
  <div className="card-list">
    {players.map((player) => {
      return <Card player={player} key={player.id} />;
    })}
  </div>
);

export default CardList;
