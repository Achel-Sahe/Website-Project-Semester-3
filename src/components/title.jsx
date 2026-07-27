  import React from 'react'

const Title = ({className, text, textl}) => {
  return (
      <div>
      <h1 className={`title ${className} qip-title`}>{text} <span><i>{ textl}</i></span></h1>
    </div>
  )
}

export default Title