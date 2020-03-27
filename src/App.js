import React, { Component } from 'react';
import './App.css';

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
    .then(data => this.setState({monsters:data}))
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.monsters.map(monsterName => (
          <h1 key={monsterName.id}>{monsterName.name}</h1>
        ))}</h1>
      </div>
    );
  }
}

export default App;
