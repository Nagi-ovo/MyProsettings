import { Component, component } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("./db.json")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { players: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    //{name:"Leanne"},{name:"Yihua"}

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    //解构，增加可读性
    // console.log("render from APPJS");
    const { players, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredPlayers = players.filter((player) => {
      return player.playerID.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Prosettings</h1>

        <SearchBox
          className="players-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search players"
        />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}
export default App;
