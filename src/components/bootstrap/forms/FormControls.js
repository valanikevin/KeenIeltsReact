// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tab, Form } from 'react-bootstrap';

// import custom components
import PageHeading from 'components/elements/bootstrap/common/PageHeading';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code file
import {
	BasicFormControlCode,
	SizingControlCode,
	DisabledControlCode,
	ReadonlyControlCode,
	ReadonlyPlainControlCode,
	FileInputControlCode,
	ColorControlCode
} from 'data/code/forms/FormControlsCode';

const FormControls = () => {
	return (
		<Fragment>
			<PageHeading
				title="Form Controls"
				description={`Give textual form controls like <code>&lt;input.Item&gt;</code>s and <code>&lt;textarea.Item&gt;</code>s an upgrade with custom styles, sizing, focus states, and more.`}
			/>

			{/*  basic example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Example</h3>
						<p>
							For textual form controls—like <code>input</code>s and{' '}
							<code>textarea</code>s—use the <code>FormControl</code> component.
							FormControl adds some additional styles for general appearance,
							focus state, sizing, and more.
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
										{/* basic example code started */}
										<Form>
											<Form.Group
												className="mb-3"
												controlId="exampleForm.ControlInput1"
											>
												<Form.Label>Email address</Form.Label>
												<Form.Control
													type="email"
													placeholder="name@example.com"
												/>
											</Form.Group>
											<Form.Group controlId="exampleForm.ControlTextarea1">
												<Form.Label>Example textarea</Form.Label>
												<Form.Control as="textarea" rows={3} />
											</Form.Group>
										</Form>
										{/* end of basic example code */}
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicFormControlCode} />
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
							Use <code>size</code> on <code>&lt;FormControl&gt;</code> to
							change the size of the input.
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
											<Form.Control
												size="lg"
												type="text"
												placeholder="Large text"
											/>
											<br />
											<Form.Control type="text" placeholder="Normal text" />
											<br />
											<Form.Control
												size="sm"
												type="text"
												placeholder="Small text"
											/>
										</Form>
										{/* end of sizing code */}
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={SizingControlCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of sizing example */}

			<hr className="mb-5 mt-7" />

			{/*  disabled control */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Disabled</h3>
						<p>
							Add the <code>disabled</code> prop on an input to give it a grayed
							out appearance and remove pointer events.
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
										{/* disabled code started */}
										<Form>
											<Form.Control
												type="text"
												placeholder="Disabled input"
												aria-label="Disabled input example"
												disabled
												readOnly
											/>
											<br />
											<Form.Control
												type="text"
												placeholder="Disabled readonly input"
												aria-label="Disabled input example"
												readOnly
											/>
										</Form>
										{/* end of disabled code */}
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={DisabledControlCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of disabled control */}

			<hr className="mb-5 mt-7" />

			{/*  readonly control */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Readonly</h3>
						<p>
							Add the <code>readOnly</code> prop on an input to prevent
							modification of the input's value. Read-only inputs appear lighter
							(just like disabled inputs), but retain the standard cursor.
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
										{/* readonly code started */}
										<Form>
											<Form.Control
												type="text"
												placeholder="Readonly input here..."
												readOnly
											/>
										</Form>
										{/* end of readonly code */}
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={ReadonlyControlCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of readonly control */}

			<hr className="mb-5 mt-7" />

			{/*  readonly plain text control */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Readonly plain text</h3>
						<p>
							If you want to have readonly elements in your form styled as plain
							text, use the <code>plaintext</code> prop on FormControls to
							remove the default form field styling and preserve the correct
							margin and padding.
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
										{/* readonly plain text code started */}
										<Form>
											<Form.Group
												as={Row}
												className="mb-3"
												controlId="formPlaintextEmail"
											>
												<Form.Label column sm="2">
													Email
												</Form.Label>
												<Col sm="10">
													<Form.Control
														plaintext
														readOnly
														defaultValue="email@example.com"
													/>
												</Col>
											</Form.Group>

											<Form.Group
												as={Row}
												className="mb-3"
												controlId="formPlaintextPassword"
											>
												<Form.Label column sm="2">
													Password
												</Form.Label>
												<Col sm="10">
													<Form.Control
														type="password"
														placeholder="Password"
													/>
												</Col>
											</Form.Group>
										</Form>
										{/* end of readonly plain text code */}
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={ReadonlyPlainControlCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of readonly plain text control */}

			<hr className="mb-5 mt-7" />

			{/*  file input control */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>File input</h3>
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
										{/* file input code started */}
										<Form>
											<Form.Group controlId="formFile" className="mb-3">
												<Form.Label>Default file input example</Form.Label>
												<Form.Control type="file" />
											</Form.Group>
											<Form.Group controlId="formFileMultiple" className="mb-3">
												<Form.Label>Multiple files input example</Form.Label>
												<Form.Control type="file" multiple />
											</Form.Group>
											<Form.Group controlId="formFileDisabled" className="mb-3">
												<Form.Label>Disabled file input example</Form.Label>
												<Form.Control type="file" disabled />
											</Form.Group>
											<Form.Group controlId="formFileSm" className="mb-3">
												<Form.Label>Small file input example</Form.Label>
												<Form.Control type="file" size="sm" />
											</Form.Group>
											<Form.Group controlId="formFileLg" className="mb-3">
												<Form.Label>Large file input example</Form.Label>
												<Form.Control type="file" size="lg" />
											</Form.Group>
										</Form>
										{/* end of file input code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={FileInputControlCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of file input control */}

			<hr className="mb-5 mt-7" />

			{/*  color input control */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Color</h3>
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
										{/* color input code started */}
										<Form>
											<Form.Label htmlFor="exampleColorInput">
												Color picker
											</Form.Label>
											<Form.Control
												type="color"
												id="exampleColorInput"
												defaultValue="#563d7c"
												title="Choose your color"
											/>
										</Form>
										{/* end of color input code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={ColorControlCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of color input control */}
		</Fragment>
	);
};

export default FormControls;
