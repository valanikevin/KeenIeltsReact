import { v4 as uuid } from 'uuid';

const PositionListData = [
	{
		id: uuid(),
		department: 'Design',
		description:
			'Put your creative ideas into action at a product-driven and design-led organization.',
		jobtitles: [
			{
				id: uuid(),
				designation: 'Marketing Designer',
				location: 'San Francisco',
				remote: true
			},
			{
				id: uuid(),
				designation: 'Product Design Lead',
				location: 'United Kingdom',
				remote: false
			},
			{
				id: uuid(),
				designation: 'Brand Designer',
				location: 'Canada',
				remote: true
			},
			{
				id: uuid(),
				designation: 'Sr. UX Engineer',
				location: 'Ireland',
				remote: true
			}
		]
	},
	{
		id: uuid(),
		department: 'Engineering',
		description:
			'Develop quality code that is built for scale for millions of people looking to eliminate “work about work” with our platform.',
		jobtitles: [
			{
				id: uuid(),
				designation: 'Principal Data Engineer',
				location: 'Philippines',
				remote: true
			},
			{
				id: uuid(),
				designation: 'Software Engineer Ruby on Rails',
				location: 'United Kingdom',
				remote: false
			},
			{
				id: uuid(),
				designation: 'Sr. Engineering Manager',
				location: 'Canada',
				remote: true
			},
			{
				id: uuid(),
				designation: 'Sr. React Engineer',
				location: 'United Kingdom',
				remote: true
			}
		]
	},
	{
		id: uuid(),
		department: 'General & Administrative',
		description:
			'Recruit, retain, and enable our growing number of Geeks through programs that support our people and our business.',
		jobtitles: [
			{
				id: uuid(),
				designation: 'Account Executive',
				location: 'Philippines',
				remote: true
			},
			{
				id: uuid(),
				designation: 'Customer Success Manager',
				location: 'United Kingdom',
				remote: true
			},
			{
				id: uuid(),
				designation: 'Sales Development Representative',
				location: 'Canada',
				remote: true
			}
		]
	}
];

export default PositionListData;
