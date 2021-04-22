import React from 'react';
import checkSign from '../../assets/postPage/approval-symbol-in-badge.png'
import downSign from '../../assets/postPage/down-chevron.png'
import heartSign from '../../assets/postPage/heart.png'
import commentSign from '../../assets/postPage/speech-bubble.png'
import retweetSign from '../../assets/postPage/retweet.png'
import uploadSign from '../../assets/postPage/upload.png'

const Post = (props) => {
  return (
    <div className="wrapper__post">
      <div className="author">
        <div className="author-avatar"><img src={props.author.photo} alt="avatar" /></div>
        <div className="author-info">
          <div className="author-name">{props.author.name}</div>
          <div className="author-icon"><img src={checkSign} alt="check" /></div>
          <div className="author-nickname">{props.author.nickname}</div>
          <div className="date">{props.date}</div>
          <div className="info-option"><img src={downSign} alt="arrow-down" /></div>
        </div>
      </div>
      <div className="content">
        <div className="content-text">{props.content}</div>
        <div className="content-image"><img src={props.image} alt="image" /></div>
      </div>
      <div className="social">
        <div className="social-comment"><img src={commentSign} alt="comment" /> {props.comment}</div>
        <div className="social-retweet"><img src={retweetSign} alt="retweet" /> {props.retweet}</div>
        <div className="social-like"><img src={heartSign} alt="heart" /> {props.like}</div>
        <div className="social-share"><img src={uploadSign} alt="upload" /></div>
      </div>
    </div>
  )
}

export default Post;