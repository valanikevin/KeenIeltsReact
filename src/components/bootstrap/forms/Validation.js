// import node module libraries
import { Fragment, useState } from 'react';
import {
	Col,
	Row,
	Card,
	Nav,
	Tab,
	Form,
	Button,
	InputGroup
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

// import custom components
import PageHeading from 'components/elements/bootstrap/common/PageHeading';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code file
import {
	HTML5ValidationCode,
	ServerSideRenderingCode,
	ValidationTooltipsCode,
	InputGroupValidationCode
} from 'data/code/forms/ValidationCode';

const Validation = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
	};

	const schema = yup.object().shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		username: yup.string().required(),
		city: yup.string().required(),
		state: yup.string().required(),
		zip: yup.string().required(),
		terms: yup.bool().required().oneOf([true], 'Terms must be accepted')
	});
	return (
		<Fragment>
			<PageHeading
				title="Validation"
				description="Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript."
			/>

			{/* native HTML5 form validation */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Native HTML5 form validation</h3>
						<p>
							Bootstrap scopes the <code>:valid</code> and <code>:invalid</code>{' '}
							styles to parent <code>.was-validated</code> class, usually
							applied to the <code>&lt;Form&gt;</code> (you can use the{' '}
							<code>validated</code> prop as a shortcut). Otherwise, any
							required field without a value shows up as invalid on page load.
							This way, you may choose when to activate them (typically after
							form submission is attempted).
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
										{/* native HTML5 form validation */}
										<Form
											noValidate
											validated={validated}
											onSubmit={handleSubmit}
										>
											<Row className="mb-3">
												<Form.Group
													as={Col}
													md="4"
													controlId="validationCustom01"
												>
													<Form.Label>First name</Form.Label>
													<Form.Control
														required
														type="text"
														placeholder="First name"
														defaultValue="Mark"
													/>
													<Form.Control.Feedback>
														Looks good!
													</Form.Control.Feedback>
												</Form.Group>
												<Form.Group
													as={Col}
													md="4"
													controlId="validationCustom02"
												>
													<Form.Label>Last name</Form.Label>
													<Form.Control
														required
														type="text"
														placeholder="Last name"
														defaultValue="Otto"
													/>
													<Form.Control.Feedback>
														Looks good!
													</Form.Control.Feedback>
												</Form.Group>
												<Form.Group
													as={Col}
													md="4"
													controlId="validationCustomUsername"
												>
													<Form.Label>Username</Form.Label>
													<InputGroup hasValidation>
														<InputGroup.Text id="inputGroupPrepend">
															@
														</InputGroup.Text>
														<Form.Control
															type="text"
															placeholder="Username"
															aria-describedby="inputGroupPrepend"
															required
														/>
														<Form.Control.Feedback type="invalid">
															Please choose a username.
														</Form.Control.Feedback>
													</InputGroup>
												</Form.Group>
											</Row>
											<Row className="mb-3">
												<Form.Group
													as={Col}
													md="6"
													controlId="validationCustom03"
												>
													<Form.Label>City</Form.Label>
													<Form.Control
														type="text"
														placeholder="City"
														required
													/>
													<Form.Control.Feedback type="invalid">
														Please provide a valid city.
													</Form.Control.Feedback>
												</Form.Group>
												<Form.Group
													as={Col}
													md="3"
													controlId="validationCustom04"
												>
													<Form.Label>State</Form.Label>
													<Form.Control
														type="text"
														placeholder="State"
														required
													/>
													<Form.Control.Feedback type="invalid">
														Please provide a valid state.
													</Form.Control.Feedback>
												</Form.Group>
												<Form.Group
													as={Col}
													md="3"
													controlId="validationCustom05"
												>
													<Form.Label>Zip</Form.Label>
													<Form.Control
														type="text"
														placeholder="Zip"
														required
													/>
													<Form.Control.Feedback type="invalid">
														Please provide a valid zip.
													</Form.Control.Feedback>
												</Form.Group>
											</Row>
											<Form.Group className="mb-3">
												<Form.Check
													required
													label="Agree to terms and conditions"
													feedback="You must agree before submitting."
													feedbackType="invalid"
												/>
											</Form.Group>
											<Button type="submit">Submit form</Button>
										</Form>
										{/* end of native HTML5 form validation */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={HTML5ValidationCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of native HTML5 form validation */}

			<hr className="mb-5 mt-7" />

			{/* server-rendered styles */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Form libraries and server-rendered styles</h3>
						<p>
							It's often beneficial (especially in React) to handle form
							validation via a library like Formik, or react-formal. In those
							cases, <code>isValid</code> and <code>isInvalid</code> props can
							be added to form controls to manually apply validation styles.
							Below is a quick example integrating with Formik.
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
										{/* server-rendered styles code started */}
										<Formik
											validationSchema={schema}
											onSubmit={console.log}
											initialValues={{
												firstName: 'Mark',
												lastName: 'Otto',
												username: '',
												city: '',
												state: '',
												zip: '',
												terms: false
											}}
										>
											{({
												handleSubmit,
												handleChange,
												handleBlur,
												values,
												touched,
												isValid,
												errors
											}) => (
												<Form noValidate onSubmit={handleSubmit}>
													<Row className="mb-3">
														<Form.Group
															as={Col}
															md="4"
															controlId="validationFormik01"
														>
															<Form.Label>First name</Form.Label>
															<Form.Control
																type="text"
																name="firstName"
																value={values.firstName}
																onChange={handleChange}
																isValid={touched.firstName && !errors.firstName}
															/>
															<Form.Control.Feedback>
																Looks good!
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="4"
															controlId="validationFormik02"
														>
															<Form.Label>Last name</Form.Label>
															<Form.Control
																type="text"
																name="lastName"
																value={values.lastName}
																onChange={handleChange}
																isValid={touched.lastName && !errors.lastName}
															/>

															<Form.Control.Feedback>
																Looks good!
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="4"
															controlId="validationFormikUsername"
														>
															<Form.Label>Username</Form.Label>
															<InputGroup hasValidation>
																<InputGroup.Text id="inputGroupPrepend">
																	@
																</InputGroup.Text>
																<Form.Control
																	type="text"
																	placeholder="Username"
																	aria-describedby="inputGroupPrepend"
																	name="username"
																	value={values.username}
																	onChange={handleChange}
																	isInvalid={!!errors.username}
																/>
																<Form.Control.Feedback type="invalid">
																	{errors.username}
																</Form.Control.Feedback>
															</InputGroup>
														</Form.Group>
													</Row>
													<Row className="mb-3">
														<Form.Group
															as={Col}
															md="6"
															controlId="validationFormik03"
														>
															<Form.Label>City</Form.Label>
															<Form.Control
																type="text"
																placeholder="City"
																name="city"
																value={values.city}
																onChange={handleChange}
																isInvalid={!!errors.city}
															/>

															<Form.Control.Feedback type="invalid">
																{errors.city}
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="3"
															controlId="validationFormik04"
														>
															<Form.Label>State</Form.Label>
															<Form.Control
																type="text"
																placeholder="State"
																name="state"
																value={values.state}
																onChange={handleChange}
																isInvalid={!!errors.state}
															/>
															<Form.Control.Feedback type="invalid">
																{errors.state}
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="3"
															controlId="validationFormik05"
														>
															<Form.Label>Zip</Form.Label>
															<Form.Control
																type="text"
																placeholder="Zip"
																name="zip"
																value={values.zip}
																onChange={handleChange}
																isInvalid={!!errors.zip}
															/>

															<Form.Control.Feedback type="invalid">
																{errors.zip}
															</Form.Control.Feedback>
														</Form.Group>
													</Row>
													<Form.Group className="mb-3">
														<Form.Check
															required
															name="terms"
															label="Agree to terms and conditions"
															onChange={handleChange}
															isInvalid={!!errors.terms}
															feedback={errors.terms}
															feedbackType="invalid"
															id="validationFormik0"
														/>
													</Form.Group>
													<Button type="submit">Submit form</Button>
												</Form>
											)}
										</Formik>
										{/* end of server-rendered styles code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ServerSideRenderingCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of server-rendered styles */}

			{/* tooltips */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mt-4">
					<div className="mb-4">
						<h3>Tooltips</h3>
						<p>
							If your form layout allows it, you can use the{' '}
							<code>tooltip</code> prop to display validation feedback in a
							styled tooltip. Be sure to have a parent with{' '}
							<code>position: relative</code> on it for tooltip positioning. In
							the example below, our column classes have this already, but your
							project may require an alternative setup.
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
										{/* tooltips code started */}
										<Formik
											validationSchema={schema}
											onSubmit={console.log}
											initialValues={{
												firstName: 'Mark',
												lastName: 'Otto',
												username: '',
												city: '',
												state: '',
												zip: '',
												file: null,
												terms: false
											}}
										>
											{({
												handleSubmit,
												handleChange,
												handleBlur,
												values,
												touched,
												isValid,
												errors
											}) => (
												<Form noValidate onSubmit={handleSubmit}>
													<Row className="mb-3">
														<Form.Group
															as={Col}
															md="4"
															controlId="validationFormik101"
															className="position-relative"
														>
															<Form.Label>First name</Form.Label>
															<Form.Control
																type="text"
																name="firstName"
																value={values.firstName}
																onChange={handleChange}
																isValid={touched.firstName && !errors.firstName}
															/>
															<Form.Control.Feedback tooltip>
																Looks good!
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="4"
															controlId="validationFormik102"
															className="position-relative"
														>
															<Form.Label>Last name</Form.Label>
															<Form.Control
																type="text"
																name="lastName"
																value={values.lastName}
																onChange={handleChange}
																isValid={touched.lastName && !errors.lastName}
															/>

															<Form.Control.Feedback tooltip>
																Looks good!
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="4"
															controlId="validationFormikUsername2"
														>
															<Form.Label>Username</Form.Label>
															<InputGroup hasValidation>
																<InputGroup.Text id="inputGroupPrepend">
																	@
																</InputGroup.Text>
																<Form.Control
																	type="text"
																	placeholder="Username"
																	aria-describedby="inputGroupPrepend"
																	name="username"
																	value={values.username}
																	onChange={handleChange}
																	isInvalid={!!errors.username}
																/>
																<Form.Control.Feedback type="invalid" tooltip>
																	{errors.username}
																</Form.Control.Feedback>
															</InputGroup>
														</Form.Group>
													</Row>
													<Row className="mb-3">
														<Form.Group
															as={Col}
															md="6"
															controlId="validationFormik103"
															className="position-relative"
														>
															<Form.Label>City</Form.Label>
															<Form.Control
																type="text"
																placeholder="City"
																name="city"
																value={values.city}
																onChange={handleChange}
																isInvalid={!!errors.city}
															/>

															<Form.Control.Feedback type="invalid" tooltip>
																{errors.city}
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="3"
															controlId="validationFormik104"
															className="position-relative"
														>
															<Form.Label>State</Form.Label>
															<Form.Control
																type="text"
																placeholder="State"
																name="state"
																value={values.state}
																onChange={handleChange}
																isInvalid={!!errors.state}
															/>
															<Form.Control.Feedback type="invalid" tooltip>
																{errors.state}
															</Form.Control.Feedback>
														</Form.Group>
														<Form.Group
															as={Col}
															md="3"
															controlId="validationFormik105"
															className="position-relative"
														>
															<Form.Label>Zip</Form.Label>
															<Form.Control
																type="text"
																placeholder="Zip"
																name="zip"
																value={values.zip}
																onChange={handleChange}
																isInvalid={!!errors.zip}
															/>

															<Form.Control.Feedback type="invalid" tooltip>
																{errors.zip}
															</Form.Control.Feedback>
														</Form.Group>
													</Row>
													<Form.Group className="position-relative mb-3">
														<Form.Label>File</Form.Label>
														<Form.Control
															type="file"
															required
															name="file"
															onChange={handleChange}
															isInvalid={!!errors.file}
														/>
														<Form.Control.Feedback type="invalid" tooltip>
															{errors.file}
														</Form.Control.Feedback>
													</Form.Group>
													<Form.Group className="position-relative mb-3">
														<Form.Check
															required
															name="terms"
															label="Agree to terms and conditions"
															onChange={handleChange}
															isInvalid={!!errors.terms}
															feedback={errors.terms}
															feedbackType="invalid"
															id="validationFormik106"
															feedbackTooltip
														/>
													</Form.Group>
													<Button type="submit">Submit form</Button>
												</Form>
											)}
										</Formik>
										{/* end of tooltips code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ValidationTooltipsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of tooltips */}

			<hr className="mb-5 mt-7" />

			{/* input group validation */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4">
						<h3>Input group validation</h3>
						<p>
							To properly show rounded corners in an{' '}
							<code>&lt;InputGroup&gt;</code> with validation, the{' '}
							<code>&lt;InputGroup&gt;</code> requires the hasValidation prop.
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
										{/* input group validation code started */}
										<InputGroup hasValidation>
											<InputGroup.Text>@</InputGroup.Text>
											<Form.Control type="text" required isInvalid />
											<Form.Control.Feedback type="invalid">
												Please choose a username.
											</Form.Control.Feedback>
										</InputGroup>
										{/* end of input group validation code */}
									</Tab.Pane>

									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={InputGroupValidationCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of input group validation */}
		</Fragment>
	);
};

export default Validation;
