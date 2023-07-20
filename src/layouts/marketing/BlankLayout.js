// import node module libraries
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const BlankLayout = (props) => {
	return (
		<Fragment>
			{props.children}
			<Outlet />
		</Fragment>
	);
};

export default BlankLayout;
