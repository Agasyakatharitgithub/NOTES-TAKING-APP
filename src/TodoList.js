import React from 'react'
import './Notes.css'
function TodoList(props) {
  return (
    <div 
    
     className='lst'>
        {props.item}
     
        </div>
  )
}

export default TodoList