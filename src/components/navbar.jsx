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
scrollTourFunction() {
  window.scrollTo(0,500);
}

scrollVideosFunction() {
  window.scrollTo(0,1050);
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
              <NavItem  onClick={this.scrollTourFunction} className="navlinks" id="navlink1" eventKey={1}>
                Tour Dates
              </NavItem>
              <NavItem onClick={this.scrollVideosFunction} className="navlinks" id="navlink2" eventKey={2}>
               Videos
              </NavItem>
              </Nav>
              <Nav pullRight>
              <NavItem className="navlinks" id="navlink3" eventKey={3} href="http://www.riserecords.com/">
               Rise Records
              </NavItem>
              <NavItem className="navlinks" id="navlink4" eventKey={4} href="https://github.com/SPDUK/DGD-site">
               About
              </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar;