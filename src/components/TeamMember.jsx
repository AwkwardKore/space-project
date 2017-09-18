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
        <img src={require("../images/"+this.props.imageSrc)} className={imgClass} alt="Team Member"/>
        <div className={textClass}>
          <h2 className={headerClass}>{this.props.name}</h2>
          <h4 className={headerClass}>{this.props.title}</h4>
          <p dangerouslySetInnerHTML={this.props.text}></p>
        </div>
      </div>
    );
  }
}

export default TeamMember;
