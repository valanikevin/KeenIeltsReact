// import node module libraries
import { Fragment, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
	ListGroup,
	Accordion,
	Card,
	Image,
	Badge,
	useAccordionButton,
	AccordionContext
} from 'react-bootstrap';

// import simple bar scrolling used for notification item scrolling
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

// import media files
import InverseLogo from 'assets/images/brand/logo/logo-inverse.svg';
import GiftBox from 'assets/images/background/giftbox.png';

// import routes file
import { DashboardMenu } from 'routes/dashboard/DashboardRoutes';

const NavbarVertical = (props) => {
	const location = useLocation();

	const CustomToggle = ({ children, eventKey, icon }) => {
		const { activeEventKey } = useContext(AccordionContext);
		const decoratedOnClick = useAccordionButton(eventKey, () =>
			console.log('Event Key : ' + eventKey)
		);
		const isCurrentEventKey = activeEventKey === eventKey;
		return (
			<li className="nav-item">
				<Link
					className="nav-link "
					onClick={decoratedOnClick}
					to="#!"
					data-bs-toggle="collapse"
					data-bs-target="#navDashboard"
					aria-expanded={isCurrentEventKey ? true : false}
					aria-controls="navDashboard"
				>
					{icon ? <i className={`nav-icon fe fe-${icon} me-2`}></i> : ''}{' '}
					{children}
				</Link>
			</li>
		);
	};

	const generateLink = (item) => {
		return (
			<Link
				className={`nav-link ${
					location.pathname === item.link ? 'active' : ''
				}`}
				to={item.link}
				onClick={(e) =>
					isMobile ? props.onClick(!props.showMenu) : props.showMenu
				}
			>
				{item.name}
				{''}
				{item.badge ? (
					<Badge
						className="ms-1"
						bg={item.badgecolor ? item.badgecolor : 'primary'}
					>
						{item.badge}
					</Badge>
				) : (
					''
				)}
			</Link>
		);
	};

	const isMobile = useMediaQuery({ maxWidth: 767 });

	return (
		<Fragment>
			<SimpleBar style={{ maxHeight: '100vh' }}>
				<div className="nav-scroller">
					<Link className="navbar-brand" to="/dashboard/overview">
						<Image src={InverseLogo} alt="" />
					</Link>
				</div>
				{/* Dashboard Menu */}
				<Accordion
					defaultActiveKey="0"
					as="ul"
					className="navbar-nav flex-column"
				>
					{DashboardMenu.map(function (menu, index) {
						if (menu.grouptitle) {
							return (
								<Card bsPrefix="nav-item" key={index}>
									{/* group title item */}
									<div className="navbar-heading">{menu.title}</div>
									{/* end of group title item */}
								</Card>
							);
						} else {
							if (menu.children) {
								return (
									<Fragment key={index}>
										{/* main menu / menu level 1 / root items */}
										<CustomToggle eventKey={menu.id} icon={menu.icon}>
											{menu.title}
											{menu.badge ? (
												<Badge
													className="ms-1"
													bg={menu.badgecolor ? menu.badgecolor : 'primary'}
												>
													{menu.badge}
												</Badge>
											) : (
												''
											)}
										</CustomToggle>
										<Accordion.Collapse
											eventKey={menu.id}
											as="li"
											bsPrefix="nav-item"
										>
											<Accordion className="navbar-nav flex-column" as="ul">
												<ListGroup
													as="ul"
													bsPrefix=""
													className="nav flex-column"
												>
													{menu.children.map(function (
														menuItem,
														menuItemIndex
													) {
														if (menuItem.children) {
															return (
																<Fragment key={menuItemIndex}>
																	{/* second level with children */}
																	<CustomToggle eventKey={menuItem.id}>
																		{menuItem.title}
																		{menuItem.badge ? (
																			<Badge
																				className="ms-1"
																				bg={
																					menuItem.badgecolor
																						? menuItem.badgecolor
																						: 'primary'
																				}
																			>
																				{menuItem.badge}
																			</Badge>
																		) : (
																			''
																		)}
																	</CustomToggle>
																	<Accordion.Collapse
																		eventKey={menuItem.id}
																		bsPrefix="nav-item"
																		as="li"
																	>
																		<Accordion
																			className="navbar-nav flex-column"
																			as="ul"
																		>
																			<ListGroup
																				as="ul"
																				bsPrefix=""
																				className="nav flex-column"
																			>
																				{/* third level menu started  */}
																				{menuItem.children.map(function (
																					subMenuItem,
																					subMenuItemIndex
																				) {
																					return subMenuItem.children ? (
																						<Fragment key={subMenuItemIndex}>
																							<CustomToggle
																								eventKey={subMenuItem.id}
																							>
																								{subMenuItem.title}
																								{subMenuItem.badge ? (
																									<Badge
																										className="ms-1"
																										bg={
																											subMenuItem.badgecolor
																												? subMenuItem.badgecolor
																												: 'primary'
																										}
																									>
																										{subMenuItem.badge}
																									</Badge>
																								) : (
																									''
																								)}
																							</CustomToggle>
																							<Accordion.Collapse
																								eventKey={subMenuItem.id}
																								bsPrefix="nav-item"
																								as="li"
																							>
																								<ListGroup
																									as="ul"
																									bsPrefix=""
																									className="nav flex-column"
																								>
																									{subMenuItem.children.map(
																										function (
																											thirdLevelItem,
																											thirdLevelItemIndex
																										) {
																											return (
																												<ListGroup.Item
																													key={
																														thirdLevelItemIndex
																													}
																													as="li"
																													bsPrefix="nav-item"
																												>
																													{/* third level with children */}
																													{generateLink(
																														thirdLevelItem
																													)}
																												</ListGroup.Item>
																											);
																										}
																									)}
																								</ListGroup>
																							</Accordion.Collapse>
																						</Fragment>
																					) : (
																						<ListGroup.Item
																							key={subMenuItemIndex}
																							as="li"
																							bsPrefix="nav-item"
																						>
																							{/* third level without children */}
																							{generateLink(subMenuItem)}
																						</ListGroup.Item>
																					);
																				})}
																				{/* end of third level menu  */}
																			</ListGroup>
																		</Accordion>
																	</Accordion.Collapse>
																	{/* end of second level with children */}
																</Fragment>
															);
														} else {
															return (
																<ListGroup.Item
																	as="li"
																	bsPrefix="nav-item"
																	key={menuItemIndex}
																>
																	{/* second level without children */}
																	{generateLink(menuItem)}
																	{/* end of second level without children  */}
																</ListGroup.Item>
															);
														}
													})}
												</ListGroup>
											</Accordion>
										</Accordion.Collapse>
										{/* end of main menu / menu level 1 / root items */}
									</Fragment>
								);
							} else {
								return (
									<Card bsPrefix="nav-item" key={index}>
										{/* menu item without any childern items like Help Center, Documentation and Changelog items*/}
										<Link
											to={menu.link}
											className={`nav-link ${
												location.pathname === menu.link ? 'active' : ''
											}`}
										>
											{typeof menu.icon === 'string' ? (
												<i className={`nav-icon fe fe-${menu.icon} me-2`}></i>
											) : (
												menu.icon
											)}
											{menu.title}
											{menu.badge ? (
												<Badge
													className="ms-1"
													bg={menu.badgecolor ? menu.badgecolor : 'primary'}
												>
													{menu.badge}
												</Badge>
											) : (
												''
											)}
										</Link>
										{/* end of menu item without any childern items */}
									</Card>
								);
							}
						}
					})}
				</Accordion>
				{/* end of Dashboard Menu */}

				<Card className="bg-dark-primary shadow-none text-center mx-4 my-8">
					<Card.Body className="py-6">
						<Image src={GiftBox} alt="" />
						<div className="mt-4">
							<h5 className="text-white">Unlimited Access</h5>
							<p className="text-white-50 fs-6">
								Upgrade your plan from a Free trial, to select ‘Business Plan’.
								Start Now
							</p>
							<Link to="#!" className="btn btn-white btn-sm mt-2">
								Upgrade Now
							</Link>
						</div>
					</Card.Body>
				</Card>
			</SimpleBar>
		</Fragment>
	);
};

export default NavbarVertical;
