import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets(pets) {
    let x = pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
    return x
  }

  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>
  }
}

export default PetBrowser
