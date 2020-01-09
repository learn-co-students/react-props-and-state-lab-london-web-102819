import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((p, index) => {
          return <Pet key={index} details={p} findPets={() => this.onFindPetsClick()} onAdoptPet={e => this.props.onAdoptPet(e)}/>
        })}
      </div>
      )}
}

export default PetBrowser
