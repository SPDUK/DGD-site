import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
        <Navbar id="navtop" fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Dance Gavin Dance</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="https://www.google.co.uk">
               Google
              </NavItem>
              <NavItem eventKey={2} href="https://www.google.co.uk">
               Google
              </NavItem>
              <NavItem eventKey={3} href="https://www.google.co.uk">
               Google
              </NavItem>
              <NavItem eventKey={4} href="https://www.google.co.uk">
               Google
              </NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default NavigationBar;