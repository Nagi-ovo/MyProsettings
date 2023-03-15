import "./card.styles.css";

const Card = ({
  player: {
    id,
    playerID,
    team,
    settings: { dpi, sensitivity },
  },
}) => {
  return (
    <div className="card-container">
      <img
        alt={`player ${playerID}`}
        src={`./img/${id}.jpg`}
        style={{ width: "300px", height: "300px" }}
      />
      <h2>{playerID}</h2>
      <p>{team}</p>
      <p>{`${dpi}*${sensitivity}=${(dpi * sensitivity).toFixed(0)}`}</p>
    </div>
  );
};

export default Card;
