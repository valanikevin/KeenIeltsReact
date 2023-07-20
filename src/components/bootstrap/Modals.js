// import node module libraries
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Col,
	Row,
	Card,
	Modal,
	Button,
	OverlayTrigger,
	Popover,
	Tooltip,
	Nav,
	Tab
} from 'react-bootstrap';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code data file
import {
	SampleExamplesCode,
	LiveDemoCode,
	LongContentCode,
	ScrollableModalCode,
	VerticallyCenteredCode,
	TooltipsPopoversCode,
	OptionalSizesCode
} from 'data/code/ModalsCode';

const Modals = () => {
	const [show, setShow] = useState(false);
	const [scrollShow, setScrollShow] = useState(false);
	const [scrollShow2, setScrollShow2] = useState(false);
	const [popoverTipShow, setpopoverTipShow] = useState(false);
	const [smShow, setSmShow] = useState(false);
	const [mdShow, setMdShow] = useState(false);
	const [lgShow, setLgShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const longContent = `<p>Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum.   Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl  consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
    laoreet rutrum faucibus dolor auctor.</p>
  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>`;

	function MyVerticallyCenteredModal(props) {
		return (
			<Modal
				{...props}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Modal title
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
	const [modalShow, setModalShow] = useState(false);

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Modal</h1>
							<p className="mb-0 ">
								Add dialogs to your site for lightboxes, user notifications, or
								completely custom content.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/* modal-example */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="examples" className="mb-4">
						<div className="mt-4" id="modal-components">
							<h3>Modal components</h3>
							<p>
								Below is a <code>static modal dialog </code>(without the
								positioning) to demonstrate the look and feel of the Modal.
							</p>
						</div>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
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
										{/* code started */}
										<div
											className="modal show"
											style={{ display: 'block', position: 'initial' }}
										>
											<Modal.Dialog>
												<Modal.Header closeButton>
													<Modal.Title>Modal title</Modal.Title>
												</Modal.Header>

												<Modal.Body>
													<p>Modal body text goes here.</p>
												</Modal.Body>

												<Modal.Footer>
													<Button variant="secondary">Close</Button>
													<Button variant="primary">Save changes</Button>
												</Modal.Footer>
											</Modal.Dialog>
										</div>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={SampleExamplesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of modal-example  */}

			<hr className="mb-5 mt-7" />

			{/* live-demo */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="live-demo" className="mb-4">
						<h3>Live Demo</h3>
						<p>
							A modal with header, body, and set of actions in the footer. Use{' '}
							<code>&lt;Modal&gt;</code> in combination with other components to
							show or hide your Modal. The
							<code>&lt;Modal&gt;</code> Component comes with a few convenient
							"sub components": <code>&lt;Modal.Header&gt;</code>,
							<code>&lt;Modal.Title&gt;</code>, <code>&lt;Modal.Body&gt;</code>,
							and <code>&lt;Modal.Footer&gt;</code>, which you can use to build
							the Modal content.
						</p>
						<p>
							Toggle a working modal demo by clicking the button below. It will
							slide down and fade in from the top of the page.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
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
										{/* code started */}
										<Button variant="primary" onClick={handleShow}>
											Launch demo modal
										</Button>
										<Modal show={show} onHide={handleClose}>
											<Modal.Header closeButton>
												<Modal.Title>Modal title</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												Woohoo, you're reading this text in a modal!
											</Modal.Body>
											<Modal.Footer>
												<Button variant="secondary" onClick={handleClose}>
													Close
												</Button>
												<Button variant="primary" onClick={handleClose}>
													Save Changes
												</Button>
											</Modal.Footer>
										</Modal>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={LiveDemoCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of live-demo  */}

			<hr className="mb-5 mt-7" />

			{/* scrolling-long-content */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-2">
					<div id="scrolling-long-content" className="mb-4">
						<h3>Scrolling long content</h3>
						<p>
							When modals become too long for the user’s viewport or device,
							they scroll independent of the page itself. Try the demo below to
							see what we mean.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
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
										{/* code started */}
										<Button
											variant="primary"
											onClick={() => setScrollShow(true)}
										>
											Launch demo modal
										</Button>
										<Modal
											show={scrollShow}
											onHide={() => setScrollShow(false)}
										>
											<Modal.Header closeButton>
												<Modal.Title>Modal title</Modal.Title>
											</Modal.Header>
											<Modal.Body
												dangerouslySetInnerHTML={{ __html: longContent }}
											></Modal.Body>
											<Modal.Footer>
												<Button
													variant="secondary"
													onClick={() => setScrollShow(false)}
												>
													Close
												</Button>
												<Button
													variant="primary"
													onClick={() => setScrollShow(false)}
												>
													Save Changes
												</Button>
											</Modal.Footer>
										</Modal>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={LongContentCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of scrolling-long-content  */}

			{/* scrolling-long-content */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="mb-4 mt-5">
						<p>
							You can also create a scrollable modal that allows scroll the
							modal body by adding <code>.modal-dialog-scrollable</code> to
							<code>.modal-dialog</code> and <code>style</code> in{' '}
							<code>&lt;Model.Body&gt;</code>.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
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
										{/* code started */}
										<Button
											variant="primary"
											onClick={() => setScrollShow2(true)}
										>
											Launch demo modal
										</Button>
										<Modal
											className="modal-dialog-scrollable"
											show={scrollShow2}
											onHide={() => setScrollShow2(false)}
										>
											<Modal.Header closeButton>
												<Modal.Title>Modal title</Modal.Title>
											</Modal.Header>
											<Modal.Body
												style={{ height: '500px' }}
												dangerouslySetInnerHTML={{ __html: longContent }}
											></Modal.Body>
											<Modal.Footer>
												<Button
													variant="secondary"
													onClick={() => setScrollShow2(false)}
												>
													Close
												</Button>
												<Button
													variant="primary"
													onClick={() => setScrollShow2(false)}
												>
													Save Changes
												</Button>
											</Modal.Footer>
										</Modal>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ScrollableModalCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of scrolling-long-content  */}

			<hr className="mb-5 mt-7" />

			{/* vertically-centered */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="vertically-centered" className="mb-4">
						<h3>Vertically centered</h3>
						<p>
							You can vertically center a modal by passing the{' '}
							<code>"centered"</code> prop.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
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
										{/* code started */}
										<Button
											variant="primary"
											onClick={() => setModalShow(true)}
										>
											Launch demo modal
										</Button>
										<MyVerticallyCenteredModal
											show={modalShow}
											onHide={() => setModalShow(false)}
										/>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={VerticallyCenteredCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  vertically-centered */}

			<hr className="mb-5 mt-7" />

			{/* tooltips-and-popovers */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="tooltips-and-popovers" className="mb-4">
						<h3>Tooltips and popovers</h3>
						<p>
							<Link to="#">Tooltips</Link> and <Link to="#">popovers</Link> can
							be placed within modals as needed. When modals are closed, any
							tooltips and popovers within are also automatically dismissed.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
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
										{/* code started */}
										<Button
											variant="primary"
											onClick={() => setpopoverTipShow(true)}
										>
											Launch demo modal
										</Button>
										<Modal
											show={popoverTipShow}
											onHide={() => setpopoverTipShow(false)}
										>
											<Modal.Header closeButton>
												<Modal.Title>Modal title</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<h5>Popover in a modal</h5>
												<p>
													This{' '}
													<OverlayTrigger
														trigger="click"
														placement="right"
														overlay={
															<Popover>
																<Popover.Header as="h3">
																	Popover title
																</Popover.Header>
																<Popover.Body>
																	Popover body content is set in this attribute.
																</Popover.Body>
															</Popover>
														}
													>
														<Button variant="secondary">button</Button>
													</OverlayTrigger>{' '}
													triggers a popover on click.
												</p>
												<hr />
												<h5>Tooltips in a modal</h5>
												<div>
													<OverlayTrigger
														trigger={['hover', 'focus']}
														overlay={<Tooltip>Tooltip</Tooltip>}
													>
														<Link to="#" variant="secondary" size="sm">
															This Link
														</Link>
													</OverlayTrigger>{' '}
													and
													<OverlayTrigger
														trigger={['hover', 'focus']}
														overlay={<Tooltip>Tooltip</Tooltip>}
													>
														<Link
															to="#"
															variant="secondary"
															size="sm"
															className="m-1"
														>
															That Link
														</Link>
													</OverlayTrigger>{' '}
													have tooltips on hover.
												</div>
											</Modal.Body>
											<Modal.Footer>
												<Button
													variant="secondary"
													onClick={() => setpopoverTipShow(false)}
												>
													Close
												</Button>
												<Button
													variant="primary"
													onClick={() => setpopoverTipShow(false)}
												>
													Save Changes
												</Button>
											</Modal.Footer>
										</Modal>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={TooltipsPopoversCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of tooltips-and-popovers  */}

			<hr className="mb-5 mt-7" />

			{/* optional-sizes */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12} className="mb-5">
					<div id="optional-sizes" className="mb-4">
						<h3>Optional sizes</h3>
						<p>
							You can specify a bootstrap large or small modal by using the{' '}
							<code>"size"</code> prop.{' '}
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
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
										{/* code started */}
										<Button onClick={() => setLgShow(true)}>
											Extra large modal
										</Button>{' '}
										<Button onClick={() => setMdShow(true)}>Large modal</Button>{' '}
										<Button onClick={() => setSmShow(true)}>Small modal</Button>
										<Modal
											size="sm"
											show={smShow}
											onHide={() => setSmShow(false)}
											aria-labelledby="example-modal-sizes-title-sm"
										>
											<Modal.Header closeButton>
												<Modal.Title id="example-modal-sizes-title-sm">
													Small modal
												</Modal.Title>
											</Modal.Header>
											<Modal.Body>...</Modal.Body>
										</Modal>
										<Modal
											size="lg"
											show={lgShow}
											onHide={() => setLgShow(false)}
											aria-labelledby="example-modal-sizes-title-lg"
										>
											<Modal.Header closeButton>
												<Modal.Title id="example-modal-sizes-title-lg">
													Extra large modal
												</Modal.Title>
											</Modal.Header>
											<Modal.Body>...</Modal.Body>
										</Modal>
										<Modal
											show={mdShow}
											onHide={() => setMdShow(false)}
											aria-labelledby="example-modal-sizes-title-lg"
										>
											<Modal.Header closeButton>
												<Modal.Title id="example-modal-sizes-title-lg">
													Large modal
												</Modal.Title>
											</Modal.Header>
											<Modal.Body>...</Modal.Body>
										</Modal>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={OptionalSizesCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of optional-sizes */}
		</Fragment>
	);
};

export default Modals;
