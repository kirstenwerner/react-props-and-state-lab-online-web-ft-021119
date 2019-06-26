import React from 'react'

const Pet = (props) => {

  function checkGender(gender) {
    if (gender === "male") {
      return '♂'
    } else if (gender === "female") {
      return '♀'
    }
  }

  const handleClick = () => {
    props.onAdoptPet(props.pet.id)
  }

  function checkAdoption(isAdopted) {
    if (isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={handleClick}>Adopt pet</button>
    }
  }


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {checkGender(props.pet.gender)}
            {props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {props.pet.age}</p>
            <p>Weight: {props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {checkAdoption(props.pet.isAdopted)}
        </div>
      </div>
    )

}

export default Pet
