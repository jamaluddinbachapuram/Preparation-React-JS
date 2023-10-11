import React from 'react'

const UserCard = ({name, age}) => {
  return (
    <div>
      <div>
        <h1>Name: {name}</h1>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}

export default UserCard
