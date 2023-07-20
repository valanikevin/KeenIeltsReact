// import node module libraries
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import layouts
import NavbarJobPages from 'layouts/marketing/navbars/NavbarJobPages';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

const JobListingLayout = (props) => {
	return (
		<Fragment>
			<NavbarJobPages />
			<main>
				{props.children}
				<Outlet />
			</main>
			<FooterWithLinks />
		</Fragment>
	);
};

export default JobListingLayout;
