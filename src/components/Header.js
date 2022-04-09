import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">HOME</a></li>
              <li><a className="smoothscroll" href="#resume">ABOUT</a></li>
              <li><a className="smoothscroll" href="#portfolio">WORKS</a></li>
              <li><a className="smoothscroll" href="#contact">CONTACT</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <div className="three columns">

                <img className="profile-pic" src="images/profilepic.jpg" alt="" />

              </div>

              <h1 className="responsive-headline">{resumeData.name}</h1>

              <h4 style={{ color: '#fff', fontFamily: 'sans-serif ' }}> I am a {resumeData.role}{resumeData.roleDescription} Enthusiast
              </h4>
              <hr />
              <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
          </div>


        </header>

      </React.Fragment>
    );
  }
}