import React, { Component } from 'react';
import '../stylesheets/VideoText.css';

class VideoText extends Component {
  render() {
    return(
      <div className="video-description" dangerouslySetInnerHTML={this.props.text}>
      </div>
    );
  }
}

export default VideoText;
