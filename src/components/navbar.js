import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleActiveClass= this.toggleActiveClass.bind(this);
    this.state = {
        active: false,
    };
  }

  toggleActiveClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div className={"navbar-brand"}>
          <div className="navbar-item">
            {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
            Abhimanyu Tak
          </div>
      
          <a role="button" className={"navbar-burger burger " + (this.state.active ? 'is-active': null)} aria-label="menu" onClick={this.toggleActiveClass} aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className={"navbar-menu " + (this.state.active ? 'is-active': null)}>
          <div className={"navbar-end"}>
            {this.props.menuItems}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;

