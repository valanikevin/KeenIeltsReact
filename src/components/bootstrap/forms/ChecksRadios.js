// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tab, Form } from 'react-bootstrap';

// import custom components
import PageHeading from 'components/elements/bootstrap/common/PageHeading';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code file
import {
	DefaultCode,
	SwitchesCode,
	InlineCode,
	WithoutLabelsCode,
	CustomizingCode
} from 'data/code/forms/ChecksRadiosCode';

const ChecksRadios = () => {
	return (
		<Fragment>
			<PageHeading
				title="Checks and radios"
				description="Create consistent cross-browser and cross-device checkboxes and radios with our completely rewritten checks component."
			/>

			{/*  default example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Default (stacked)</h3>
						<p>
							By default, any number of checkboxes and radios that are immediate
							sibling will be vertically stacked and appropriately spaced with
							FormCheck.
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
									<Tab.Pane eventKey="design" className="pb-2 p-4">
										{/* default code started */}
										<Form>
											{['checkbox', 'radio'].map((type) => (
												<div key={`default-${type}`} className="mb-3">
													<Form.Check
														type={type}
														id={`default-${type}`}
														label={`default ${type}`}
													/>
													<Form.Check
														disabled
														type={type}
														label={`disabled ${type}`}
														id={`disabled-default-${type}`}
													/>
												</div>
											))}
										</Form>
										{/* end of default code */}
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
			{/* end of default */}

			<hr className="mb-5 mt-7" />

			{/*  switches example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Switches</h3>
						<p>
							A switch has the markup of a custom checkbox but uses{' '}
							<code>type="switch"</code> to render a toggle switch. Switches
							also support the same customizable children as{' '}
							<code>&lt;FormCheck&gt;</code>.
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
										{/* switches code started */}
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
										{/* end of switches code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SwitchesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of switches */}

			<hr className="mb-5 mt-7" />

			{/*  inline example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Inline</h3>
						<p>
							Group checkboxes or radios on the same horizontal row by adding
							the <code>inline</code> prop.
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
									<Tab.Pane eventKey="design" className="pb-2 p-4">
										{/* inline code started */}
										<Form>
											{['checkbox', 'radio'].map((type) => (
												<div key={`inline-${type}`} className="mb-3">
													<Form.Check
														inline
														label="1"
														name="group1"
														type={type}
														id={`inline-${type}-1`}
													/>
													<Form.Check
														inline
														label="2"
														name="group1"
														type={type}
														id={`inline-${type}-2`}
													/>
													<Form.Check
														inline
														disabled
														label="3 (disabled)"
														type={type}
														id={`inline-${type}-3`}
													/>
												</div>
											))}
										</Form>
										{/* end of inline code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={InlineCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of inline */}

			<hr className="mb-5 mt-7" />

			{/*  without labels example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Without labels</h3>
						<p>
							When you render a FormCheck without a label (no{' '}
							<code>children</code>) some additional styling is applied to keep
							the inputs from collapsing.
							<br />
							<b>
								Remember to add an <code>aria-label</code> when omitting labels!
							</b>
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
										{/* without labels code started */}
										<Form>
											<Form.Check aria-label="option 1" />
											<Form.Check type="radio" aria-label="radio 1" />
										</Form>
										{/* end of without labels code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={WithoutLabelsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of without labels */}

			<hr className="mb-5 mt-7" />

			{/*  customization */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Customizing FormCheck rendering</h3>
						<p>
							Group checkboxes or radios on the same horizontal row by adding
							the <code>FormCheck</code> prop. When you need tighter control, or
							want to customize how the <code>FormCheck</code> component
							renders, it may better to use its constituent parts directly.
							<br />
							By provided <code>children</code> to the <code>FormCheck</code>{' '}
							you can forgo the default rendering and handle it yourself. (You
							can still provide an id to the <code>FormCheck</code> or{' '}
							<code>FormGroup</code> and have it propagate to the label and
							input).
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
										{/* customization code started */}
										<Form>
											{['checkbox', 'radio'].map((type) => (
												<div key={type} className="mb-3">
													<Form.Check type={type} id={`check-api-${type}`}>
														<Form.Check.Input type={type} isValid />
														<Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
														<Form.Control.Feedback type="valid">
															You did it!
														</Form.Control.Feedback>
													</Form.Check>
												</div>
											))}
										</Form>
										{/* end of customization code */}
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
			{/* end of customization */}
		</Fragment>
	);
};

export default ChecksRadios;
