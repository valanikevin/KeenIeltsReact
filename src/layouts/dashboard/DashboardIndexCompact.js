// import node module libraries
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// import sub components
import NavbarCompact from './navbars/NavbarCompact';
import HeaderDefault from './HeaderDefault';

const DashboardIndexCompact = (props) => {
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};

	return (
		<div id="db-wrapper" className={`${showMenu ? '' : 'toggled'}`}>
			<div className="navbar-vertical-compact navbar">
				<NavbarCompact
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>
			</div>
			<div id="page-content-for-mini">
				<div className="header">
					<HeaderDefault
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
					/>
				</div>
				<div className="container-fluid p-4">
					{props.children}
					<Outlet />
				</div>
			</div>
		</div>
	);
};
export default DashboardIndexCompact;
