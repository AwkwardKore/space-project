import React, { Component } from 'react';
import Video from './Video';

class Reactions extends Component {
  text() {
    return {__html: "En esta sección de la página web se incluyen los videos de las reacciones de la gente pasando la expo LMAD."}
  }
  render() {
    return (
      <div>
        <Video videoUrl="https://www.youtube.com/embed/KaOC9danxNo" videoDescription={this.text()}/>
      </div>
    );
  }
}

export default Reactions;
