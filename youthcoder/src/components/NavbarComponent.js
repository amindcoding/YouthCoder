import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
const NavbarComponent = () => {
  const userInfo = localStorage.getItem("userInfo");

  const logoutUser = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

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
            {userInfo ? (
              <div>
              <DropdownToggle color="light" caret>
                {  JSON.parse(userInfo).username}
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>Admin</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={()=> logoutUser()}>Log Out</DropdownItem>
            </DropdownMenu>
              </div>
            ) : (
              <Button className="btn btn-light" href="/login/">Login</Button>
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
