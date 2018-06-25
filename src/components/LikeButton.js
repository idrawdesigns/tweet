import React from 'react'
import propTypes from 'prop-types'

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>
  } else {
    return null
  }
}

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
)

LikeButton.propTypes = {
  count: propTypes.number
}

export default LikeButton
