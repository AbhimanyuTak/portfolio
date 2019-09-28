import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title is-4">Contact Me</h1>
        <br />
        <br />
        <div className="columns is-centered has-text-centered is-mobile">
          <div className="column">
            <div className="icon is-medium">
              <a href="mailto:manyu.abhi17@gmail.com">
                <i className="fa fa-2x fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="column">
            <span className="icon is-medium">
              <a href="https://www.linkedin.com/in/abhimanyu-tak-8b713363/">
                <i className="fa fa-2x fa-linkedin"></i>
              </a>
            </span>
          </div>

          <div className="column">
            <span className="icon is-medium">
              <a href="https://github.com/AbhimanyuTak">
                <i className="fa fa-2x fa-github"></i>
              </a>
            </span>
          </div>

          <div className="column">
            <span className="icon is-medium">
              <a href="https://twitter.com/AbhimanyuTak">
                <i className="fa fa-2x fa-twitter"></i>
              </a>
            </span>
          </div>

          <div className="column">
            <span className="icon is-medium">
              <a href="https://angel.co/abhimanyutak">
                <i className="fa fa-2x fa-angellist"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;


