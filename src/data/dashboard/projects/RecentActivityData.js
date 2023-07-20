import { v4 as uuid } from 'uuid';

export const RecentActivityData = [
	{
		id: uuid(),
		activity: 'Task Finished',
		activitybrief: `Paula finished figma task`,
		time: '2 mins ago',
		icon: 'check'
	},
	{
		id: uuid(),
		activity: 'New Comment',
		activitybrief: `Georg commented on task.`,
		time: '1 hour ago',
		icon: 'message-square'
	},
	{
		id: uuid(),
		activity: 'Task Overdue',
		activitybrief: `Task <a href="#"><u>status updatd for board</u></a> is overdue.`,
		time: '1 day',
		icon: 'alert-triangle'
	},
	{
		id: uuid(),
		activity: 'Update Send to Client',
		time: '1 day',
		activitybrief: `Jitu send email to update design for client Geeks UI.`,
		icon: 'mail'
	}
];

export default RecentActivityData;
