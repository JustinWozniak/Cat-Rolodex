import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'

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
        <SearchBox   placeholder="Search Cat Names" handleChange={e => this.setState({ searchField: e.target.value })}/>
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
