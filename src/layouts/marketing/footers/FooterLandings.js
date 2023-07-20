// import node module libraries
import { Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import sub components
import FooterWithLinks from './FooterWithLinks';

// import media files
import Call2ActionBackground from 'assets/images/background/course-graphics.svg';

const FooterLandings = () => {
	return (
		<Fragment>
			{/* call to action */}
			<section
				className="py-lg-16 py-10 bg-gray"
				style={{
					background: `url(${Call2ActionBackground})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'top center'
				}}
			>
				<Container>
					{/*  row  */}
					<Row className="justify-content-center text-center">
						<Col md={9} sm={12}>
							{/* heading  */}
							<h2 className="display-4">
								Join more than 1 million learners worldwide
							</h2>
							<p className="lead px-lg-12 mb-6">
								Effective learning starts with assessment. Learning a new skill
								is hard work—Signal makes it easier.
							</p>
							{/* button */}
							<div className="d-grid d-md-block">
								<Link
									to="/authentication/sign-up"
									className="btn btn-primary mb-2 mb-md-0"
								>
									Start Learning for Free
								</Link>{' '}
								<Link to="/authentication/sign-up" className="btn btn-info">
									Geeks for Business
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<FooterWithLinks />
		</Fragment>
	);
};

export default FooterLandings;
