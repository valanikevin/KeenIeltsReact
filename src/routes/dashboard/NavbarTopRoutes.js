import { v4 as uuid } from 'uuid';

const NavbarDefault = [
	{
		id: uuid(),
		menuitem: 'Dashboard',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'Overview',
				link: '/dashboard/overview/'
			},
			{
				id: uuid(),
				menuitem: 'Analytics',
				link: '/dashboard/analytics/'
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
				menuitem: 'Courses',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: 'All Course',
						link: '/courses/all-courses/'
					},
					{
						id: uuid(),
						menuitem: 'Course Category',
						link: '/courses/courses-category/'
					},
					{
						id: uuid(),
						menuitem: 'Category Single',
						link: '/courses/category-single/'
					}
				]
			},
			{
				id: uuid(),
				menuitem: 'Users',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: 'Instructor',
						link: '/user/instructor/'
					},
					{
						id: uuid(),
						menuitem: 'Students',
						link: '/user/students/'
					}
				]
			},
			{
				id: uuid(),
				menuitem: 'CMS',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: 'Overview',
						link: '/cms/cms-dashboard/'
					},
					{
						id: uuid(),
						menuitem: 'All Posts',
						link: '/cms/all-posts/'
					},
					{
						id: uuid(),
						menuitem: 'New Post',
						link: '/cms/add-new-post/'
					},
					{
						id: uuid(),
						menuitem: 'Category',
						link: '/cms/category/'
					}
				]
			},
			{
				id: uuid(),
				menuitem: 'Project',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: 'Grid',
						link: '/dashboard/projects/grid/'
					},
					{
						id: uuid(),
						menuitem: 'List',
						link: '/dashboard/projects/list/'
					},
					{
						id: uuid(),
						menuitem: 'Single',
						link: '#',
						children: [
							{
								id: uuid(),
								menuitem: 'Overview',
								link: '/dashboard/projects/single/overview/'
							},
							{
								id: uuid(),
								menuitem: 'Task',
								link: '/dashboard/projects/single/task/'
							},
							{
								id: uuid(),
								menuitem: 'Budget',
								link: '/dashboard/projects/single/budget/'
							},
							{
								id: uuid(),
								menuitem: 'Files',
								link: '/dashboard/projects/single/files/'
							},
							{
								id: uuid(),
								menuitem: 'Team',
								link: '/dashboard/projects/single/team/'
							},
							{
								id: uuid(),
								menuitem: 'Summary',
								link: '/dashboard/projects/single/summary/'
							}
						]
					},
					{
						id: uuid(),
						menuitem: 'Create Project',
						link: '/dashboard/projects/create-project/'
					}
				]
			},
			{
				id: uuid(),
				menuitem: 'Site Setting',
				link: '#',
				children: [
					{
						id: uuid(),
						menuitem: 'General',
						link: '/settings/general/'
					},
					{
						id: uuid(),
						menuitem: 'Google',
						link: '/settings/google/'
					},
					{
						id: uuid(),
						menuitem: 'Social',
						link: '/settings/social/'
					},
					{
						id: uuid(),
						menuitem: 'Social Login',
						link: '/settings/social-login/'
					},
					{
						id: uuid(),
						menuitem: 'Payment',
						link: '/settings/payment/'
					},
					{
						id: uuid(),
						menuitem: 'SMTP',
						link: '/settings/smtp-server/'
					}
				]
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'Apps',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'Chat',
				link: '/dashboard/chat'
			},
			{
				id: uuid(),
				menuitem: 'Task',
				link: '/dashboard/task-kanban'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'Authentication',
		link: '#',
		children: [
			{
				id: uuid(),
				menuitem: 'Sign In',
				link: '/authentication/sign-in/'
			},
			{
				id: uuid(),
				menuitem: 'Sign Up',
				link: '/authentication/sign-up/'
			},
			{
				id: uuid(),
				menuitem: 'Forgot Password',
				link: '/authentication/forget-password/'
			},
			{
				id: uuid(),
				menuitem: 'Notifications',
				link: '/authentication/notifications/'
			},
			{
				id: uuid(),
				menuitem: '404 Error',
				link: '/marketing/specialty/404-error/'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'Layouts',
		link: '#',
		children: [
			{
				id: uuid(),
				header: true,
				header_text: 'Layouts'
			},
			{
				id: uuid(),
				menuitem: 'Top',
				link: '/dashboard/layouts/layout-horizontal/'
			},
			{
				id: uuid(),
				menuitem: 'Compact',
				link: '/dashboard/layouts/layout-compact/'
			},
			{
				id: uuid(),
				menuitem: 'Vertical',
				link: '/dashboard/layouts/layout-vertical/'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'Components',
		link: '#',
		children: [
			{ id: uuid(), link: '/elements/accordions', menuitem: 'Accordions' },
			{ id: uuid(), link: '/elements/alerts', menuitem: 'Alerts' },
			{ id: uuid(), link: '/elements/avatar', menuitem: 'Avatar' },
			{ id: uuid(), link: '/elements/badges', menuitem: 'Badges' },
			{ id: uuid(), link: '/elements/breadcrumbs', menuitem: 'Breadcrumbs' },
			{ id: uuid(), link: '/elements/buttons', menuitem: 'Buttons' },
			{ id: uuid(), link: '/elements/button-group', menuitem: 'ButtonGroup' },
			{ id: uuid(), link: '/elements/cards', menuitem: 'Cards' },
			{ id: uuid(), link: '/elements/carousels', menuitem: 'Carousel' },
			{ id: uuid(), link: '/elements/close-button', menuitem: 'Close Button' },
			{ id: uuid(), link: '/elements/collapse', menuitem: 'Collapse' },
			{ id: uuid(), link: '/elements/dropdowns', menuitem: 'Dropdowns' },
			{ id: uuid(), link: '/elements/list-group', menuitem: 'Listgroup' },
			{ id: uuid(), link: '/elements/modal', menuitem: 'Modal' },
			{ id: uuid(), link: '/elements/navs', menuitem: 'Navs' },
			{ id: uuid(), link: '/elements/navbar', menuitem: 'Navbar' },
			{ id: uuid(), link: '/elements/offcanvas', menuitem: 'Offcanvas' },
			{ id: uuid(), link: '/elements/overlays', menuitem: 'Overlays' },
			{ id: uuid(), link: '/elements/pagination', menuitem: 'Pagination' },
			{ id: uuid(), link: '/elements/popovers', menuitem: 'Popovers' },
			{ id: uuid(), link: '/elements/progress', menuitem: 'Progress' },
			{ id: uuid(), link: '/elements/spinners', menuitem: 'Spinners' },
			{ id: uuid(), link: '/elements/tables', menuitem: 'Tables' },
			{ id: uuid(), link: '/elements/toasts', menuitem: 'Toasts' },
			{ id: uuid(), link: '/elements/tooltips', menuitem: 'Tooltips' }
		]
	}
];

export default NavbarDefault;
