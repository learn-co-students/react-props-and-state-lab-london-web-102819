import React from 'react'

class Filters extends React.Component {

  state = {
    type: "all"
  }


  handleChange = e => {
    this.setState({
      type: e.target.value
    })
    this.props.onChangeType(e.target.value)
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange = {e => this.handleChange(e)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick = {e => this.props.onFindPetsClick(this.state.type)}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
