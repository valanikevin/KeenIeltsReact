// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	Nav,
	Tab,
	Form,
	InputGroup,
	FormControl,
	Button,
	DropdownButton,
	Dropdown,
	SplitButton
} from 'react-bootstrap';

// import custom components
import PageHeading from 'components/elements/bootstrap/common/PageHeading';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code file
import {
	DefaultCode,
	SizingCode,
	CheckboxesRadiosCode,
	MultipleInputsCode,
	MultipleAddonsCode,
	ButtonAddonsCode,
	ButtonsDropdownsCode,
	SegmentedButtonCode
} from 'data/code/forms/InputGroupCode';

const BSInputGroup = () => {
	return (
		<Fragment>
			<PageHeading
				title="InputGroup"
				description="Place one add-on or button on either side of an input. You may also place one on both sides of an input."
			/>

			{/*  basic example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Basic</h3>
						<p>
							Basic example of InputGroup with add-ons.
							<br />
							<b>
								Remember to place <code>&lt;label&gt;</code>s outside the input
								group.
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
										{/* basic code started */}
										<Form>
											<InputGroup className="mb-3">
												<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
												<FormControl
													placeholder="Username"
													aria-label="Username"
													aria-describedby="basic-addon1"
												/>
											</InputGroup>

											<InputGroup className="mb-3">
												<FormControl
													placeholder="Recipient's username"
													aria-label="Recipient's username"
													aria-describedby="basic-addon2"
												/>
												<InputGroup.Text id="basic-addon2">
													@example.com
												</InputGroup.Text>
											</InputGroup>

											<Form.Label htmlFor="basic-url">
												Your vanity URL
											</Form.Label>
											<InputGroup className="mb-3">
												<InputGroup.Text id="basic-addon3">
													https://example.com/users/
												</InputGroup.Text>
												<FormControl
													id="basic-url"
													aria-describedby="basic-addon3"
												/>
											</InputGroup>

											<InputGroup className="mb-3">
												<InputGroup.Text>$</InputGroup.Text>
												<FormControl aria-label="Amount (to the nearest dollar)" />
												<InputGroup.Text>.00</InputGroup.Text>
											</InputGroup>

											<InputGroup>
												<InputGroup.Text>With textarea</InputGroup.Text>
												<FormControl as="textarea" aria-label="With textarea" />
											</InputGroup>
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

			{/*  sizing example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Sizing</h3>
						<p>
							Add the relative form sizing classes to the{' '}
							<code>InputGroup</code> and contents within will automatically
							resize—no need for repeating the form control size classes on each
							element.
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
										{/* sizing code started */}
										<Form>
											<InputGroup size="sm" className="mb-3">
												<InputGroup.Text id="inputGroup-sizing-sm">
													Small
												</InputGroup.Text>
												<FormControl
													aria-label="Small"
													aria-describedby="inputGroup-sizing-sm"
												/>
											</InputGroup>
											<br />
											<InputGroup className="mb-3">
												<InputGroup.Text id="inputGroup-sizing-default">
													Default
												</InputGroup.Text>
												<FormControl
													aria-label="Default"
													aria-describedby="inputGroup-sizing-default"
												/>
											</InputGroup>
											<br />
											<InputGroup size="lg">
												<InputGroup.Text id="inputGroup-sizing-lg">
													Large
												</InputGroup.Text>
												<FormControl
													aria-label="Large"
													aria-describedby="inputGroup-sizing-sm"
												/>
											</InputGroup>
										</Form>
										{/* end of sizing code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of sizing */}

			<hr className="mb-5 mt-7" />

			{/*  checkboxes and radios example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Checkboxes and radios</h3>
						<p>
							Use the <code>&lt;InputGroup.Radio&gt;</code> or{' '}
							<code>&lt;InputGroup.Checkbox&gt;</code> to add options to an
							input group.
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
										{/* checkboxes and radios code started */}
										<Form>
											<InputGroup className="mb-3">
												<InputGroup.Checkbox aria-label="Checkbox for following text input" />
												<FormControl aria-label="Text input with checkbox" />
											</InputGroup>
											<InputGroup>
												<InputGroup.Radio aria-label="Radio button for following text input" />
												<FormControl aria-label="Text input with radio button" />
											</InputGroup>
										</Form>
										{/* end of checkboxes and radios code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={CheckboxesRadiosCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of checkboxes and radios */}

			<hr className="mb-5 mt-7" />

			{/* multiple inputs example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Multiple inputs</h3>
						<p>
							While multiple inputs are supported visually, validation styles
							are only available for input groups with a single input.
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
										{/* multiple inputs code started */}
										<Form>
											<InputGroup className="mb-3">
												<InputGroup.Text>First and last name</InputGroup.Text>
												<FormControl aria-label="First name" />
												<FormControl aria-label="Last name" />
											</InputGroup>
										</Form>
										{/* end of multiple inputs code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MultipleInputsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of multiple inputs */}

			<hr className="mb-5 mt-7" />

			{/* multiple addons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Multiple addons</h3>
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
										{/* multiple addon code started */}
										<Form>
											<InputGroup className="mb-3">
												<InputGroup.Text>$</InputGroup.Text>
												<InputGroup.Text>0.00</InputGroup.Text>
												<FormControl aria-label="Dollar amount (with dot and two decimal places)" />
											</InputGroup>
											<InputGroup>
												<FormControl aria-label="Dollar amount (with dot and two decimal places)" />
												<InputGroup.Text>$</InputGroup.Text>
												<InputGroup.Text>0.00</InputGroup.Text>
											</InputGroup>
										</Form>
										{/* end of multiple addon code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={MultipleAddonsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of multiple addon */}

			<hr className="mb-5 mt-7" />

			{/* button addons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Button addons</h3>
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
										{/* button addons code started */}
										<Form>
											<InputGroup className="mb-3">
												<Button variant="outline-secondary" id="button-addon1">
													Button
												</Button>
												<FormControl
													aria-label="Example text with button addon"
													aria-describedby="basic-addon1"
												/>
											</InputGroup>

											<InputGroup className="mb-3">
												<FormControl
													placeholder="Recipient's username"
													aria-label="Recipient's username"
													aria-describedby="basic-addon2"
												/>
												<Button variant="outline-secondary" id="button-addon2">
													Button
												</Button>
											</InputGroup>

											<InputGroup className="mb-3">
												<Button variant="outline-secondary">Button</Button>
												<Button variant="outline-secondary">Button</Button>
												<FormControl aria-label="Example text with two button addons" />
											</InputGroup>

											<InputGroup>
												<FormControl
													placeholder="Recipient's username"
													aria-label="Recipient's username with two button addons"
												/>
												<Button variant="outline-secondary">Button</Button>
												<Button variant="outline-secondary">Button</Button>
											</InputGroup>
										</Form>
										{/* end of button addons code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonAddonsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of button addons */}

			<hr className="mb-5 mt-7" />

			{/* buttons with Dropdowns */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Buttons with Dropdowns</h3>
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
										{/* buttons with Dropdowns code started */}
										<Form>
											<InputGroup className="mb-3">
												<DropdownButton
													variant="outline-secondary"
													title="Dropdown"
													id="input-group-dropdown-1"
												>
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another action</Dropdown.Item>
													<Dropdown.Item href="#">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item href="#">Separated link</Dropdown.Item>
												</DropdownButton>
												<FormControl aria-label="Text input with dropdown button" />
											</InputGroup>

											<InputGroup className="mb-3">
												<FormControl aria-label="Text input with dropdown button" />

												<DropdownButton
													variant="outline-secondary"
													title="Dropdown"
													id="input-group-dropdown-2"
													align="end"
												>
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another action</Dropdown.Item>
													<Dropdown.Item href="#">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item href="#">Separated link</Dropdown.Item>
												</DropdownButton>
											</InputGroup>

											<InputGroup>
												<DropdownButton
													variant="outline-secondary"
													title="Dropdown"
													id="input-group-dropdown-3"
												>
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another action</Dropdown.Item>
													<Dropdown.Item href="#">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item href="#">Separated link</Dropdown.Item>
												</DropdownButton>
												<FormControl aria-label="Text input with 2 dropdown buttons" />
												<DropdownButton
													variant="outline-secondary"
													title="Dropdown"
													id="input-group-dropdown-4"
													align="end"
												>
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another action</Dropdown.Item>
													<Dropdown.Item href="#">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item href="#">Separated link</Dropdown.Item>
												</DropdownButton>
											</InputGroup>
										</Form>
										{/* end of buttons with Dropdowns code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ButtonsDropdownsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of buttons with Dropdowns */}

			<hr className="mb-5 mt-7" />

			{/* segmented buttons */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Segmented buttons</h3>
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
									<Tab.Pane eventKey="design" className="pb-2 p-4">
										{/* segmented buttons code started */}
										<Form>
											<InputGroup className="mb-3">
												<SplitButton
													variant="outline-secondary"
													title="Action"
													id="segmented-button-dropdown-1"
												>
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another action</Dropdown.Item>
													<Dropdown.Item href="#">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item href="#">Separated link</Dropdown.Item>
												</SplitButton>
												<FormControl aria-label="Text input with dropdown button" />
											</InputGroup>

											<InputGroup className="mb-3">
												<FormControl aria-label="Text input with dropdown button" />
												<SplitButton
													variant="outline-secondary"
													title="Action"
													id="segmented-button-dropdown-2"
													alignRight
												>
													<Dropdown.Item href="#">Action</Dropdown.Item>
													<Dropdown.Item href="#">Another action</Dropdown.Item>
													<Dropdown.Item href="#">
														Something else here
													</Dropdown.Item>
													<Dropdown.Divider />
													<Dropdown.Item href="#">Separated link</Dropdown.Item>
												</SplitButton>
											</InputGroup>
										</Form>
										{/* end of segmented buttons code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SegmentedButtonCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of segmented buttons */}
		</Fragment>
	);
};

export default BSInputGroup;
