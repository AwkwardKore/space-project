import React, { Component } from 'react';
import Video from './Video';

class Reactions extends Component {
  text() {
    return {__html: "REACTIONS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
  }
  render() {
    return (
      <div>
        <Video videoUrl="https://www.youtube.com/embed/PCp2iXA1uLE" videoDescription={this.text()}/>
      </div>
    );
  }
}

export default Reactions;
