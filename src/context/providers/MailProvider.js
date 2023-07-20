// import context file
import { MailContext } from 'context/Context';

// import data files
import MailsData from 'data/dashboard/mail/MailsData';

const MailProvider = ({ children }) => {
	const [mailContextValue] = [
		{
			mails: MailsData,
			filters: ['None', 'All', 'Read', 'Unread', 'Starred', 'Unstarred'],
			activeFilter: 'None'
		}
	];
	return (
		<MailContext.Provider value={{ mailContextValue }}>
			{children}
		</MailContext.Provider>
	);
};

export default MailProvider;
