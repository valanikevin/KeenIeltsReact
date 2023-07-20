const date = new Date();
const month = ('0' + (date.getMonth() + 1)).slice(-2);

export const EventsData = [
	{
		id: 1,
		url: '',
		title: 'Design Review',
		allDay: true,
		start: date.getFullYear() + '-' + month + '-02T12:00:27.87+00:20',
		end: date.getFullYear() + '-' + month + '-03T12:00:27.87+00:20',
		extendedProps: {
			category: 'success',
			location: 'Las Vegas, US',
			description: 'Lorem ipsum dolor sit tempor inci'
		}
	},
	{
		id: 2,
		url: '',
		title: 'Meeting With Client',
		start: date.getFullYear() + '-' + month + '-06T12:00:27.87+00:20',
		end: date.getFullYear() + '-' + month + '-07T13:10:27.87+00:20',
		allDay: true,
		extendedProps: {
			category: 'primary',
			location: 'Las Vegas, US',
			description: 'Lorem ipsum dolor sit tempor inci'
		}
	},
	{
		id: 3,
		url: '',
		title: 'Family Trip',
		allDay: true,
		start: date.getFullYear() + '-' + month + '-06T12:00:27.87+00:20',
		end: date.getFullYear() + '-' + month + '-07T12:00:27.87+00:20',
		extendedProps: {
			category: 'primary',
			location: 'Las Vegas, US',
			description: 'Lorem ipsum dolor sit tempor inci'
		}
	}
];

export default EventsData;
