import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(data => this.setState({ monsters: data }))
  }
  render() {
    return (
      <div className="App">
        <CardList> 
        {this.state.monsters.map(monsterName => (
          <h1 key={monsterName.id}>{monsterName.name}</h1>
        ))}</CardList>

      </div>
    );
  }
}

export default App;
