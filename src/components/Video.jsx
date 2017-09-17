import React, { Component } from 'react';
import VideoText from './VideoText';
import '../stylesheets/Video.css';

class Video extends Component {
  render() {
    return (
      <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vllGDvcf4qk?rel=0" frameBorder="0" allowFullScreen></iframe>
        <hr className="video-divider" />
        <VideoText text={this.props.text}/>
      </div>
    );
  }
}

export default Video;
