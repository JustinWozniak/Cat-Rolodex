import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      cats: []

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(data => this.setState({ cats: data }))
  }
  render() {
    return (
      <div className="App">
        <CardList cats={this.state.cats} />
      </div>
    );
  }
}

export default App;
