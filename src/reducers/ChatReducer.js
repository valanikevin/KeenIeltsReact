export const ChatReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SEND_MESSAGE':
			return {
				...state,
				messages: state.messages.map((message) =>
					message.id === payload.id
						? {
								...message,
								chatMessages: [...message.chatMessages, payload.newMessage]
						  }
						: message
				)
			};
		case 'CHANGE_THREAD':
			return {
				...state,
				activeThread: payload,
				threads: state.threads.map((thread) =>
					thread.id === payload.id ? { ...thread, read: true } : thread
				)
			};
		default:
			return state;
	}
};
