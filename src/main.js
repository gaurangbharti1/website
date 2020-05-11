import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import storage from 'local-storage-fallback';

import About from "./about";
import Projects from "./projects";
// import Resume from "./Resume";
import Contact from "./contact";

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { GoMail } from 'react-icons/go';
import { FiSun, FiMoon } from 'react-icons/fi';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function getDark() {
  const savedMode = storage.getItem('mode');
  return savedMode === 'dark';
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      darkMode: getDark()
    };
  }

  toggleDark() {
    this.setState({ darkMode: !this.state.darkMode }, ()=> {
      if(this.state.darkMode)
        storage.setItem('mode', 'dark');
      else
        storage.setItem('mode', 'light');
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar variant={this.state.darkMode ? "dark" : "light"} bg={this.state.darkMode ? "dark" : "light"} expand="lg">
          <Navbar.Brand className="name" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} as={NavLink} to="/about">Gaurang Bharti</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{marginTop: 3.2}}>
              <Nav.Link as={NavLink} to="/about" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}}>About Me</Nav.Link>
              <Nav.Link as={NavLink} to="/projects" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}}>Projects</Nav.Link>
              {/*<Nav.Link as={NavLink} to="/resume">Resume</Nav.Link>*/}
              <Nav.Link as={NavLink} to="/contact" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}}>Contact Me</Nav.Link>
              <Nav.Link onClick={this.toggleDark.bind(this)}>
                {this.state.darkMode ? 
                <FiMoon style={{marginBottom: 3, color: 'white'}} size="1.4em" /> :
                <FiSun style={{marginBottom: 3, color: 'black'}} size="1.4em" />
                }
              </Nav.Link>
            </Nav>

            <a href="mailto: gaurangbharti@gmail.com" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} target="_blank" rel="noopener noreferrer">
              <GoMail style={{marginRight: 15, color: ''}} size="2em" />
              </a>
            <a href="https://github.com/gaurangbharti1" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub style={{marginRight: 15}} size="1.7em" />
            </a>
            <a href="https://www.linkedin.com/in/gaurang-bharti-269441181/" style={this.state.darkMode ? {color: 'white'}: {color: 'black'}} target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin size="2em" />
            </a>
          </Navbar.Collapse>
        </Navbar>
        <div className="content" style={this.state.darkMode ? {backgroundColor: '#212529'} : {backgroundColor: 'white'}}>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/about" render={props=><About darkMode={this.state.darkMode} />}/>
          <Route exact path="/projects" render={props=><Projects darkMode={this.state.darkMode} />}/>
          {/* <Route exact path="/resume" component={Resume}/> */}
          <Route exact path="/contact" render={props=><Contact darkMode={this.state.darkMode} />}/>
        </div>

        <div style={this.state.darkMode ? {backgroundColor: '#343a40'}: {backgroundColor: '#f8f9fa'}} class="footer"> {/*style={this.state.height/this.state.width > 1 ? {top: this.state.height/4} : {bottom: -9}}>*/}
          <p style={this.state.darkMode ? {color: 'white', margin: 'auto'}: {color: 'black', margin: 'auto'}}>© Gaurang Bharti 2020</p>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;