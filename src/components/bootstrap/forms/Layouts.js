// import node module libraries
import { Fragment } from 'react';
import {
	Col,
	Row,
	Card,
	Nav,
	Tab,
	Form,
	Button,
	InputGroup,
	FormControl
} from 'react-bootstrap';

// import custom components
import PageHeading from 'components/elements/bootstrap/common/PageHeading';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code file
import {
	FormGroupsCode,
	FormGridCode,
	FormGrid2Code,
	HorizontalFormCode,
	HorizontalFormLabelSizingCode,
	ColumnSizingCode,
	AutoSizingCode,
	AutoSizingMoreCode
} from 'data/code/forms/LayoutsCode';

const Layouts = () => {
	return (
		<Fragment>
			<PageHeading
				title="Layout"
				description="Give your forms some structure—from inline to horizontal to custom grid implementations—with our form layout options."
			/>

			{/* form groups example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Form groups</h3>
						<p>
							The <code>FormGroup</code> component is the easiest way to add
							some structure to forms. It provides a flexible container for
							grouping of labels, controls, optional help text, and form
							validation messaging. Use it with <code>fieldsets</code>,{' '}
							<code>did</code>s, or nearly any other element.
						</p>
						<p>
							You also add the <code>controlId</code> prop to accessibly wire
							the nested label and input together via the <code>id</code>.
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
										{/* form groups code started */}
										<Form>
											<Form.Group className="mb-3" controlId="formGroupEmail">
												<Form.Label>Email address</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
											</Form.Group>
											<Form.Group
												className="mb-3"
												controlId="formGroupPassword"
											>
												<Form.Label>Password</Form.Label>
												<Form.Control type="password" placeholder="Password" />
											</Form.Group>
										</Form>
										{/* end of form groups code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="p-4 react-code">
										<HighlightCode code={FormGroupsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of form groups */}

			<hr className="mb-5 mt-7" />

			{/* form grid example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Form grid</h3>
						<p>
							More complex forms can be built using the grid components. Use
							these for form layouts that require multiple columns, varied
							widths, and additional alignment options.
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
									<Tab.Pane eventKey="design" className="p-4">
										{/* form grid code started */}
										<Form>
											<Row>
												<Col>
													<Form.Control placeholder="First name" />
												</Col>
												<Col>
													<Form.Control placeholder="Last name" />
												</Col>
											</Row>
										</Form>
										{/* end of form grid code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={FormGridCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of form grid */}

			{/* form grid more example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-4">
					<div className="mb-4">
						<p>
							More complex layouts can also be created with the grid system.
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
									<Tab.Pane eventKey="design" className="p-4">
										{/* form grid more code started */}
										<Form>
											<Row className="mb-3">
												<Form.Group as={Col} controlId="formGridEmail">
													<Form.Label>Email</Form.Label>
													<Form.Control
														type="email"
														placeholder="Enter email"
													/>
												</Form.Group>

												<Form.Group as={Col} controlId="formGridPassword">
													<Form.Label>Password</Form.Label>
													<Form.Control
														type="password"
														placeholder="Password"
													/>
												</Form.Group>
											</Row>

											<Form.Group className="mb-3" controlId="formGridAddress1">
												<Form.Label>Address</Form.Label>
												<Form.Control placeholder="1234 Main St" />
											</Form.Group>

											<Form.Group className="mb-3" controlId="formGridAddress2">
												<Form.Label>Address 2</Form.Label>
												<Form.Control placeholder="Apartment, studio, or floor" />
											</Form.Group>

											<Row className="mb-3">
												<Form.Group as={Col} controlId="formGridCity">
													<Form.Label>City</Form.Label>
													<Form.Control />
												</Form.Group>

												<Form.Group as={Col} controlId="formGridState">
													<Form.Label>State</Form.Label>
													<Form.Select defaultValue="Choose...">
														<option>Choose...</option>
														<option>...</option>
													</Form.Select>
												</Form.Group>

												<Form.Group as={Col} controlId="formGridZip">
													<Form.Label>Zip</Form.Label>
													<Form.Control />
												</Form.Group>
											</Row>

											<Form.Group className="mb-3" id="formGridCheckbox">
												<Form.Check type="checkbox" label="Check me out" />
											</Form.Group>

											<Button variant="primary" type="submit">
												Submit
											</Button>
										</Form>
										{/* end of form grid more code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="p-4 react-code">
										<HighlightCode code={FormGrid2Code} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of form grid more */}

			<hr className="mb-5 mt-7" />

			{/* horizontal form example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Horizontal form</h3>
						<p>
							Create horizontal forms with the grid by adding{' '}
							<code>as=&#10100;Row&#10101;</code> to form groups and using{' '}
							<code>Col</code> to specify the width of your labels and controls.
							Be sure to add the <code>column</code> prop to your{' '}
							<code>FormLabels</code> as well so they're vertically centered
							with their associated form controls.
						</p>
						<p>
							At times, you maybe need to use margin or padding utilities to
							create that perfect alignment you need. For example, we've removed
							the <code>padding-top</code> on our stacked radio inputs label to
							better align the text baseline.
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
									<Tab.Pane eventKey="design" className="p-4">
										{/* horizontal form code started */}
										<Form>
											<Form.Group
												as={Row}
												className="mb-3"
												controlId="formHorizontalEmail"
											>
												<Form.Label column sm={2}>
													Email
												</Form.Label>
												<Col sm={10}>
													<Form.Control type="email" placeholder="Email" />
												</Col>
											</Form.Group>

											<Form.Group
												as={Row}
												className="mb-3"
												controlId="formHorizontalPassword"
											>
												<Form.Label column sm={2}>
													Password
												</Form.Label>
												<Col sm={10}>
													<Form.Control
														type="password"
														placeholder="Password"
													/>
												</Col>
											</Form.Group>
											<fieldset>
												<Form.Group as={Row} className="mb-3">
													<Form.Label as="legend" column sm={2}>
														Radios
													</Form.Label>
													<Col sm={10}>
														<Form.Check
															type="radio"
															label="first radio"
															name="formHorizontalRadios"
															id="formHorizontalRadios1"
														/>
														<Form.Check
															type="radio"
															label="second radio"
															name="formHorizontalRadios"
															id="formHorizontalRadios2"
														/>
														<Form.Check
															type="radio"
															label="third radio"
															name="formHorizontalRadios"
															id="formHorizontalRadios3"
														/>
													</Col>
												</Form.Group>
											</fieldset>
											<Form.Group
												as={Row}
												className="mb-3"
												controlId="formHorizontalCheck"
											>
												<Col sm={{ span: 10, offset: 2 }}>
													<Form.Check label="Remember me" />
												</Col>
											</Form.Group>

											<Form.Group as={Row}>
												<Col sm={{ span: 10, offset: 2 }}>
													<Button type="submit">Sign in</Button>
												</Col>
											</Form.Group>
										</Form>
										{/* end of horizontal form code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HorizontalFormCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of horizontal form */}

			<hr className="mb-5 mt-7" />

			{/* horizontal form label sizing example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Horizontal form label sizing</h3>
						<p>
							You can size the <code>&lt;FormLabel&gt;</code> using the{' '}
							<code>column</code> prop as shown.
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
										{/* horizontal form label sizing code started */}
										<Form>
											<Row>
												<Form.Label column="lg" lg={2}>
													Large Text
												</Form.Label>
												<Col>
													<Form.Control
														size="lg"
														type="text"
														placeholder="Large text"
													/>
												</Col>
											</Row>
											<br />
											<Row>
												<Form.Label column lg={2}>
													Normal Text
												</Form.Label>
												<Col>
													<Form.Control type="text" placeholder="Normal text" />
												</Col>
											</Row>
											<br />
											<Row>
												<Form.Label column="sm" lg={2}>
													Small Text
												</Form.Label>
												<Col>
													<Form.Control
														size="sm"
														type="text"
														placeholder="Small text"
													/>
												</Col>
											</Row>
										</Form>
										{/* end of horizontal form label sizing code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HorizontalFormLabelSizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of horizontal form label sizing */}

			<hr className="mb-5 mt-7" />

			{/* column sizing */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Column sizing</h3>
						<p>
							As shown in the previous examples, our grid system allows you to
							place any number of <code>&lt;Col&gt;</code>s within a{' '}
							<code>&lt;Row&gt;</code>. They'll split the available width
							equally between them. You may also pick a subset of your columns
							to take up more or less space, while the remaining{' '}
							<code>&lt;Col&gt;</code>s equally split the rest, with specific
							column classes like <code>&lt;Col xs=&#10100;7&#10101;&gt;</code>.
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
										{/* column sizing code started */}
										<Form>
											<Row>
												<Col xs={7}>
													<Form.Control placeholder="City" />
												</Col>
												<Col>
													<Form.Control placeholder="State" />
												</Col>
												<Col>
													<Form.Control placeholder="Zip" />
												</Col>
											</Row>
										</Form>
										{/* end of column sizing code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ColumnSizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of column sizing */}

			<hr className="mb-5 mt-7" />

			{/* auto sizing */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Auto-sizing</h3>
						<p>
							The example below uses a flexbox utility to vertically center the
							contents and changes <code>&lt;Col&gt;</code> to{' '}
							<code>&lt;Col xs="auto"&gt;</code> so that your columns only take
							up as much space as needed. Put another way, the column sizes
							itself based on on the contents.
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
										{/* auto sizing code started */}
										<Form>
											<Row className="align-items-center">
												<Col xs="auto">
													<Form.Label htmlFor="inlineFormInput" visuallyHidden>
														Name
													</Form.Label>
													<Form.Control
														className="mb-2"
														id="inlineFormInput"
														placeholder="Jane Doe"
													/>
												</Col>
												<Col xs="auto">
													<Form.Label
														htmlFor="inlineFormInputGroup"
														visuallyHidden
													>
														Username
													</Form.Label>
													<InputGroup className="mb-2">
														<InputGroup.Text>@</InputGroup.Text>
														<FormControl
															id="inlineFormInputGroup"
															placeholder="Username"
														/>
													</InputGroup>
												</Col>
												<Col xs="auto">
													<Form.Check
														type="checkbox"
														id="autoSizingCheck"
														className="mb-2"
														label="Remember me"
													/>
												</Col>
												<Col xs="auto">
													<Button type="submit" className="mb-2">
														Submit
													</Button>
												</Col>
											</Row>
										</Form>
										{/* end of auto sizing code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AutoSizingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of auto sizing */}

			{/* auto sizing more */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-4">
					<div className="mb-4">
						<p>
							You can then remix that once again with size-specific column
							classes.
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
										{/* auto sizing more code started */}
										<Form>
											<Row className="align-items-center">
												<Col sm={3} className="my-1">
													<Form.Label
														htmlFor="inlineFormInputName"
														visuallyHidden
													>
														Name
													</Form.Label>
													<Form.Control
														id="inlineFormInputName"
														placeholder="Jane Doe"
													/>
												</Col>
												<Col sm={3} className="my-1">
													<Form.Label
														htmlFor="inlineFormInputGroupUsername"
														visuallyHidden
													>
														Username
													</Form.Label>
													<InputGroup>
														<InputGroup.Text>@</InputGroup.Text>
														<FormControl
															id="inlineFormInputGroupUsername"
															placeholder="Username"
														/>
													</InputGroup>
												</Col>
												<Col xs="auto" className="my-1">
													<Form.Check
														type="checkbox"
														id="autoSizingCheck2"
														label="Remember me"
													/>
												</Col>
												<Col xs="auto" className="my-1">
													<Button type="submit">Submit</Button>
												</Col>
											</Row>
										</Form>
										{/* end of auto sizing more code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AutoSizingMoreCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of auto sizing more */}
		</Fragment>
	);
};

export default Layouts;
