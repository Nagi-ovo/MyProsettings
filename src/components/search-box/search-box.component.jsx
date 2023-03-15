import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />;
  /* {filteredPlayers.map((player) => {
          return (
            <div key={player.id}>
              <h1>{player.name}</h1>
            </div>
          );
        })} */
};
export default SearchBox;
