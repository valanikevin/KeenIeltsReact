// import node module libraries
import { Fragment } from 'react';
import { Col, Row, ListGroup } from 'react-bootstrap';

const DescriptionTab = () => {
	return (
		<Fragment>
			<div className="mb-4">
				<h3 className="mb-2">Course Descriptions</h3>
				<p>
					If you’re learning to program for the first time, or if you’re coming
					from a different language, this course, JavaScript: Getting Started,
					will give you the basics for coding in JavaScript. First, you'll
					discover the types of applications that can be built with JavaScript,
					and the platforms they’ll run on.
				</p>
				<p>
					Next, you’ll explore the basics of the language, giving plenty of
					examples. Lastly, you’ll put your JavaScript knowledge to work and
					modify a modern, responsive web page. When you’re finished with this
					course, you’ll have the skills and knowledge in JavaScript to create
					simple programs, create simple web applications, and modify web pages.
				</p>
			</div>
			<h4 className="mb-3">What you’ll learn</h4>
			<Row className="mb-3">
				<Col lg={6} md={6} sm={12}>
					<ListGroup bsPrefix="list-unstyled" variant="flush">
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-2"></i>
							<span>
								Recognize the importance of understanding your objectives when
								addressing an audience.
							</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-2"></i>
							<span>
								Identify the fundaments of composing a successful close.
							</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-2"></i>
							<span>
								Explore how to connect with your audience through crafting
								compelling stories.
							</span>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col lg={6} md={6} sm={12}>
					<ListGroup bsPrefix="list-unstyled" variant="flush">
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-1"></i>{' '}
							<span>
								Examine ways to connect with your audience by personalizing your
								content.
							</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-1"></i>
							<span>Break down the best ways to exude executive presence.</span>
						</ListGroup.Item>
						<ListGroup.Item bsPrefix=" " className="d-flex mb-2">
							<i className="far fa-check-circle text-success me-2 mt-1"></i>
							<span>
								Explore how to communicate the unknown in an impromptu
								communication.
							</span>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<p>
				Maecenas viverra condimentum nulla molestie condimentum. Nunc ex libero,
				feugiat quis lectus vel, ornare euismod ligula. Aenean sit amet arcu
				nulla.
			</p>
			<p>
				Duis facilisis ex a urna blandit ultricies. Nullam sagittis ligula non
				eros semper, nec mattis odio ullamcorper. Phasellus feugiat sit amet leo
				eget consectetur.
			</p>
		</Fragment>
	);
};
export default DescriptionTab;
