import { v4 as uuid } from 'uuid';

const JobListingRoutes = [
	{
		id: uuid(),
		menuitem: 'Home',
		link: '/marketing/landings/landing-job/'
	},
	{
		id: uuid(),
		menuitem: 'Listing',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'List',
				link: '/marketing/jobs/listing/job-list/'
			},
			{
				id: uuid(),
				menuitem: 'Grid',
				link: '/marketing/jobs/listing/job-list/'
			},
			{
				id: uuid(),
				menuitem: 'Single',
				link: '/marketing/jobs/listing/helpdesk-software-engineer-web3crypto/'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'Pages',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'Company List',
				link: '/marketing/jobs/company-list/'
			},
			{
				id: uuid(),
				menuitem: 'Company Single',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: 'About',
						link: '/marketing/jobs/company/about/'
					},
					{
						id: uuid(),
						menuitem: 'Reviews',
						link: '/marketing/jobs/company/reviews/'
					},
					{
						id: uuid(),
						menuitem: 'Jobs',
						link: '/marketing/jobs/company/jobs/'
					},
					{
						id: uuid(),
						menuitem: 'Benifits',
						link: '/marketing/jobs/company/benifits/'
					},
					{
						id: uuid(),
						menuitem: 'Photos',
						link: '/marketing/jobs/company/photos/'
					}
				]
			},
			{
				id: uuid(),
				menuitem: 'Post A Job',
				link: '/marketing/jobs/post-a-job/'
			},
			{
				id: uuid(),
				menuitem: 'Upload Resume',
				link: '/marketing/jobs/upload-resume/'
			}
		]
	},

	{
		id: uuid(),
		menuitem: 'Back to Demo',
		link: '/'
	}
];

export default JobListingRoutes;
