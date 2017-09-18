import React, { Component } from 'react';
import '../stylesheets/Team.css';
import TeamMember from './TeamMember';
import TeamAPI from '../api';

class Team extends Component {
  render() {
    return(
      <div className="team-container">
        {
          TeamAPI.all().map(function(m) {
            return(
              <div key={m.name} className="team-member-container" >
                <TeamMember name={m.name} title={m.title} text={m.text} imageSrc={m.image} rightText={m.rightText}/>
                <hr className="team-member-divider" />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Team;
