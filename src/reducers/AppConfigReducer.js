export const AppConfigReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'CHANGE_SKIN':
			return {
				...state,
				skin: payload.skin
			};
		case 'REFRESH':
			return {
				...state
			};
		default:
			return state;
	}
};
