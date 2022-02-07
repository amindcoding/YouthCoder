import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';
const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="dark" container="sm" expand="sm" fixed="" dark>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/article/">Artikel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/forum/">forum</NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown>
            <DropdownToggle color="light" caret>
              Aksi
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Admin</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/login">Log Out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
