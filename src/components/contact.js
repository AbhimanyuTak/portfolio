import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title is-4">Contact Me</h1>
        <br />
        <br />
        <div class="columns is-centered has-text-centered">
          <div class="column">
            <div class="icon is-medium">
              <i class="fa fa-2x fa-envelope"></i>
            </div>
          </div>
          
          <div class="column">
            <span class="icon is-medium">
              <i class="fa fa-2x fa-linkedin"></i>
            </span>
          </div>

          <div class="column">
            <span class="icon is-medium">
              <i class="fa fa-2x fa-github"></i>
            </span>
          </div>

          <div class="column">
            <span class="icon is-medium">
              <i class="fa fa-2x fa-angellist"></i>
            </span>
          </div>

          <div class="column">
            <span class="icon is-medium">
              <i class="fa fa-2x fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;


