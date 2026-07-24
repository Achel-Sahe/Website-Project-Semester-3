import React from 'react'

const Button = ({text, className}) => {
  return (
      <div>
          <button className={`button ${className}`}>{ text } </button>
    </div>
  )
}

export default Button