import React from 'react'
import propTypes from 'prop-types'

const NameWithHandle = ({ name, handle }) => {
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  )
}

NameWithHandle.propTypes = {
  author: propTypes.shape({
    name: propTypes.string.isRequired,
    handle: propTypes.string.isRequired
  })
}

export default NameWithHandle
