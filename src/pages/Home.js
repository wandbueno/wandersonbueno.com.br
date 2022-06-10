import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'

import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Wanderson Bueno</h2>
        <div className="prompt">
          <p>Web developer with a passion for learning and creating.</p>
          <a
            href="https://api.whatsapp.com/send?phone=5563992480044&text=Ol%C3%A1%20Wanderson%20Bueno"
            target="_blank"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/wanderson-bueno/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="#">
            <EmailIcon />
          </a>
          <a href="https://github.com/wandbueno" target="_blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS,
              StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PHP, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
