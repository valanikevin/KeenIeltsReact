// import node module libraries
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import layouts
import FooterWithLinks from './footers/FooterWithLinks';
import NavbarHelpCenter from './navbars/help-center/NavbarHelpCenter';

const HelpCenterLayout = (props) => {
	return (
		<Fragment>
			<NavbarHelpCenter className="navbar-default" />
			<main className="bg-white">
				{props.children}
				<Outlet />
			</main>
			<FooterWithLinks />
		</Fragment>
	);
};

export default HelpCenterLayout;
