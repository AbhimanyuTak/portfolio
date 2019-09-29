import React, { Component } from 'react';
import displayPicture from '../../public/mine.jpg'
// import '../App.css';


class About extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-one-quarter has-text-centered">
              <figure className="is-inline-block">
                <img className="mine-image" src={displayPicture} alt="Abhimanyu Tak" />
              </figure>
            </div>

            <div className="column is-three-quarters">
              <h1 className="title">
                ABHIMANYU TAK 
              </h1>
              <h2 className="subtitle">
                Full Stack Developer
              </h2>

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
    )
  }
}

export default About;


