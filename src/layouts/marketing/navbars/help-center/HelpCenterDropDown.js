// import node module libraries
import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Badge, Dropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

// import data files
import HelpCenterRoutes from 'routes/marketing/HelpCenterRoutes';

const HelpCenterDropDown = () => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1224px)'
	});

	const getTitle = (item) => {
		return item.badge ? (
			<Link to={item.link} className="dropdown-item">
				{item.menuitem}
				<Badge
					className="ms-1"
					bg={item.badgecolor ? item.badgecolor : 'primary'}
				>
					{item.badge}
				</Badge>
			</Link>
		) : (
			<Link to={item.link} className="dropdown-item">
				{item.menuitem}
			</Link>
		);
	};

	const NavbarDesktop = () => {
		return (
			<Fragment>
				{HelpCenterRoutes.map((item, index) => {
					return (
						<Dropdown key={index}>
							<Dropdown.Toggle variant="transaprent" className="text-dark">
								Help Center
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul" show>
								{item.children.map((submenu, submenuindex) => {
									return submenu.children === undefined ? (
										<Dropdown.Item as="li" key={submenuindex} bsPrefix=" ">
											{getTitle(submenu)}
										</Dropdown.Item>
									) : (
										''
									);
								})}
							</Dropdown.Menu>
						</Dropdown>
					);
				})}
			</Fragment>
		);
	};
	const NavbarMobile = () => {
		return (
			<Fragment>
				{HelpCenterRoutes.slice(0, 1).map((item, index) => {
					return (
						<Dropdown key={index}>
							<Dropdown.Toggle variant="transaprent" className="text-black-50">
								Help Center
							</Dropdown.Toggle>
							<Dropdown.Menu as="ul">
								{item.children.map((submenu, submenuindex) => {
									return submenu.children === undefined ? (
										<Dropdown.Item as="li" key={submenuindex} bsPrefix=" ">
											{getTitle(submenu)}
										</Dropdown.Item>
									) : (
										''
									);
								})}
							</Dropdown.Menu>
						</Dropdown>
					);
				})}
			</Fragment>
		);
	};
	return (
		<Fragment>
			{/* There is only one setting between NavbarDesktop and NavbarMobile component i.e. show property used with <Dropdown.Menu show> tag */}
			{isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
		</Fragment>
	);
};

export default HelpCenterDropDown;
