import React from 'react'

const Avatar = ({ hash }) => {
  var url = `https://www.gravatar.com/avatar/${hash}`

  return <img src={url} className="avatar" alt="avatar" />
}

export default Avatar
