import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class MainNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Navbar color="primary" dark expand="md">
        <Container fluid>
          <NavbarBrand href="#">Sri Quran</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Advance Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Chapters</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainNavbar;
