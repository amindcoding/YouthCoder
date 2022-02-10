import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap';

const NavbarComponent = () => {
  const [users, setUsers] = useState([]);
  const userInfo = localStorage.getItem('userInfo');

  const listUsers = () => {
    localStorage.getItem('userInfo');
  };

  const editUser = () => {
    let id = JSON.parse(userInfo).id;
    window.location.href = '/profile/' + id;
  };

  const logoutUser = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div>
      <Navbar
        style={{
          backgroundColor: '#008080',
        }}
        container="sm"
        expand="sm"
        fixed=""
        dark
      >
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/articles">Artikel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/forum">Forum</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => listUsers()} href="/users/">
                Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown>
            {userInfo ? (
              <div>
                <DropdownToggle color="light" caret>
                  {JSON.parse(userInfo).firstName} {JSON.parse(userInfo).lastName}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => editUser()}>Edit Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => logoutUser()}>Log Out</DropdownItem>
                </DropdownMenu>
              </div>
            ) : (
              <Button className="btn btn-light" href="/login/">
                Login
              </Button>
              // <DropdownToggle color="light" caret>
              //   Login
              // </DropdownToggle>
            )}
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
