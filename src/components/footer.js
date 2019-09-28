import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <p>© 2019 Abhimanyu Tak</p>

        <p>Made with 
          <span className="icon is-medium has-text-danger">
            <i className="fa fa-heart"></i>
          </span>, React & Bulma
        </p>

      </div>
    )
  }
}

export default Footer;


