export const DashboardMenu = [
	{
		id: 1,
		title: 'My Dashboard',
		link: '/marketing/instructor/dashboard/',
		icon: 'home'
	},
	{
		id: 2,
		title: 'My Courses',
		link: '/marketing/instructor/instructor-my-courses/',
		icon: 'book'
	},
	{
		id: 3,
		title: 'Reviews',
		link: '/marketing/instructor/instructor-reviews/',
		icon: 'star'
	},
	{
		id: 4,
		title: 'Earnings',
		link: '/marketing/instructor/instructor-earnings/',
		icon: 'pie-chart'
	},
	{
		id: 5,
		title: 'Orders',
		link: '/marketing/instructor/instructor-orders/',
		icon: 'shopping-bag'
	},
	{
		id: 6,
		title: 'Students',
		link: '/marketing/instructor/instructor-students/',
		icon: 'users'
	},
	{
		id: 7,
		title: 'Payouts',
		link: '/marketing/instructor/instructor-payouts/',
		icon: 'dollar-sign'
	},
	{
		id: 8,
		title: 'Quiz',
		link: '/marketing/instructor/quiz/',
		icon: 'help-circle'
	},
	{
		id: 9,
		title: 'Quiz Result',
		link: '/marketing/instructor/quiz/result/',
		icon: 'help-circle'
	}
];

export const AccountSettingsMenu = [
	{
		id: 1,
		title: 'Edit Profile',
		link: '/marketing/instructor/instructor-edit-profile/',
		icon: 'settings'
	},
	{
		id: 2,
		title: 'Security',
		link: '/marketing/instructor/instructor-security/',
		icon: 'user'
	},
	{
		id: 3,
		title: 'Social Profiles',
		link: '/marketing/instructor/instructor-social-profiles/',
		icon: 'refresh-cw'
	},
	{
		id: 4,
		title: 'Notifications',
		link: '/marketing/instructor/instructor-notifications/',
		icon: 'bell'
	},
	{
		id: 5,
		title: 'Profile Privacy',
		link: '/marketing/instructor/instructor-profile-privacy/',
		icon: 'lock'
	},
	{
		id: 6,
		title: 'Delete Profile',
		link: '/marketing/instructor/instructor-delete-profile/',
		icon: 'trash'
	},
	{
		id: 6,
		title: 'Sign Out',
		link: '/',
		icon: 'power'
	}
];

export const InstructorDashboardMenu = [DashboardMenu, AccountSettingsMenu];

export default InstructorDashboardMenu;
