import { v4 as uuid } from 'uuid';

const HelpCenterRoutes = [
	{
		id: uuid(),
		menuitem: 'Help Center',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'Help Center',
				link: '/marketing/help-center/'
			},
			{
				id: uuid(),
				menuitem: "FAQ's",
				link: '/marketing/help-center/faq/'
			},
			{
				id: uuid(),
				menuitem: 'Guide',
				link: '/marketing/help-center/guide/'
			},
			{
				id: uuid(),
				menuitem: 'Guide Single',
				link: '/marketing/help-center/guide-single/getting-started/what-is-this-geeks-app'
			},
			{
				id: uuid(),
				menuitem: 'Support',
				link: '/marketing/help-center/support/'
			}
		]
	}
];

export default HelpCenterRoutes;
