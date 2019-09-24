import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title is-4">Contact Me</h1>
        <br />
        <br />
        <div class="columns is-centered has-text-centered is-mobile">
          <div class="column">
            <div class="icon is-medium">
              <a href="mailto:webmaster@example.com">
                <i class="fa fa-2x fa-envelope"></i>
              </a>
            </div>
          </div>
          
          <div class="column">
            <span class="icon is-medium">
              <a href="https://www.linkedin.com/in/abhimanyu-tak-8b713363/">
                <i class="fa fa-2x fa-linkedin"></i>
              </a>
            </span>
          </div>

          <div class="column">
            <span class="icon is-medium">
              <a href="https://github.com/AbhimanyuTak">
                <i class="fa fa-2x fa-github"></i>
              </a>
            </span>
          </div>

          <div class="column">
            <span class="icon is-medium">
              <a href="https://twitter.com/AbhimanyuTak">
                <i class="fa fa-2x fa-twitter"></i>
              </a>
            </span>
          </div>

          <div class="column">
            <span class="icon is-medium">
              <a href="https://angel.co/abhimanyutak">
                <i class="fa fa-2x fa-angellist"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;


