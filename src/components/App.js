import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

CODE TO BREAK

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

  onChangeType = type => {
    this.setState({
      filters: {
        type: type
    }})
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type;
    if (type==='all'){
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(this.addPetsToState)
    }
    else {
      fetch(`/api/pets?type=${type}`)
        .then(resp => resp.json())
        .then(this.addPetsToState)
    }
  }

  addPetsToState = pets => {
    this.setState({
      pets: pets
    })
  }

  adoptPet = e => {
    const petId = `${e.target.parentElement.parentElement.id}`
    let newPets =  this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p;
    });
    this.setState({
      pets: newPets
    })
  }
  
  render() {
    JSON.stringify(this.state.pets) === JSON.stringify([]) ? this.onFindPetsClick() : console.log();
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={t => this.onChangeType(t)} findPets={() => this.onFindPetsClick()}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={e => this.adoptPet(e)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
