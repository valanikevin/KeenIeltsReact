// import node module libraries
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

// import layouts
import NavbarMegaMenu from 'layouts/marketing/navbars/mega-menu/NavbarMegaMenu';
import FooterWithLinks from 'layouts/marketing/footers/FooterWithLinks';

const AcademyLayout = (props) => {
	return (
		<Fragment>
			{/* Default Navbar */}
			<NavbarMegaMenu />
			<main>
				{props.children}
				<Outlet />
			</main>
			{/* Footer section */}
			<FooterWithLinks />
		</Fragment>
	);
};

export default AcademyLayout;
