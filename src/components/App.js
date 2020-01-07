import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  adoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map(p => {
        if (p.id === id && !p.isAdopted) 
          return {...p, isAdopted: true}
        return p;
      })
    })
  }

  getFilteredPets = () => {
    const txt = this.state.filters.type;
    if (txt !== "all"){
      fetch(`/api/pets?type=${txt}`).then(data => data.json()).then(pets => this.setState({pets}));
    }
    else {
      fetch("/api/pets").then(data => data.json()).then(pets => this.setState({pets}));
    }
  }

  changeFilterType = inputText => {
    this.setState({
      filters: {
        type: inputText
      }
    })
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.changeFilterType} onFindPetsClick = {this.getFilteredPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
