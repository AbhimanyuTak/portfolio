import React, { Component } from 'react';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Experience from './components/experience.js'
import Projects from './components/projects.js'
import Skills from './components/skills.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js'
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
        <section className="section hero" ref={this.aboutRef}>
          <About />
        </section>
        <section className="section is-medium" ref={this.skillsRef}>
          <Skills />
        </section>
        <section className="section" ref={this.experienceRef}>
          <br />
          <br />
          <Experience />
        </section>
        <section className="section is-medium" ref={this.projectsRef}>
          <Projects />
        </section>
        <section className="section" ref={this.contactRef}>
          <Contact />
        </section>
        <section className="section">
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
