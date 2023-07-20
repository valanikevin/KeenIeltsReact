// import node module libraries
import { Fragment, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavDropdown } from 'react-bootstrap';

// import context file
import { AppConfigContext } from 'context/Context';

const DocumentMenu = ({ className }) => {
	const ConfigContext = useContext(AppConfigContext);

	const isDesktop = useMediaQuery({
		query: '(min-width: 1224px)'
	});

	const DocumentationsMenuHTML = () => {
		return (
			<div className="ms-3 lh-3">
				<h5 className="mb-0">Documentations</h5>
				<p className="mb-0 fs-6">Browse the all documentation</p>
			</div>
		);
	};
	const ChangelogMenuHTML = () => {
		return (
			<div className="ms-3 lh-3">
				<h5 className="mb-0">
					Changelog{' '}
					<span className="text-primary ms-1">
						v{ConfigContext.appStats.version}
					</span>
				</h5>
				<p className="mb-0 fs-6">See what's new</p>
			</div>
		);
	};

	const DocMenuDesktop = () => {
		return (
			<NavDropdown
				title="..."
				id="basic-nav-dropdown"
				bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
				className={className}
				show
			>
				<NavDropdown.Item href="/dashboard/documentation" className="py-2 px-3">
					<div className="d-flex align-items-center">
						<i className="fe fe-file-text fs-3 text-primary"></i>
						<DocumentationsMenuHTML />
					</div>
				</NavDropdown.Item>
				<NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
					<div className="d-flex align-items-center">
						<i className="fe fe-layers fs-3 text-primary"></i>
						<ChangelogMenuHTML />
					</div>
				</NavDropdown.Item>
			</NavDropdown>
		);
	};
	const DocMenuMobile = () => {
		return (
			<NavDropdown
				title="..."
				id="basic-nav-dropdown"
				bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
			>
				<NavDropdown.Item href="/dashboard/documentation" className="py-2 px-3">
					<div className="d-flex align-items-center">
						<i className="fe fe-file-text fs-3 text-primary"></i>
						<DocumentationsMenuHTML />
					</div>
				</NavDropdown.Item>
				<NavDropdown.Item href="/dashboard/changelog" className="py-2 px-3">
					<div className="d-flex align-items-center">
						<i className="fe fe-layers fs-3 text-primary"></i>
						<ChangelogMenuHTML />
					</div>
				</NavDropdown.Item>
			</NavDropdown>
		);
	};

	return (
		<Fragment>{isDesktop ? <DocMenuDesktop /> : <DocMenuMobile />}</Fragment>
	);
};

export default DocumentMenu;
