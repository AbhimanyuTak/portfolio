import React, { Component } from 'react';

class ExperienceModal extends Component {
  render() {
    return (
      <div className={"modal " + (this.props.active ? 'is-active' : null)} >
        <div className="modal-background" onClick={this.props.onClose}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.company}</p>
            <button className="delete" aria-label="close" onClick={this.props.onClose}></button>
          </header>
          <section className="modal-card-body">
            <div className="title is-5">{this.props.jobTitle}</div>
            <div className="subtitle is-6">{this.props.period}</div>
            <div>{this.props.description}</div>
          </section>
          <footer className="modal-card-foot">
          </footer>
        </div>
      </div>
    )
  }
}

export default ExperienceModal;





