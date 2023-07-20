import { v4 as uuid } from 'uuid';

// import media files
import HubSpot from 'assets/images/svg/hubspot-logo.svg';
import Slack from 'assets/images/svg/slack-logo.svg';

export const CustomersTestimonialsData = [
	{
		id: uuid(),
		image: HubSpot,
		content: `I am very satisfied with my purchase. Your team helped me a lot with the new release for RLT version. I hope you are always successful. Thank you for your services and support.`,
		name: 'Ali',
		designation: 'Geeks UI Customer'
	},
	{
		id: uuid(),
		image: Slack,
		content: `This item has everything you need for creating a modern learning-platform. Really delighted by many details and the overall architecture. Support was superfast and helpful as well.`,
		name: 'Bernhar',
		designation: 'Geeks UI Customer'
	}
];
export default CustomersTestimonialsData;
