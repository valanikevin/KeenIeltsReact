// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tab, Form, FloatingLabel } from 'react-bootstrap';

// import custom components
import PageHeading from 'components/elements/bootstrap/common/PageHeading';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code file
import {
	DefaultCode,
	TextareasCode,
	SelectsCode,
	LayoutCode,
	CustomizingCode
} from 'data/code/forms/FloatingLabelsCode';

const FloatingLabels = () => {
	return (
		<Fragment>
			<PageHeading
				title="Floating labels"
				description="Create beautifully simple form labels that float over your input fields."
			/>

			{/*  basic example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Basic</h3>
						<p>
							Wrap a <code>&lt;Form.Control&gt;</code> element in{' '}
							<code>&lt;FloatingLabel&gt;</code> to enable floating labels with
							Bootstrap’s textual form fields.
							<br />A <code>placeholder</code> is required on each{' '}
							<code>&lt;Form.Control&gt;</code> as our method of CSS-only
							floating labels uses the <code>:placeholder-shown</code>{' '}
							pseudo-element.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* basic code started */}
										<Form>
											<FloatingLabel
												controlId="floatingInput"
												label="Email address"
												className="mb-3"
											>
												<Form.Control
													type="email"
													placeholder="name@example.com"
												/>
											</FloatingLabel>
											<FloatingLabel
												controlId="floatingPassword"
												label="Password"
											>
												<Form.Control type="password" placeholder="Password" />
											</FloatingLabel>
										</Form>
										{/* end of basic code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={DefaultCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic */}

			<hr className="mb-5 mt-7" />

			{/*  textareas example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Textareas</h3>
						<p>
							By default, <code>&lt;textarea&gt;</code>s will be the same height
							as <code>&lt;input&gt;</code>s. To set a custom height on your{' '}
							<code>&lt;textarea&gt;</code>, do not use the <code>rows</code>{' '}
							attribute. Instead, set an explicit <code>height</code> (either
							inline or via custom CSS).
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* textareas code started */}
										<Form>
											<FloatingLabel
												controlId="floatingTextarea"
												label="Comments"
												className="mb-3"
											>
												<Form.Control
													as="textarea"
													placeholder="Leave a comment here"
												/>
											</FloatingLabel>
											<FloatingLabel
												controlId="floatingTextarea2"
												label="Comments"
											>
												<Form.Control
													as="textarea"
													placeholder="Leave a comment here"
													style={{ height: '100px' }}
												/>
											</FloatingLabel>
										</Form>
										{/* end of textareas code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TextareasCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of textareas */}

			<hr className="mb-5 mt-7" />

			{/*  selects example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Selects</h3>
						<p>
							Other than <code>&lt;Form.Control&gt;</code>, floating labels are
							only available on <code>&lt;Form.Select&gt;</code>s. They work in
							the same way, but unlike <code>&lt;input&gt;</code>s, they’ll
							always show the <code>&lt;label&gt;</code> in its floated state.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* selects code started */}
										<Form>
											<FloatingLabel
												controlId="floatingSelect"
												label="Works with selects"
											>
												<Form.Select aria-label="Floating label select example">
													<option>Open this select menu</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</Form.Select>
											</FloatingLabel>
										</Form>
										{/* end of selects code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SelectsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of selects */}

			<hr className="mb-5 mt-7" />

			{/* layout example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Layout</h3>
						<p>
							When working with the Bootstrap grid system, be sure to place form
							elements within column classes.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* layout code started */}
										<Row className="g-2">
											<Col md>
												<FloatingLabel
													controlId="floatingInputGrid"
													label="Email address"
												>
													<Form.Control
														type="email"
														placeholder="name@example.com"
													/>
												</FloatingLabel>
											</Col>
											<Col md>
												<FloatingLabel
													controlId="floatingSelectGrid"
													label="Works with selects"
												>
													<Form.Select aria-label="Floating label select example">
														<option>Open this select menu</option>
														<option value="1">One</option>
														<option value="2">Two</option>
														<option value="3">Three</option>
													</Form.Select>
												</FloatingLabel>
											</Col>
										</Row>
										{/* end of layout code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={LayoutCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of layout */}

			<hr className="mb-5 mt-7" />

			{/* customizing rendering */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Customizing rendering</h3>
						<p>
							If you need greater control over the rendering, use the{' '}
							<code>&lt;FormFloating&gt;</code> component to wrap your input and
							label. Also note that the <code>&lt;Form.Control&gt;</code> must
							come first so we can utilize a sibling selector (e.g., ~).
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* customizing rendering code started */}
										<Form>
											<Form.Floating className="mb-3">
												<Form.Control
													id="floatingInputCustom"
													type="email"
													placeholder="name@example.com"
												/>
												<label htmlFor="floatingInputCustom">
													Email address
												</label>
											</Form.Floating>
											<Form.Floating>
												<Form.Control
													id="floatingPasswordCustom"
													type="password"
													placeholder="Password"
												/>
												<label htmlFor="floatingPasswordCustom">Password</label>
											</Form.Floating>
										</Form>
										{/* end of customizing rendering code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={CustomizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of customizing rendering */}
		</Fragment>
	);
};

export default FloatingLabels;
