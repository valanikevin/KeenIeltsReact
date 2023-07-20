// import node module libraries
import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

// import layouts
import NavbarBrandOnly from 'layouts/marketing/navbars/NavbarBrandOnly';
import FooterWithSocialIcons from 'layouts/marketing/footers/FooterWithSocialIcons';

const NotFound = (props) => {
	return (
		<main>
			<section className="bg-white">
				<Container className="d-flex flex-column">
					<NavbarBrandOnly />
					<main>
						{props.children}
						<Outlet />
					</main>
					<FooterWithSocialIcons />
				</Container>
			</section>
		</main>
	);
};

export default NotFound;
