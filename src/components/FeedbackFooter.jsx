import React from 'react'
import {
  Footer,
  SocialMedia
} from '../components/Components.styled'

const FeedbackFooter = () => {
  return (
    <Footer>
      <SocialMedia>
      <a href="https://www.linkedin.com/">
        <img src='../assets/linkedin_icon.png' alt='LinkedIn' width="13" height="13"/>
      </a>
      <a href='https://www.twitter.com/'>
        <img src='../assets/twitter_icon.png' alt='Twitter' width="16" height="13"/>
      </a>
      <a href='https://www.facebook.com/'>
        <img src='../assets/facebook_icon.png' alt='Facebook' width="9" height="16"/>
      </a>
      <a href='https://www.pinterest.com/'>
        <img src='../assets/pinterest_icon.png' alt='Pinterest' width="12" height="15"/>
      </a>
    </SocialMedia>
  </Footer>
  )
}

export default FeedbackFooter