import React, { Component } from 'react';
import VideoText from './VideoText';
import '../stylesheets/Video.css';

class Video extends Component {
  render() {
    return (
      <div className="video-container">
        <iframe width="560" height="315" src={this.props.videoUrl} frameBorder="0" allowFullScreen></iframe>
        <hr className="video-divider" />
        <VideoText text={this.props.videoDescription}/>
      </div>
    );
  }
}

export default Video;
