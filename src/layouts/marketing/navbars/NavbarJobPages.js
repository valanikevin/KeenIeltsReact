// import node module libraries
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Navbar, Nav, Container } from 'react-bootstrap';

// import custom components
import DocumentMenu from './DocumentMenu';
import DarkLightMode from '../../DarkLightMode';
import NavDropdownMain from 'layouts/marketing/navbars/NavDropdownMain';

// import media files
import Logo from 'assets/images/brand/logo/logo.svg';

// import data files
import JobListingRoutes from 'routes/marketing/JobListingRoutes';

const NavbarJobPages = () => {
	const [expandedMenu, setExpandedMenu] = useState(false);
	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className="navbar-default"
			>
				<Container className="px-0">
					<Navbar.Brand as={Link} to="/">
						<Image src={Logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbar-default">
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="navbar-default">
						<Nav className="ms-auto">
							{JobListingRoutes.map((item, index) => {
								if (item.children === undefined) {
									return (
										<div className="nav-item pt-1" key={index}>
											<Nav.Link as={Link} to={item.link}>
												{item.menuitem}
											</Nav.Link>
										</div>
									);
								} else {
									return (
										<NavDropdownMain
											item={item}
											key={index}
											onClick={(value) => setExpandedMenu(value)}
											className="pt-1"
										/>
									);
								}
							})}
							<DocumentMenu className="pt-1" />
							<div className="ms-6 mt-3 mt-lg-0">
								<div className="d-flex align-items-center">
									<DarkLightMode className="me-2" />
									<Nav.Link
										as={Link}
										to="#"
										bsPrefix="btn"
										className="btn btn-outline-primary me-2"
									>
										Sign In
									</Nav.Link>
									<Nav.Link
										as={Link}
										to="#"
										bsPrefix="btn"
										className="btn btn-primary"
									>
										Sign Up
									</Nav.Link>
								</div>
							</div>
							<span className={`ms-auto mt-3 mt-lg-0`}></span>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

export default NavbarJobPages;
