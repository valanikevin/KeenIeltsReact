import { v4 as uuid } from 'uuid';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';
import Avatar12 from 'assets/images/avatar/avatar-12.jpg';
import Avatar14 from 'assets/images/avatar/avatar-14.jpg';

export const TeamMembers = [
	{
		id: 1,
		name: 'Paul Haney',
		image: Avatar1
	},
	{
		id: 2,
		name: 'Gali Lanier',
		image: Avatar2
	},
	{
		id: 3,
		name: 'Charlie Holland',
		image: Avatar3
	},
	{
		id: 4,
		name: 'Gillbert Farr',
		image: Avatar4
	},
	{
		id: 5,
		name: 'Jessica Nasto',
		image: Avatar6
	},
	{
		id: 6,
		name: 'Nancy Limabd',
		image: Avatar7
	},
	{
		id: 7,
		name: 'Nishant Luka',
		image: Avatar12
	},
	{
		id: 8,
		name: 'Florin Pop',
		image: Avatar10
	},
	{
		id: 9,
		name: 'Disha Noma',
		image: Avatar8
	},
	{
		id: 10,
		name: 'Paul Haney',
		image: Avatar4
	},
	{
		id: 11,
		name: 'Shrey Mojan',
		image: Avatar12
	},
	{
		id: 12,
		name: 'Niman Kant',
		image: Avatar14
	}
];

export const TaskKanbanItems = [
	{
		id: 1,
		title: 'To Do',
		taskIds: [
			{
				id: uuid(),
				title: 'Start prototyping in frame for admin dashboard.',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 1,
				attachments: 3,
				comments: 12
			},
			{
				id: uuid(),
				title: 'Invite your teammates and start collaborating',
				priority: 'High',
				dueDate: '30 Dec',
				description:
					'<img src="https://codescandy.com/geeks-bootstrap-5/assets/images/blog/blogpost-1.jpg" alt="" class="img-fluid rounded-3">',
				assignTo: 2,
				attachments: 4,
				comments: 12
			}
		]
	},
	{
		id: 2,
		title: 'In Progress',
		taskIds: [
			{
				id: uuid(),
				title: 'Website launch planning',
				priority: 'Medium',
				dueDate: '30 Dec',
				description: '',
				assignTo: 3,
				attachments: 6,
				comments: 16
			},
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 4,
				attachments: 5,
				comments: 8
			},
			{
				id: uuid(),
				title: 'Start prototyping in framer for admin dashboard.',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 5,
				attachments: 9,
				comments: 18
			},
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 6,
				attachments: 12,
				comments: 22
			}
		]
	},
	{
		id: 3,
		title: 'Review',
		taskIds: [
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 7,
				attachments: 9,
				comments: 18
			},
			{
				id: uuid(),
				title: 'Start prototyping in framer for admin dashboard.',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 8,
				attachments: 12,
				comments: 22
			},
			{
				id: uuid(),
				title: 'Website launch planning',
				priority: 'Medium',
				dueDate: '30 Dec',
				description: '',
				assignTo: 9,
				attachments: 6,
				comments: 16
			},
			{
				id: uuid(),
				title: 'Intial wireframe of website design',
				priority: 'Low',
				dueDate: '30 Dec',
				description: '',
				assignTo: 10,
				attachments: 5,
				comments: 8
			}
		]
	},
	{
		id: 4,
		title: 'Done',
		taskIds: [
			{
				id: uuid(),
				title: 'Start prototyping in frame for admin dashboard.',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 11,
				attachments: 3,
				comments: 12
			},
			{
				id: uuid(),
				title: 'Invite your teammates and start collaborating',
				priority: 'High',
				dueDate: '30 Dec',
				description: '',
				assignTo: 12,
				attachments: 4,
				comments: 12
			}
		]
	}
];
