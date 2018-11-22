import React, { Component } from 'react';
import SimpleSearchForm from './search-forms/SimpleSearchForm';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
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
      <Navbar className="p-1" color="primary" dark expand="md">
        <Container fluid>
          <NavLink className="navbar-brand" to="/">
            Sri Quran
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/chapters">
                  Chapters
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar className="ml-auto">
              <SimpleSearchForm />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainNavbar;
