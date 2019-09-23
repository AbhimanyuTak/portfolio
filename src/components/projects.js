import React, { Component } from 'react';
import pysoyLogo from '../images/pysoy.png'
// import '../App.css';


class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title is-4">Open Source Contribution</h1>

        <div className="box">
          <figure>
            <img src={pysoyLogo} alt="PySoy - A 3D Cloud Game Engine" />
          </figure>
          <br />
          <div className="content">
            <p>Implemented a procedural terrain generation engine.</p>
            <ul>
              <li>Introduced a pseudo random height-map generator using Simplex Noise.</li>
              <li>Added Tri-Planar texture mapping with improved blending techniques to avoid stretch- ing and overlapping. Also added custom shaders to override the default planar mapping
technique.</li>
              <li>Worked on LOD using quadtrees to improve the rendering performance of large terrains.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;


