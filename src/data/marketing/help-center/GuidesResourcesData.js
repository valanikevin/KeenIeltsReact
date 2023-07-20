const articleContent = `<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do amet luno jaso eiusmod tempor incididunt</p><br/><div >
<h2>Header Level 2</h2><p>Pellentesque habitant morbi tristique senectus et netus etmalesuada fames ac turpis egestas.Vestibulum tortor quam, feugiat vitae, 
ultricies eget, temporsit amet, ante. Donec eu libero sit ametquam egestas semper. Aenean ultricies mi vitae est. Maurisplacerat eleifend leo. 
Quisque sit amet estet sapien ullamcorper pharetra. Vestibulum erat wisi,condimentum sed, commodo vitae, ornare sit amet,wisi. Aenean fermentum, 
elit eget tincidunt condimentum, erosipsum rutrum orci, sagittis tempus lacusenim ac dui. Donec non enim in turpis pulvinar facilisis. Utfelis.</p>
<p>Orci varius natoque penatibus et magnis dis parturientmontes, nascetur ridiculus mus. Class aptenttaciti sociosqu ad litora torquent per conubia nostra, 
perinceptos himenaeos. Curabitur vitae sagittisodio. Suspendisse ullamcorper nunc non pellentesque laoreet.Curabitur eu tortor id quam pretium mattis.
Proin ut quam velit.</p></div><br/><div><h3>Header Level 3</h3>
<img src="https://codescandy.com/geeks-bootstrap-5/assets/images/background/help-center-img.jpg" alt="" style="width:100%"/> </div><br/><div >
<h4 >Header Level 4</h4><blockquote style="border-left:4px solid #ecebf1;padding-left:15px;"><p>Blockquote. Lorem ipsum dolor sit amet,consectetur adipiscing elit.
Vivamus magna. Crasin mi at felis aliquet congue. Ut a est eget ligulamolestiefend, libero at sagittis mollis, tellusest malesuada tellus, 
at luctus turpis elit sit amet quam.Vivamus pretium ornare est.</p><span className="ms-3">- Andrew Watkins</span></blockquote></div><br/><div >
<ol style="padding-left:15px;"><li>Ordered list</li><li>Suspendisse pellentesque orci quis auctor feugiat.</li><li>Pellentesque consequat libero ut leo accumsan 
ullamcorper.</li><li>Etiam et dolor faucibus libero aliquam tempor.</li></ol></div><br/><div><h5>Header Level 5</h5><ul style="padding-left:15px;">
<li>This is a list.</li><li>It appears completely unstyled.</li><li>Structurally, it's still a list.</li>
<li>However, this style only applies to immediate childelements.</li><li>Nested lists:<ul><li>are unaffected by this style</li><li>will still show a bullet</li>
<li>and have appropriate left margin</li></ul></li><li>This may still come in handy in some situations.</li></ul></div><br/><div ><h6>Header Level 6</h6><div>
<h5>Definition list</h5><p>Vestibulum nec porta tortor. Phasellus metus quam, semperut tincidunt sit amet, viverra quis neque.Nullam mattis mollis massa nec 
pulvinar. Vivamus ut velitorci. Aenean nec pretium augue. In eu tellusquis urna vestibulum pulvinar. Etiam in elementum lectus, iddignissim mauris. 
Quisque tempus posuerealiquet.</p></div><br/><div ><h5>Definition list</h5><p>Vestibulum nec porta tortor. Phasellus metus quam, semperut tincidunt sit amet, 
viverra quis neque.Nullam mattis mollis massa nec pulvinar. Vivamus ut velitorci. Aenean nec pretium augue. In eu tellusquis urna vestibulum pulvinar. 
Etiam in elementum lectus, iddignissim mauris. Quisque tempus posuerealiquet.</p></div></div>`;

const GuidesResourcesData = [
	{
		id: 1,
		categoryslug: 'getting-started',
		title: 'Getting Started',
		description: 'Get your Help Geeks account set up in just 6 simple steps.',
		totalarticles: 31,
		articles: [
			{
				id: 11,
				articleslug: 'what-is-this-geeks-app',
				articletitle: 'What is this geeks app?',
				content: articleContent
			},
			{
				id: 12,
				articleslug: 'start-using-the-geeks-app',
				articletitle: 'Start using the geeks app?',
				content: articleContent
			},
			{
				id: 13,
				articleslug: 'signing-in-to-the-dashboard',
				articletitle: 'Signing in to the dashboard',
				content: articleContent
			},
			{
				id: 14,
				articleslug: 'navigating-within-the-geeks-app',
				articletitle: 'Navigating within the Geeks app',
				content: articleContent
			},
			{
				id: 15,
				articleslug: 'affiliate-with-geeks-app',
				articletitle: 'Affiliate with geeks app',
				content: articleContent
			}
		]
	},
	{
		id: 2,
		categoryslug: 'account-management',
		title: 'Account Management',
		description:
			'Managing your account, creating new Users, pricing details, exporting data',
		totalarticles: 12,
		articles: [
			{
				id: 21,
				articleslug: 'billing-and-plans-guide',
				articletitle: 'Billing and Plans Guide',
				content: articleContent
			},
			{
				id: 22,
				articleslug: 'manage-your-user-profile',
				articletitle: 'Manage Your User Profile',
				content: articleContent
			},
			{
				id: 23,
				articleslug: 'signing-in-to-the-dashboard',
				articletitle: 'Signing in to the dashboard',
				content: articleContent
			},
			{
				id: 24,
				articleslug: 'whats-new-with-annual-payments',
				articletitle: "What's New With Annual Payments",
				content: articleContent
			},
			{
				id: 25,
				articleslug: 'user-roles-and-permissions',
				articletitle: 'User Roles and Permissions',
				content: articleContent
			}
		]
	},
	{
		id: 3,
		title: 'Your Account',
		categoryslug: 'your-account',
		description:
			'Managing your account, creating new Users, pricing details, exporting data',
		totalarticles: 8,
		articles: [
			{
				id: 31,
				articleslug: 'changing-your-username',
				articletitle: 'Changing your username',
				content: articleContent
			},
			{
				id: 32,
				articleslug: 'changing-your-email',
				articletitle: 'Changing your email',
				content: articleContent
			},
			{
				id: 33,
				articleslug: 'changing-your-password',
				articletitle: 'Changing your password',
				content: articleContent
			},
			{
				id: 34,
				articleslug: 'account-limits',
				articletitle: 'Account limits',
				content: articleContent
			},
			{
				id: 35,
				articleslug: 'two-factor-authentication',
				articletitle: 'Two factor authentication',
				content: articleContent
			}
		]
	},
	{
		id: 4,
		title: 'General Settings',
		categoryslug: 'general-settings',
		description: 'Get your Help Geeks account set up in just 6 simple steps.',
		totalarticles: 6,
		articles: [
			{
				id: 41,
				articleslug: 'general-settings',
				articletitle: 'General settings',
				content: articleContent
			},
			{
				id: 42,
				articleslug: 'api-settings',
				articletitle: 'API settings',
				content: articleContent
			},
			{
				id: 43,
				articleslug: 'site-settings',
				articletitle: 'Site settings',
				content: articleContent
			},
			{
				id: 44,
				articleslug: 'smtp-settings',
				articletitle: 'SMTP settings',
				content: articleContent
			},
			{
				id: 45,
				articleslug: 'analytics-settings',
				articletitle: 'Analytics settings',
				content: articleContent
			}
		]
	},
	{
		id: 5,
		title: 'Payments',
		categoryslug: 'payments',
		description: 'Get your Help Geeks account set up in just 6 simple steps.',
		totalarticles: 5,
		articles: [
			{
				id: 51,
				articleslug: 'subscriptions',
				articletitle: 'Subscriptions',
				content: articleContent
			},
			{
				id: 52,
				articleslug: 'payment-methods',
				articletitle: 'Payment methods',
				content: articleContent
			},
			{
				id: 53,
				articleslug: 'cancel-payments',
				articletitle: 'Cancel payments',
				content: articleContent
			}
		]
	},
	{
		id: 6,
		title: 'Working with Docs',
		categoryslug: 'working-with-docs',
		description:
			'Setting up collections and categories, creating new articles, and using Docs search',
		totalarticles: 8,
		articles: [
			{
				id: 61,
				articleslug: 'learn-about-geeks-docs',
				articletitle: 'Learn about Geeks Docs',
				content: articleContent
			},
			{
				id: 62,
				articleslug: 'manage-collections-and-categories',
				articletitle: 'Manage collections and categories',
				content: articleContent
			},
			{
				id: 63,
				articleslug: 'homepage-layout-options',
				articletitle: 'Homepage layout options',
				content: articleContent
			},
			{
				id: 64,
				articleslug: 'docs-style-guide',
				articletitle: 'Docs Style Guide',
				content: articleContent
			},
			{
				id: 65,
				articleslug: 'two-factor-authentication',
				articletitle: 'Two factor authentication',
				content: articleContent
			}
		]
	}
];

export default GuidesResourcesData;
