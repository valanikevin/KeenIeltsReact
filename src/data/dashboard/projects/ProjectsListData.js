import { v4 as uuid } from 'uuid';

export const ProjectsListData = [
	{
		id: uuid(),
		title: 'Web Application Design',
		category: 'Web Design',
		progress: '80',
		status: 'In Progress',
		duedate: '1 Jan, 2022',
		budget: 22000,
		icon: 'layout',
		team: [1, 2, 3, 4, 5, 6, 7, 8] // it's team member's id taken from ProjectTeamMembersData.js
	},
	{
		id: uuid(),
		title: 'Task Application Development..',
		category: 'Web Development',
		progress: '100',
		status: 'Finished',
		duedate: '20 Nov, 2022',
		budget: 20000,
		icon: 'clipboard',
		team: [4, 5, 6, 7, 8, 9, 10, 11, 12]
	},
	{
		id: uuid(),
		title: 'CRM Dashboard',
		category: 'Front End Development',
		progress: '30',
		status: 'Cancel',
		duedate: '23 Dec, 2023',
		budget: 0,
		icon: 'users',
		team: [5, 8, 9, 4, 1, 6]
	},

	{
		id: uuid(),
		title: 'Marketing Sites',
		category: 'Web Design',
		progress: '10',
		status: 'Cancel',
		duedate: '10 Oct, 2022',
		budget: 0,
		icon: 'cpu',
		team: [3, 4, 5, 6, 7]
	},
	{
		id: uuid(),
		title: 'Chat Application Design',
		category: 'Web Design',
		progress: '65',
		status: 'Pending',
		duedate: '19 Oct, 2022',
		budget: 20000,
		icon: 'message-square',
		team: [2, 3, 4, 5, 6, 7, 8]
	},
	{
		id: uuid(),
		title: 'E-Commerce Project',
		category: 'Web Development',
		progress: '100',
		status: 'Finished',
		duedate: '5 Nov, 2022',
		budget: 25000,
		icon: 'shopping-cart',
		team: [9, 1, 3, 4, 5, 6, 7, 8]
	},
	{
		id: uuid(),
		title: 'CRM Dashboard',
		category: 'Web Design',
		progress: '30',
		status: 'Cancel',
		duedate: '23 Dec, 2023',
		budget: 0,
		icon: 'cpu',
		team: [11, 6, 3, 4, 5]
	},
	{
		id: uuid(),
		title: 'Marketing Sites',
		category: 'Front End Development',
		progress: '10',
		status: 'Cancel',
		duedate: '10 Oct, 2022',
		budget: 0,
		icon: 'message-square',
		team: [10, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11, 12]
	}
];

export default ProjectsListData;
