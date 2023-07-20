// import node module libraries
import { Fragment, useContext, useEffect } from 'react';
import { Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import context file
import { AppConfigContext } from 'context/Context';

// import media file
import LightModeIcon from 'assets/images/svg/sun.svg';
import DarkModeIcon from 'assets/images/svg/moon.svg';

// import required hook
import useLocalStorage from 'hooks/useLocalStorage';

const DarkLightMode = ({ className }) => {
	const ConfigContext = useContext(AppConfigContext);
	const { storageValue, setStorageValue, getStorageValue } = useLocalStorage(
		'skin',
		ConfigContext.appStats.skin
	);
	useEffect(() => {
		document
			.querySelector('html')
			.setAttribute('data-theme', getStorageValue('skin', 'light'));
		ConfigContext.setAppConfig(storageValue);
	}, [storageValue]);

	const changeColorMode = () => {
		setStorageValue(storageValue === 'light' ? 'dark' : 'light');
		ConfigContext.setAppConfig(storageValue);
	};
	return (
		<Fragment>
			<Link
				to="#"
				type="checkbox"
				id="flexSwitchCheckDefault"
				onClick={changeColorMode}
				className={`form-check form-switch theme-switch btn btn-light btn-icon rounded-circle ${className}`}
			>
				<Form.Check.Input
					type="checkbox"
					isValid
					value={storageValue}
					style={{ display: 'none' }}
				/>
				<Form.Check.Label style={{ cursor: 'pointer' }}>
					<Image src={storageValue === 'dark' ? DarkModeIcon : LightModeIcon} />
				</Form.Check.Label>
			</Link>
		</Fragment>
	);
};

export default DarkLightMode;
