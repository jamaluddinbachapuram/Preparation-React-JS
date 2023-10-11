import React from 'react'

const TodoList = ({todoItems}) => {
  return (
    <ul>
      {todoItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default TodoList
