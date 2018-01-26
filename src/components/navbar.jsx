import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import dgdLogo from '../images/dgdnavlogo.png';


class NavigationBar extends Component {

constructor(props){
  super(props);

  this.scrollTopFunc=this.scrollTopFunction.bind(this);
}

scrollTopFunction() {
  window.scrollTo(0,0);
}






  render() {
    return (
        <Navbar id="navtop" fixedTop inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <img  onClick={this.scrollTopFunction}src={dgdLogo}/>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
              <NavItem id="navlink1" eventKey={1} href="https://www.google.co.uk">
               Videos
              </NavItem>
              <NavItem id="navlink2" eventKey={2} href="https://www.google.co.uk">
               Pictures
              </NavItem>
              </Nav>
              <Nav pullRight>
              <NavItem id="navlink3" eventKey={3} href="https://www.google.co.uk">
               Tour Info
              </NavItem>
              <NavItem id="navlink4" eventKey={4} href="https://www.google.co.uk">
               About
              </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar;