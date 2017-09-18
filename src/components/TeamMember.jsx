import React, { Component } from 'react';
import '../stylesheets/TeamMember.css';
var classNames = require('classnames');

class TeamMember extends Component {
  render() {
    var imgClass = classNames({
      'team-member-image': true,
      'left': this.props.rightText,
      'right': !this.props.rightText
    });
    var textClass = classNames({
      'team-member-description': true,
      'left': !this.props.rightText,
      'right': this.props.rightText
    });
    var headerClass = classNames({
      'left-header': this.props.rightText,
      'right-header': !this.props.rightText
    });
    return(
      <div className="team-member">
        <img src={this.props.imageSrc} className={imgClass} alt="Team Member"/>
        <div className={textClass}>
          <h2 className={headerClass}>Nombre</h2>
          <h4 className={headerClass}>Encargo</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <hr className="team-member-divider" />
      </div>
    );
  }
}

export default TeamMember;
