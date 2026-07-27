import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
const Button = ({href, text}) => {
  return (
      <div>
          <Link to={href} className="right-button filter-chip">
          {text} <ArrowRight size={16} className="arrow" />
        </Link>
    </div>
  )
}

export default Button