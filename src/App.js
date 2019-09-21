import React, { Component } from 'react';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Experience from './components/experience.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import Skills from './components/skills.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef()
    this.skillsRef = React.createRef()
    this.experienceRef = React.createRef()
    this.projectsRef = React.createRef()
    this.contactRef = React.createRef()
  }

  scrollToSection(reference) {
    this[reference].current.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  render() {
    const menuItems = [
      <a className={"navbar-item"} key={0} onClick={this.scrollToSection.bind(this, "aboutRef")}>About</a>,
      <a className={"navbar-item"} key={1} onClick={this.scrollToSection.bind(this, "skillsRef")}>Skills</a>,
      <a className={"navbar-item"} key={2} onClick={this.scrollToSection.bind(this, "experienceRef")}>Experience</a>,
      <a className={"navbar-item"} key={3} onClick={this.scrollToSection.bind(this, "projectsRef")}>Projects</a>,
      <a className={"navbar-item"} key={4} onClick={this.scrollToSection.bind(this, "contactRef")}>Contact</a>,
    ]

    return (
      <div className="App">
        <Navbar menuItems={menuItems}/>
        <section id="about" className="section" ref={this.aboutRef}>
          <About />
        </section>
        <section id="skills" className="section" ref={this.skillsRef}>
          <Skills />
        </section>
        <section id="experience" className="section" ref={this.experienceRef}>
          <Experience />
        </section>
        <section id="projects" className="section" ref={this.projectsRef}>
          <Projects />
        </section>
        <section id="contact" className="section" ref={this.contactRef}>
          <Contact />
        </section>
      </div>
    );
  }
}

export default App;
