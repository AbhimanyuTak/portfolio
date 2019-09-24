import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <p>Copyright © 2019 All rights reserved</p>

        <p>Made with 
          <span class="icon is-medium has-text-danger">
            <i class="fa fa-heart"></i>
          </span>, React & Bulma by Abhimanyu</p>

      </div>
    )
  }
}

export default Footer;


