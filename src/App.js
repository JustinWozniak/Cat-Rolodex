import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      cats: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(data => this.setState({ cats: data }))
  }
  render() {
    const {cats, searchField} = this.state
    const filteredCats = cats.filter(cats => 
      cats.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <input type="search" placeholder="Search Cat Names" onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
