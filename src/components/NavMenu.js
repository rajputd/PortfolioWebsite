import React from 'react';

import '../scss/NavMenu.scss';

const NavMenu = (props) => {
	return (
		<nav id="NavMenu" className="navbar navbar-default">
		<div className="container-fluid">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<a className="navbar-brand">Dileep Rajput</a>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav navbar-right">
					<li><a>About</a></li>
					<li><a>Portfolio</a></li>
					<li><a>Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>
	);
}

export default NavMenu;