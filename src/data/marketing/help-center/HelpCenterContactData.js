import { v4 as uuid } from 'uuid';
import { HelpCircle, LifeBuoy } from 'react-feather';

export const HelpCenterContactData = [
	{
		id: uuid(),
		icon: <HelpCircle size="40" strokeWidth="1.5" className="text-primary" />,
		title: 'Contact us',
		link: '#',
		description:
			'Geeks is here to help. We can provide you with the support you need. Just contact us and our team will reply quick to you.',
		linkname: 'Contact us'
	},
	{
		id: uuid(),
		icon: <LifeBuoy size="40" strokeWidth="1.5" className="text-primary" />,
		title: 'Support',
		link: '#',
		description:
			'The good news is that youre not alone, and youre in the right place. Contact us for more detailed support.',
		linkname: 'Submit a Ticket'
	}
];

export default HelpCenterContactData;
