import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import '../scss/NavMenu.scss';

const NavMenu = (props) => {
	return (
		<Navbar collapseOnSelect id="NavMenu">
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#brand">Dileep Rajput</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">
						About
          </NavItem>
					<NavItem eventKey={2} href="#">
						Experience
          </NavItem>
					<NavItem eventKey={3} href="#">
						Portfolio
          </NavItem>
					<NavItem eventKey={4} href="#">
						Contact
          </NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavMenu;