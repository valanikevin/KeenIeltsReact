// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Nav, Tab, Badge } from 'react-bootstrap';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import ImgPlaceholder from 'assets/images/placeholder/4by3.jpg';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import sub components
import { AvatarGroup, Avatar, Ratio } from './Avatar';

// import react code data file
import {
	AvatarsCode,
	InitialsCode,
	StatusIndicator,
	AvatarGroups,
	AvatarGroupsTooltip,
	AvatarShapes,
	AvatarRatio,
	AvatarDarkColor,
	AvatarSoftColor
} from 'data/code/AvatarCode';

const AvatarStyles = () => {
	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">
								Avatar <Badge bg="primary">Geeks Only</Badge>
							</h1>
							<p className="mb-0 ">
								Cool avatars with different shapes, sizes and with the
								possibility to group them.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/*  Default  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="default-avatar" className="mb-4">
						<h3>Avatars </h3>
						<p>
							Use avatar sizing via class on{' '}
							<code>avatar-* xxl, xl, lg, md, sm, xs</code>
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
										<Avatar
											size="xxl"
											type="image"
											src={Avatar1}
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="xl"
											type="image"
											src={Avatar1}
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="lg"
											type="image"
											src={Avatar1}
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="md"
											type="image"
											src={Avatar1}
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="sm"
											type="image"
											src={Avatar1}
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="xs"
											type="image"
											src={Avatar1}
											className="rounded-circle"
											status="online"
											alt="G K"
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AvatarsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of Default */}

			<hr className="mb-5 mt-7" />

			{/*  intials avatar  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="intials-avatar" className="mb-4">
						<h3>Initials </h3>
						<p>
							You won't always have an image for every user, so easily use{' '}
							<code>.avatar-initials</code> instead.
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
										<Avatar
											size="xxl"
											type="initial"
											name="G K"
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="xl"
											type="initial"
											name="G K"
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="lg"
											type="initial"
											name="G K"
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="sm"
											type="initial"
											name="G K"
											className="rounded-circle"
											status="online"
											alt="G K"
										/>{' '}
										<Avatar
											size="xs"
											type="initial"
											name="G K"
											className="rounded-circle"
											status="online"
											alt="G K"
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={InitialsCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of  intials avatar */}

			<hr className="mb-5 mt-7" />

			{/*  status avatar  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="status-avatar" className="mb-4">
						<h3>Status Indicator </h3>
						<p className="mb-5">
							Use <code>.avatar-indicators</code> class on{' '}
							<code> div.avatar</code> element
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											{' '}
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											{' '}
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										<Avatar
											size="xxl"
											src={Avatar1}
											type="image"
											status="online"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="xl"
											src={Avatar1}
											type="image"
											status="away"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="lg"
											src={Avatar1}
											type="image"
											status="offline"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											src={Avatar1}
											type="image"
											status="online"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="sm"
											src={Avatar1}
											type="image"
											status="away"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="xs"
											src={Avatar1}
											type="image"
											status="online"
											className="rounded-circle"
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={StatusIndicator} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of status avatar */}

			<hr className="mb-5 mt-7" />

			{/*  group avatar  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="group-avatar" className="mb-4">
						<h3>Groups </h3>
						<p className="mb-5">
							Use <code>&lt;Avatar&gt;</code> within{' '}
							<code>&lt;AvatarGroup&gt;</code> to create Avtar Group. Set{' '}
							<code>type = image</code> or <code>initial</code> for Image avtar
							and avtar with initial respectivly.{' '}
						</p>
					</div>

					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											{' '}
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											{' '}
											React{' '}
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										<div className="d-lg-flex">
											<AvatarGroup className="me-2">
												<Avatar
													size="lg"
													src={Avatar1}
													type="image"
													className="rounded-circle"
												/>
												<Avatar
													size="lg"
													src={Avatar2}
													type="image"
													className="rounded-circle"
												/>
												<Avatar
													size="lg"
													src={Avatar3}
													type="image"
													className="rounded-circle"
												/>
												<Avatar
													size="lg"
													src={Avatar4}
													type="image"
													className="rounded-circle"
												/>
											</AvatarGroup>
											<AvatarGroup>
												<Avatar
													size="lg"
													type="initial"
													name="G K"
													variant="primary"
													className="rounded-circle"
												/>
												<Avatar
													size="lg"
													type="initial"
													name="G K"
													variant="warning"
													className="rounded-circle"
												/>
												<Avatar
													size="lg"
													type="initial"
													name="G K"
													variant="success"
													className="rounded-circle"
												/>
												<Avatar
													size="lg"
													type="initial"
													name="G K"
													variant="info"
													className="rounded-circle"
												/>
											</AvatarGroup>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AvatarGroups} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of group avatar */}

			<hr className="mb-5 mt-7" />

			{/*  group avatar with image or avtar tooltip  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="group-avatar" className="mb-4">
						<h3>Groups with tooltip </h3>
						<p className="mb-5">
							Apply above settings mentioned in Avtar Group example + set{' '}
							<code>name = name of avtar in string format </code> and add{' '}
							<code>imgtooltip</code> parameters to add image tooltip.{' '}
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
											React{' '}
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										<div className="d-lg-flex">
											<AvatarGroup className="me-2">
												<Avatar
													size="lg"
													src={Avatar1}
													type="image"
													className="rounded-circle"
													name="Jacob Wilson"
													imgtooltip
												/>
												<Avatar
													size="lg"
													src={Avatar2}
													type="image"
													className="rounded-circle"
													name="Dianna Smiley"
													imgtooltip
												/>
												<Avatar
													size="lg"
													src={Avatar3}
													type="image"
													className="rounded-circle"
													name="Kristin Watson"
													imgtooltip
												/>
												<Avatar
													size="lg"
													src={Avatar4}
													type="image"
													className="rounded-circle"
													name="Nia Sikhone"
													imgtooltip
												/>
											</AvatarGroup>
											<AvatarGroup className="me-2">
												<Avatar
													size="lg"
													type="initial"
													variant="primary"
													className="rounded-circle"
													name="Jacob Wilson"
													imgtooltip
												/>
												<Avatar
													size="lg"
													type="initial"
													variant="warning"
													className="rounded-circle"
													name="Dianna Smiley"
													imgtooltip
												/>
												<Avatar
													size="lg"
													type="initial"
													variant="success"
													className="rounded-circle"
													name="Kristin Watson"
													imgtooltip
												/>
												<Avatar
													size="lg"
													type="initial"
													variant="info"
													className="rounded-circle"
													name="Nia Sikhone"
													imgtooltip
												/>
											</AvatarGroup>

											<AvatarGroup>
												<Avatar
													size="lg"
													type="initial"
													variant="primary"
													className="rounded-circle"
													name="Jacob Wilson"
													imgtooltip
													soft
												/>
												<Avatar
													size="lg"
													type="initial"
													variant="warning"
													className="rounded-circle"
													name="Dianna Smiley"
													imgtooltip
													soft
												/>
												<Avatar
													size="lg"
													type="initial"
													variant="success"
													className="rounded-circle"
													name="Kristin Watson"
													imgtooltip
													soft
												/>
												<Avatar
													size="lg"
													type="initial"
													variant="info"
													className="rounded-circle"
													name="Nia Sikhone"
													imgtooltip
													soft
												/>
											</AvatarGroup>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AvatarGroupsTooltip} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of group avatar with image or avtar tooltip */}

			<hr className="mb-5 mt-7" />

			{/*  shape avatar  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="shape-avatar" className="mb-4">
						<h3>Shape </h3>
						<p className="mb-5">
							Use <code>.rounded</code> and <code>.rounded-circle</code> class
							to make avatar rounded and circlular respectively.
						</p>
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											{' '}
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											{' '}
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										<div className="d-lg-flex">
											<div className="me-4">
												<Avatar
													size="lg"
													src={Avatar1}
													type="image"
													className="rounded"
												/>{' '}
												<Avatar
													size="lg"
													src={Avatar2}
													type="image"
													className="rounded-circle me-1"
												/>
											</div>
											<div>
												<Avatar
													size="lg"
													type="initial"
													name="G K"
													variant="primary"
													className="rounded"
												/>{' '}
												<Avatar
													size="lg"
													type="initial"
													name="G K"
													variant="warning"
													className="rounded-circle"
												/>
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AvatarShapes} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of shape avatar */}

			<hr className="mb-5 mt-7" />

			{/*  ratio  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="ratio" className="mb-4">
						<h3>Ratio </h3>
						<p>
							For using <code>4:3</code> ratio size between the width and the
							height apply <code>size</code> attribute with{' '}
							<code>xxl, xl, lg, md, sm, xs</code> possible value with{' '}
							<code>&lt;Ratio&gt;</code> component.
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
										<Ratio
											src={ImgPlaceholder}
											size="xxl"
											className="me-1 rounded"
										/>{' '}
										<Ratio
											src={ImgPlaceholder}
											size="xl"
											className="me-1 rounded"
										/>{' '}
										<Ratio
											src={ImgPlaceholder}
											size="lg"
											className="me-1 rounded"
										/>{' '}
										<Ratio
											src={ImgPlaceholder}
											size="md"
											className="me-1 rounded"
										/>{' '}
										<Ratio
											src={ImgPlaceholder}
											size="sm"
											className="me-1 rounded"
										/>{' '}
										<Ratio
											src={ImgPlaceholder}
											size="xs"
											className="me-1 rounded"
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AvatarRatio} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of ratio */}

			<hr className="mb-5 mt-7" />

			{/*  color  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="color" className="mb-4">
						<h3>Color </h3>
						<p>
							Predefined avatar color and styles for more usage. Use{' '}
							<code>.avatar-*</code> classes.
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
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="primary"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="secondary"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="success"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="danger"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="warning"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="info"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="light"
											className="rounded-circle text-dark"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											variant="dark"
											className="rounded-circle"
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AvatarDarkColor} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>

					<Tab.Container defaultActiveKey="design">
						<Card className="mt-5 mb-5">
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
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="primary"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="secondary"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="success"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="danger"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="warning"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="info"
											className="rounded-circle"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="light"
											className="rounded-circle text-dark"
										/>{' '}
										<Avatar
											size="md"
											type="initial"
											name="G K"
											soft
											variant="dark"
											className="rounded-circle"
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={AvatarSoftColor} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of color */}
		</Fragment>
	);
};

export default AvatarStyles;
