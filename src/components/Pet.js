import React from 'react'

class Pet extends React.Component {
  displayAdoptButton = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    }
    return <button onClick = {() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
  }

  render() {
    const {gender, name, age, weight, type} = this.props.pet;
    return (
      <div className="card">
        <div className="content">
          <a className="header" href="#">
           {gender !== "male" ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.displayAdoptButton()}
        </div>
      </div>
    )
  }
}

export default Pet
