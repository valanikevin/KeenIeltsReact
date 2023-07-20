// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container, ListGroup } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiInstagram } from '@mdi/js';

// import media files
import FooterLogo from 'assets/images/brand/logo/logo.svg';
import AppStore from 'assets/images/svg/appstore.svg';
import PlayStore from 'assets/images/svg/playstore.svg';

const FooterWithLinks = () => {
	return (
		<Fragment>
			<footer className="pt-lg-10 pt-5 footer bg-white">
				<Container>
					<Row>
						<Col lg={4} md={6} sm={12}>
							{/* about company  */}
							<div className="mb-4">
								<Image src={FooterLogo} alt="" className="logo-inverse" />
								<div className="mt-4">
									<p>
										Geek is feature-rich components and beautifully Bootstrap
										UIKit for developers, built with bootstrap responsive
										framework.
									</p>
									{/* social media */}
									<div className="fs-4 mt-4">
										<Link to="#" className="mdi mdi-facebook text-muted me-2">
											<Icon path={mdiFacebook} size={0.7} />
										</Link>
										<Link to="#" className="mdi mdi-twitter text-muted me-2">
											<Icon path={mdiTwitter} size={0.7} />
										</Link>
										<Link to="#" className="mdi mdi-instagram text-muted ">
											<Icon path={mdiInstagram} size={0.7} />
										</Link>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={{ span: 2, offset: 1 }} md={3} sm={6}>
							<div className="mb-4">
								{/* list */}
								<h3 className="fw-bold mb-3">Company</h3>
								<ListGroup
									as="ul"
									bsPrefix="list-unstyled"
									className="nav nav-footer flex-column nav-x-0"
								>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											About
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Pricing
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Blog
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Careers
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Contact
										</Link>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
						<Col lg={2} md={3} sm={6}>
							<div className="mb-4">
								{/* list  */}
								<h3 className="fw-bold mb-3">Support</h3>
								<ListGroup
									as="ul"
									bsPrefix="list-unstyled"
									className="nav nav-footer flex-column nav-x-0"
								>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Help and Support
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Become Instructor
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Get the app
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											FAQ’s
										</Link>
									</ListGroup.Item>
									<ListGroup.Item as="li" bsPrefix=" ">
										<Link to="#" className="nav-link">
											Tutorial
										</Link>
									</ListGroup.Item>
								</ListGroup>
							</div>
						</Col>
						<Col lg={3} md={12} sm={12}>
							{/* contact info */}
							<div className="mb-4">
								<h3 className="fw-bold mb-3">Get in touch</h3>
								<p>339 McDermott Points Hettingerhaven, NV 15283</p>
								<p className="mb-1">
									Email: <Link to="#">support@geeksui.com</Link>
								</p>
								<p>
									Phone:{' '}
									<span className="text-dark fw-semi-bold">
										(000) 123 456 789
									</span>
								</p>
								<div className="d-flex">
									<Link to="#">
										<img src={AppStore} alt="" className="img-fluid" />
									</Link>
									<Link to="#" className="ms-2">
										<img src={PlayStore} alt="" className="img-fluid" />
									</Link>
								</div>
							</div>
						</Col>
					</Row>
					<Row className="align-items-center g-0 border-top py-2 mt-6">
						{/* Desc  */}
						<Col lg={4} md={5} sm={12}>
							<span>© 2023 Geeks-UI, Inc. All Rights Reserved</span>
						</Col>
						{/*  Links  */}
						<Col
							lg={8}
							md={7}
							sm={12}
							className="d-md-flex justify-content-end"
						>
							<nav className="nav nav-footer">
								<Link className="nav-link ps-0" to="#">
									Privacy Policy
								</Link>
								<Link className="nav-link px-2 px-md-3" to="#">
									Cookie Notice{' '}
								</Link>
								<Link className="nav-link d-none d-lg-block" to="#">
									Do Not Sell My Personal Information{' '}
								</Link>
								<Link className="nav-link" to="#">
									Terms of Use
								</Link>
							</nav>
						</Col>
					</Row>
				</Container>
			</footer>
		</Fragment>
	);
};

export default FooterWithLinks;
