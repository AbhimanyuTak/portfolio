import React, { Component } from 'react';
import rentomojoLogo from '../images/rentomojo.png';
import slicepayLogo from '../images/slicepay.png';
import arzoooLogo from '../images/arzooo.png';
// import '../App.css';


class Experience extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title is-4">Experience</h1>
        <div className="columns"> 

          <div className="column">
            <div className="box has-text-centered">
              <figure className="image is-64x64 is-inline-block">
                <img src={rentomojoLogo} alt="" />
              </figure>

              <div className="content">
                <p>
                  <strong>RentoMojo</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="box has-text-centered">
              <figure className="image is-64x64 is-inline-block">
                <img className="is-rounded" src={slicepayLogo} alt="" />
              </figure>

              <div className="content">
                <p>
                  <strong>SlicePay</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="box has-text-centered">
              <figure className="image is-64x64 is-inline-block">
                <img className="is-rounded" src={arzoooLogo} alt="" />
              </figure>

              <div className="content">
                <p>
                  <strong>HomeYantra/ Arzoo</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;


