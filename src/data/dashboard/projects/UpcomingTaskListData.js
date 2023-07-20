import { v4 as uuid } from 'uuid';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';

export const UpcomingTaskListData = [
	{
		id: uuid(),
		task: 'Design Wireframes',
		assignee: Avatar1,
		progress: 65,
		enddate: 'Set end date',
		status: 'In Review',
		statuscolor: 'primary'
	},
	{
		id: uuid(),
		task: 'Prototype design',
		assignee: Avatar2,
		progress: 75,
		enddate: 'Aug 15, 2021',
		status: 'In Progress',
		statuscolor: 'info'
	},
	{
		id: uuid(),
		task: 'Content Writing',
		assignee: Avatar3,
		progress: 86,
		enddate: 'Aug 16, 2021',
		status: 'Cancel',
		statuscolor: 'danger'
	},
	{
		id: uuid(),
		task: 'Figma to Bootstrap Conversion',
		assignee: Avatar4,
		progress: 40,
		enddate: 'Aug 18, 2021',
		status: 'In Review',
		statuscolor: 'primary'
	},
	{
		id: uuid(),
		task: 'User Interface Design',
		assignee: Avatar6,
		progress: 35,
		enddate: 'Aug 18, 2021',
		status: 'In Review',
		statuscolor: 'primary'
	}
];

export default UpcomingTaskListData;
