import React, { Component } from 'react';
import Video from './Video';

class Interviews extends Component {
  text() {
    return {__html: "Aquí estará la entrevista hecha a un profesional en el tema una vez que esté hecha; se van a incluir datos del experto, así como una foto de él."}
  }
  render() {
    return (
      <div>
        <Video videoUrl="https://www.youtube.com/embed/wPXCk85wMSQ" videoDescription={this.text()}/>
      </div>
    );
  }
}

export default Interviews;
