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

handleChange = (e) =>  {
  this.setState({ searchField: e.target.value })
}

  render() {
    const {cats, searchField} = this.state
    const filteredCats = cats.filter(cats => 
      cats.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Justins Cat Rolodex</h1>
        <SearchBox   placeholder="Search Cat Names" handleChange={this.handleChange}/>
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
