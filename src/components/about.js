import React, { Component } from 'react';
import displayPicture from '../../public/mine.jpg'
// import '../App.css';


class About extends Component {
  render() {
    return (
      <section className="section" >
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Who am I?
            </h1>
            <div className="columns is-vcentered">
              <div className="column is-one-quarter">
                <figure className="image is-1by1">
                  <img className="is-rounded" src={displayPicture} alt="Abhimanyu Tak" />
                </figure>
              </div>
              <div className="column is-three-quarter">
                <p>
                  Hi, I am Abhimanyu. I build softwares for a living and is curious about life in general.
                </p>
                <br/>
                <p>
                  I fuel my creativity with a pinch of caffeine and some rock n roll music. When not working I would be chilling around local cafés or trying to find motivation to learn that guitar solo I have been dreaming about.
                </p>
                <br/>
                <p>
                  Wanna go for a music gig , jam over a campfire or a bike tour? Hit me up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;


