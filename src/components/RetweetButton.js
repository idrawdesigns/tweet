import React from 'react'
import PropTypes from 'prop-types'

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>
  } else {
    return null
  }
}
const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
)

RetweetButton.prototype = {
  count: PropTypes.number
}

export default RetweetButton
