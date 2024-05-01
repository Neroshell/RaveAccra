import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className="button-33" style={props.style}><span>{props.name}</span></button>
  )
}

export default Button
