// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tab, Form } from 'react-bootstrap';

// import custom components
import PageHeading from 'components/elements/bootstrap/common/PageHeading';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code file
import {
	DefaultSelectCode,
	SizingSelectCode
} from 'data/code/forms/FormSelectCode';

const BSSelect = () => {
	return (
		<Fragment>
			<PageHeading
				title="Form Text"
				description={`Customize the native <code>&lt;select&gt;</code>s with custom CSS that changes the element’s initial appearance.`}
			/>

			{/*  basic example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Default</h3>
					</div>
					<Tab.Container defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="all" className="pb-4 p-4">
										{/* basic example code started */}
										<Form>
											<Form.Select aria-label="Default select example">
												<option>Open this select menu</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</Form.Select>
										</Form>
										{/* end of basic example code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={DefaultSelectCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic */}

			<hr className="mb-5 mt-7" />

			{/*  sizing example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Sizing</h3>
						<p>
							You may also choose from small and large custom selects to match
							our similarly sized text inputs.
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="all" className="pb-4 p-4">
										{/* sizing code started */}
										<Form>
											<Form.Select size="lg">
												<option>Large select</option>
											</Form.Select>
											<br />
											<Form.Select>
												<option>Default select</option>
											</Form.Select>
											<br />
											<Form.Select size="sm">
												<option>Small select</option>
											</Form.Select>
										</Form>
										{/* end of sizing code */}
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={SizingSelectCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of sizing */}
		</Fragment>
	);
};
export default BSSelect;
