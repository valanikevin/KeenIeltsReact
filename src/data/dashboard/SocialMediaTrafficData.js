import {
	mdiFacebook,
	mdiInstagram,
	mdiTwitter,
	mdiLinkedin,
	mdiGithub,
	mdiYoutube
} from '@mdi/js';

export const SocialMediaTrafficData = [
	{
		id: 1,
		media: 'Facebook',
		icon: mdiFacebook,
		counter: 3454,
		percent: 75,
		progressbarvariant: 'primary'
	},
	{
		id: 2,
		media: 'Instagram',
		icon: mdiInstagram,
		counter: 2351,
		percent: 60,
		progressbarvariant: 'success'
	},
	{
		id: 3,
		media: 'Twitter',
		icon: mdiTwitter,
		counter: 2243,
		percent: 40,
		progressbarvariant: 'danger'
	},
	{
		id: 4,
		media: 'LinkedIn',
		icon: mdiLinkedin,
		counter: 812,
		percent: 30,
		progressbarvariant: 'warning'
	},
	{
		id: 5,
		media: 'Github',
		icon: mdiGithub,
		counter: 621,
		percent: 20,
		progressbarvariant: 'info'
	},
	{
		id: 6,
		media: 'Youtube',
		icon: mdiYoutube,
		counter: 450,
		percent: 10,
		progressbarvariant: 'primary'
	}
];

export default SocialMediaTrafficData;
