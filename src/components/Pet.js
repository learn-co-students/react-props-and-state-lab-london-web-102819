import React from 'react'

class Pet extends React.Component {

  genderConvert = gender => {
    if (gender === 'male') return '♂'
    else return '♀'
  }

  adoptedButtonRender = isAdopted => {
    if (isAdopted) return <button className="ui disabled button" >Already adopted</button>
    else return <button className="ui primary button" onClick={e => this.props.onAdoptPet(e)}>Adopt pet</button>
  }

  render() {
    const {gender, type, age, weight, name, isAdopted, id} = this.props.details
    return (
      <div className="card" id={id}>
        <div className="content">
          <a className="header">
            {this.genderConvert(gender)}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}yrs</p>
            <p>Weight: {weight}kg</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptedButtonRender(isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
