import React, { Component } from 'react'
import './App.css'

//components
import Avatar from './components/Avatar'
import Time from './components/Time'
import NameWithHandle from './components/NameWithHandle'
import Message from './components/Message'
import ReplyButton from './components/ReplyButton'
import RetweetButton from './components/RetweetButton'
import MoreOptionsutton from './components/MoreOptionsButton'
import LikeButton from './components/LikeButton'

let testTweet = {
  message: 'Something about cats.',
  gravatar: '12cb559adf3be3deedbd48d7cf9cdebb',
  author: {
    handle: 'pakanyizi',
    name: 'Developer'
  },
  likes: 2,
  retweets: 4,
  timestamp: '2016-07-30 21:24:37'
}

class App extends Component {
  render() {
    return (
      <div className="tweet">
        <Avatar hash={testTweet.gravatar} />

        <div className="content">
          <NameWithHandle
            handle={testTweet.author.handle}
            name={testTweet.author.name}
          />
          <Time time={testTweet.timestamp} />
          <Message message={testTweet.message} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton count={testTweet.retweets} />
            <LikeButton count={testTweet.likes} />
            <MoreOptionsutton />
          </div>
        </div>
      </div>
    )
  }
}

export default App
