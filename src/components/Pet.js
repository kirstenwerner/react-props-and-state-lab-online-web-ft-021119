import React from 'react'

class Pet extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: props.pet.name,
      age: props.pet.age,
      weight: props.pet.weight,
      gender: props.pet.gender,
      id: props.pet.id,
      isAdopted: props.pet.isAdopted,
      type: props.pet.type
    }
  }

  checkGender(gender) {
    if (gender === "male") {
      return '♂'
    } else if (gender === "female") {
      return '♀'
    }
  }

  handleClick = () => {
    this.props.onAdoptPet(this.state.id)
  }

  checkAdoption(isAdopted) {
    if (isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.checkGender(this.state.gender)}
            {this.state.name}
          </a>
          <div className="meta">
            <span className="date">{this.state.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.state.age}</p>
            <p>Weight: {this.state.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.checkAdoption(this.state.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
