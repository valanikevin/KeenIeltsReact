import { v4 as uuid } from 'uuid';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar9 from 'assets/images/avatar/avatar-9.jpg';

export const DeveloperGeeksData = [
	{
		id: uuid(),
		image: Avatar1,
		content: `"Geeks has created an incredibly seamless experience for app design. My mind is blown fusce consequat ligula in dui congue interdum."`,
		name: 'Ronald Richards',
		designation: 'Payments Engineer'
	},
	{
		id: uuid(),
		image: Avatar9,
		content: `"Geeks has created an incredibly seamless experience for app design. My mind is blown fusce consequat ligula in dui congue interdum."`,
		name: 'Ronald Richards',
		designation: 'Payments Engineer'
	}
];
export default DeveloperGeeksData;
