// import node module libraries
import { useContext } from 'react';

// import context file
import { ChatContext } from 'context/Context';

const useChatOperations = () => {
	const {
		ChatState: { messages, users, groups, activeThread, setActiveThread }
	} = useContext(ChatContext);

	// get user details from given thread
	const getUserDetails = (thread) => {
		return users.find(({ id }) => id === thread.userId);
	};

	// get user details from given user id
	const getUserDetailsById = (userId) => {
		return users.find(({ id }) => id === userId);
	};

	// get all messages by passing message id
	const getThreadMessages = (messageId) => {
		let result = messages.find(({ id }) => id === messageId);
		return typeof result === 'object' && result.chatMessages.length > 0
			? result
			: 0;
	};

	// get last message from given thread
	const getLastMessage = (thread) => {
		let result = messages.find(({ id }) => id === thread.messagesId);
		return typeof result === 'object' && result.chatMessages.length > 0
			? result.chatMessages[result.chatMessages.length - 1].message
			: "Let's start chating";
	};

	// get last message from given thread
	const getLastMessageTime = (thread) => {
		let result = messages.find(({ id }) => id === thread.messagesId);
		if (typeof result === 'object' && result.chatMessages.length > 0) {
			const curDate = new Date();
			const msgDate = new Date(
				result.chatMessages[result.chatMessages.length - 1].date
			);
			return msgDate.getDate() === curDate.getDate() &&
				msgDate.getMonth() === curDate.getMonth() &&
				msgDate.getFullYear() === curDate.getFullYear()
				? result.chatMessages[result.chatMessages.length - 1].time
				: result.chatMessages[result.chatMessages.length - 1].date;
		} else {
			return '';
		}
	};

	// get group details from given thread
	const getGroupDetails = (thread) => {
		const { id, name, groupMembers } = groups.find(
			({ id }) => id === thread.groupId
		);
		let group = {
			id,
			type: thread.type,
			name,
			users: groupMembers.map((user) =>
				users.find(({ id }) => id === user.userId)
			)
		};
		return group;
	};

	return {
		getUserDetails,
		getUserDetailsById,
		getGroupDetails,
		getThreadMessages,
		getLastMessage,
		getLastMessageTime,
		activeThread,
		setActiveThread
	};
};

export default useChatOperations;
