// import node module libraries
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCenter = () => {
	return (
		<footer className="py-lg-10 py-5 bg-white">
			<Container>
				<Row className="justify-content-center text-center  ">
					<Col xl={8} md={12} sm={12} className="px-0 ">
						<nav className="nav nav-footer justify-content-center">
							<Link className="nav-link" to="#!">
								About{' '}
							</Link>
							<Link className="nav-link" to="#!">
								Blog{' '}
							</Link>
							<Link className="nav-link" to="#!">
								Send feedback
							</Link>
							<Link className="nav-link" to="#!">
								Terms & Conditions
							</Link>
							<Link className="nav-link" to="#!">
								Get Support
							</Link>
						</nav>
					</Col>
					{/*  Desc  */}
					<Col lg={8} md={12} sm={12}>
						<div className="my-6">
							{/* Facebook */}
							<Link to="#!" className="text-muted me-4">
								<i className="fab fa-facebook fs-3"></i>
							</Link>
							{/* Twitter */}
							<Link to="#!" className="text-muted me-4">
								<i className="fab fa-twitter fs-3"></i>
							</Link>
							{/* LinkedIn */}
							<Link to="#!" className="text-muted me-4">
								<i className="fab fa-linkedin fs-3"></i>
							</Link>
							{/* GitHub */}
							<Link to="#!" className="text-muted me-4">
								<i className="fab fa-github fs-3"></i>
							</Link>
							{/* GitHub */}
							<Link to="#!" className="text-muted">
								<i className="fab fa-twitch fs-3"></i>
							</Link>
						</div>
					</Col>
					<Col lg={8} md={12} sm={12}>
						<span>© 2023 Geeks-UI, Inc. All Rights Reserved</span>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default FooterCenter;
