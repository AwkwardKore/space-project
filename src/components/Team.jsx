import React, { Component } from 'react';
import '../stylesheets/Team.css';
import TeamMember from './TeamMember';

class Team extends Component {
  render() {
    return(
      <div className="team-container">
        <TeamMember rightText={true}/>
        <TeamMember rightText={false}/>
      </div>
    );
  }
}

export default Team;
