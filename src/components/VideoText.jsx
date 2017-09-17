import React, { Component } from 'react';
import '../stylesheets/VideoText.css';

class VideoText extends Component {
  render() {
    return(
      <div className="video-description">
        {this.props.text}
      </div>
    );
  }
}

export default VideoText;
