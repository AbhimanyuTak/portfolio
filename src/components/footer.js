import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <p>© 2019 Abhimanyu Tak</p>

        <p>Made with 
          <span class="icon is-medium has-text-danger">
            <i class="fa fa-heart"></i>
          </span>, React & Bulma
        </p>

      </div>
    )
  }
}

export default Footer;


