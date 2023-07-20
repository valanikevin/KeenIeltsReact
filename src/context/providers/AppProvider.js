// import node module libraries
import React, { useReducer } from 'react';

// import app config file
import { settings } from 'AppConfig';

// import context file
import { AppConfigContext } from 'context/Context';

// import reducer file
import { AppConfigReducer } from 'reducers/AppConfigReducer';

const AppProvider = ({ children }) => {
	const initialState = {
		version: settings.app.version,
		skin: settings.theme.skin
	};
	const [appStats, appStatsDispatch] = useReducer(
		AppConfigReducer,
		initialState
	);
	const setAppConfig = (newStat) => {
		appStatsDispatch({
			type: 'CHANGE_SKIN',
			payload: {
				skin: newStat
			}
		});
	};
	return (
		<AppConfigContext.Provider
			value={{ appStats, appStatsDispatch, setAppConfig }}
		>
			{children}
		</AppConfigContext.Provider>
	);
};

export default AppProvider;
