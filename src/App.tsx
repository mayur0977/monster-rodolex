import React, { Component } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list";
import { CardListDetail } from "./components/card-list/card-list.model";
import SearchBox from "./components/search-box/seach-box";

class App extends Component<
  any,
  { searchField: string; monsters: CardListDetail.RootObject[] }
> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => this.setState({ monsters: response }));
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeHolder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
