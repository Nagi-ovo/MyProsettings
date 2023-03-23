import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, playerID, team } = this.props.player;
    const { dpi, sensitivity } = this.props.player.settings;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`player ${playerID}`}
          src={`./img/${id}.jpg`}
          style={{ width: "300px", height: "300px" }}
          // src={`https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/${playerID.toLowerCase()}.png?dpr=1|f=auto|fit=contain|height=240|q=99|sharpen=1|width=240`}
          // src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{playerID}</h2>
        <p>{team}</p>
        <p>{`${dpi}*${sensitivity}=${(dpi * sensitivity).toFixed(0)}`}</p>
      </div>
    );
  }
}

export default Card;
