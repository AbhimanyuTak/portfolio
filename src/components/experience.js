import React, { Component } from 'react';
import ExperienceModal from '../reusables/experience-modal';
import rentomojoLogo from '../images/rentomojo.png';
import slicepayLogo from '../images/slicepay.png';
import arzoooLogo from '../images/arzooo.png';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      jobTitle: "SDE",
      period: "fdgdfg",
      description: "dsdfdsf"
    }
  };

  renderModal = (company, title, period, description) => {
    this.setState({modal: true});
    this.setState({company});
    this.setState({jobTitle: title});
    this.setState({period});
    this.setState({description});
    // <ExperienceModal active="true" jobTitle="jkdsv" period="vcbgf" description="vfdvdsfv" />
  };

  openModel = () => {
    this.setState({modal: true});
  }

  closeModel = () => {
    this.setState({modal: false});
  }

  render() {
    const jobDetails = [
      {
        company: "RentoMojo",
        link: "https://www.rentomojo.com",
        logo: rentomojoLogo,
        title: "Senior Backend Engineer",
        duration: "November 2017 - Present",
        description: "Designing and writing scalable code for both backend and admin dashboards. Taking care of logistics module interfaced with Locus. Managing and mentoring new joinees."
      },
      {
        company: "HomeYantra / Arzooo",
        logo: arzoooLogo,
        link: "https://www.arzooo.com",      
        title: "Full Stack Developer",
        duration: "January 2017 - November 2017",
        description: "Wrote frontend, backend and data scrapers for the platform. Migrated their slow AngularJS web app to ReactJS. Managed the complete AWS infra and took care of deployments. Mentored new joinees."
      },
      {
        company: "SlicePay",     
        logo: slicepayLogo,
        link: "https://www.slicepay.in", 
        title: "Software Developer",
        duration: "September 2015 - November 2016",
        description: "Built the entire responsive website in AngularJS from scratch. Took care of all the frontend deployments and infrastructure needs. Built analytics dashboard and assisted in writing queries for analyzing user behavior"
      },
    ];

    const jobCards = [];

    for (const [index, job] of jobDetails.entries()) {
      jobCards.push(
        <div className="column" key={index}>
          <a className="box has-text-centered" onClick={this.renderModal.bind(this, job.company, job.title, job.duration, job.description)}>
            <figure className="image is-64x64 is-inline-block">
              <img className={(job.company !== "RentoMojo") ? "is-rounded" : null} src={job.logo} alt={job.company} />
            </figure>

            <div className="content">
              <p>
                <strong>{job.company}</strong>
              </p>
            </div>
          </a>
        </div>
      )
    }

    return (
      <div className="container">
        <ExperienceModal active={this.state.modal} company={this.state.company} jobTitle={this.state.jobTitle} period={this.state.period} description={this.state.description} onClose={this.closeModel}/>

        <h1 className="title is-4">Experience</h1>
        <div className="columns"> 
          {jobCards}
        </div>
      </div>
    )
  }
}

export default Experience;


