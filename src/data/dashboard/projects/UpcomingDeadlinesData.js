import { v4 as uuid } from 'uuid';

// import media files
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';

export const UpcomingDeadlinesData = [
	{
		id: uuid(),
		member: 'Eleanor Pena',
		memberimage: Avatar2,
		task: `Design a Geeks UI Figma`,
		deadline: '30 Aug, 2021',
		workload: '62'
	},
	{
		id: uuid(),
		member: 'Marvin McKinney',
		memberimage: Avatar3,
		task: `Geeks UI Webpack Workflow`,
		deadline: '24 Sept, 2022',
		workload: '45'
	},
	{
		id: uuid(),
		member: 'Wade Warren',
		memberimage: Avatar4,
		task: `Geeks UI React version`,
		deadline: '30 Sept, 2022',
		workload: '80'
	},
	{
		id: uuid(),
		member: 'Courtney Henry',
		memberimage: Avatar5,
		task: `Geeks UI Documents Improve`,
		deadline: '20 Dec, 2021',
		workload: '10'
	},
	{
		id: uuid(),
		member: 'Brooklyn Simmons',
		memberimage: Avatar6,
		task: `Ecommerce Design Geeks UI`,
		deadline: '25 Jan, 2022',
		workload: '8'
	}
];

export default UpcomingDeadlinesData;
