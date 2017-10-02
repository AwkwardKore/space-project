import React, { Component } from 'react';
import Video from './Video';

class Home extends Component {
  text() {
    return {__html: "VR Space es un proyecto de concientización ecologica a un nivel más arriba de lo normal, mucho más arriba, en el espacio exterior. El proposito del desrrollo de este programa es dejar ver a la gente de una manera interactiva como hemos poblado el espacio con basura como satelites dejados a flotar o partes de naves que quedaron flotando.<br/><br/>Gracias a la realidad virtual hemos logrado ofrecer al usuario una experiencia realista y precisa de como es viajar en el espacio y simular la recolección de basura basado en un proyecto ya existente. Esperamos la experiencia del usuario sea entretenida, de alto aprendizaje y principalmente realista para notar lo que pasa con el espacio que nos rodea."}
  }
  render() {
    return (
      <div>
        <Video videoUrl="https://www.youtube.com/embed/mxhxL1LzKww" videoDescription={this.text()}/>
      </div>
    );
  }
}

export default Home;
