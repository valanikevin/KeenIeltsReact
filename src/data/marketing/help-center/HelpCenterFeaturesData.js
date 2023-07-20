import { v4 as uuid } from 'uuid';
import { HelpCircle, Book, LifeBuoy } from 'react-feather';

export const HelpCenterFeaturesData = [
	{
		id: uuid(),
		icon: <HelpCircle size="40" strokeWidth="1.5" className="text-primary" />,
		title: 'FAQs',
		link: '/marketing/help-center/faq/',
		description:
			'FAQ, short for frequently asked questions, is a list of commonly asked questions and answers about a specific topic.',
		linkname: 'View FAQ'
	},
	{
		id: uuid(),
		icon: <Book size="40" strokeWidth="1.5" className="text-primary" />,
		title: 'Guides & Resources',
		link: '/marketing/help-center/guide/',
		description:
			'UI Style Guides are a design & development tool that brings cohesion to a digital product user interface & experience',
		linkname: 'Browse Guides'
	},
	{
		id: uuid(),
		icon: <LifeBuoy size="40" strokeWidth="1.5" className="text-primary" />,
		title: 'Support',
		link: '/marketing/help-center/support/',
		description:
			'The good news is that youre not alone, and youre in the right place. Contact us for more detailed support.',
		linkname: 'Submit a Request'
	}
];

export default HelpCenterFeaturesData;
