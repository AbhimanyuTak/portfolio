import React, { Component } from 'react';


class Skills extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns">
          <div className="column">
            <p>Backend - Node JS</p>
          </div>
          <div className="column">
            <progress className="progress is-small" value="85" max="100">85%</progress>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p>Frontend - ReactJS, AngularJS</p>
          </div>
          <div className="column">
            <progress className="progress is-small" value="75" max="100">75%</progress>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p>Database - Postgre, MySQL, Redis</p>
          </div>
          <div className="column">
            <progress className="progress is-small" value="70" max="100">70%</progress>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p>Infrastructure - AWS(EC2, Lambda, SQS, CloudWatch), Docker</p>
          </div>
          <div className="column">
            <progress className="progress is-small" value="70" max="100">70%</progress>
          </div>
        </div>

      </div>
    )
  }
}

export default Skills;


