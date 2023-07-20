// import node module libraries
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

const LayoutFooterLinks = (props) => {
	return (
		<Fragment>
			<NavbarDefault login />
			<main>
				{props.children}
				<Outlet />
			</main>
			<FooterWithLinks />
		</Fragment>
	);
};

export default LayoutFooterLinks;
