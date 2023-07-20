import { v4 as uuid } from 'uuid';

// import media files
import JobListLogo1 from 'assets/images/job/job-brand-logo/job-list-logo-1.svg';
import JobListLogo2 from 'assets/images/job/job-brand-logo/job-list-logo-2.svg';
import JobListLogo3 from 'assets/images/job/job-brand-logo/job-list-logo-3.svg';
import JobListLogo4 from 'assets/images/job/job-brand-logo/job-list-logo-4.svg';
import JobListLogo5 from 'assets/images/job/job-brand-logo/job-list-logo-5.svg';
import AmazonLogo from 'assets/images/job/job-brand-logo/amazon.svg';
import DribbbleLogo from 'assets/images/job/job-brand-logo/dribbble.svg';
import NextJSLogo from 'assets/images/job/job-brand-logo/next-js.svg';
import ReactLogo from 'assets/images/job/job-brand-logo/react.svg';

export const ComapniesListData = [
	{
		id: uuid(),
		company: 'HelpScout',
		slug: 'about-helpscout',
		logo: JobListLogo1,
		experience: '55 year old',
		type: 'Private',
		country: 'India',
		location: 'Ahmedabad, Gujarat',
		briefInfo:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in velit mollis, pellentesque lorem a, faucibus leo. Praesent tempus id augue ut ullamcorper. Donec dignissim ante sed metus sagittis porta nec sed purus.',
		employees: 745,
		totalReviews: 131,
		rating: 4.5,
		jobPosting: '100+',
		featured: false
	},
	{
		id: uuid(),
		company: 'AirTable',
		slug: 'about-airtable',
		logo: JobListLogo2,
		experience: '56 years old',
		type: 'Private',
		country: 'India',
		location: 'Jaipur, Rajasthan',
		briefInfo:
			'Phasellus mattis eleifend ipsum, mollis porta arcu vehicula quis. Fusce vel placerat ante. Morbi quis erat eget tellus vulputate blandit ac et libero. Donec ac mollis ante. Sed dignissim erat non ante tristique, a sagittis lorem interdum.',
		employees: 522,
		totalReviews: 120,
		rating: 4.0,
		jobPosting: '100+',
		featured: false
	},
	{
		id: uuid(),
		company: 'Square',
		slug: 'about-square',
		logo: JobListLogo3,
		experience: '48 years old',
		type: 'Public',
		country: 'India',
		location: 'Hastsal, Delhi',
		briefInfo:
			'Vivamus euismod eros ut nulla faucibus scelerisque. Integer non hendrerit ligula, sed posuere mi. Nullam at porttitor ante. Nulla facilisi. Cras eleifend varius lacus id dictum. Aliquam semper vel nisi sed molestie.',
		employees: 414,
		totalReviews: 131,
		rating: 4.5,
		jobPosting: '100+',
		featured: false
	},
	{
		id: uuid(),
		company: 'Dot',
		slug: 'about-dot',
		logo: JobListLogo4,
		experience: '52 years old',
		type: 'Private',
		country: 'India',
		location: 'Pune, Chennai',
		briefInfo:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in velit mollis, pellentesque lorem a, faucibus leo. Praesent tempus id augue ut ullamcorper. Donec dignissim ante sed metus sagittis porta nec sed purus.',
		employees: 1314,
		totalReviews: 125,
		rating: 4.0,
		jobPosting: '100+',
		featured: false
	},
	{
		id: uuid(),
		company: 'Round Table',
		slug: 'about-round-table',
		logo: JobListLogo4,
		experience: '51 years old',
		type: 'Public',
		country: 'India',
		location: 'Ahmedabad, Gujarat',
		briefInfo:
			'Phasellus mattis eleifend ipsum, mollis porta arcu vehicula quis. Fusce vel placerat ante. Morbi quis erat eget tellus vulputate blandit ac et libero. Donec ac mollis ante. Sed dignissim erat non ante tristique, a sagittis lorem interdum.',
		employees: 745,
		totalReviews: 92,
		rating: 3.5,
		jobPosting: '100+',
		featured: false
	},
	{
		id: uuid(),
		company: 'Toggle',
		slug: 'about-toggle',
		logo: JobListLogo5,
		experience: '55 years old',
		type: 'Private',
		country: 'India',
		location: 'Mumbai, Maharashtra',
		briefInfo:
			'Vivamus euismod eros ut nulla faucibus scelerisque. Integer non hendrerit ligula, sed posuere mi. Nullam at porttitor ante. Nulla facilisi. Cras eleifend varius lacus id dictum. Aliquam semper vel nisi sed molestie.',
		employees: 414,
		totalReviews: 192,
		rating: 4.5,
		jobPosting: '100+',
		featured: false
	},

	{
		id: uuid(),
		company: 'Amazon',
		slug: 'about-amazon',
		logo: AmazonLogo,
		experience: '28 years old',
		type: 'Private',
		country: 'USA',
		location: 'Seattle, Washington and Arlington, Virginia',
		briefInfo: 'Worlds largest Internet Company',
		employees: 1468000,
		totalReviews: 500,
		rating: 5.0,
		jobPosting: '4240+',
		featured: true
	},
	{
		id: uuid(),
		company: 'Dribbble',
		slug: 'about-dribbble',
		logo: DribbbleLogo,
		experience: '24 years old',
		type: 'Private',
		country: 'United States',
		location: 'Menlo Park, California',
		briefInfo: "Search the world's information",
		employees: 139995,
		totalReviews: 500,
		rating: 5.0,
		jobPosting: '216+',
		featured: true
	},
	{
		id: uuid(),
		company: 'Next Js',
		slug: 'about-nextjs',
		logo: NextJSLogo,
		experience: '38 years old',
		type: 'Private',
		country: 'Hong Kong',
		location: 'Hong Kong',
		briefInfo: 'Official site and buy online the best laptops',
		employees: 75000,
		totalReviews: 800,
		rating: 5.0,
		jobPosting: '195+',
		featured: true
	},
	{
		id: uuid(),
		company: 'React',
		slug: 'about-react',
		logo: ReactLogo,
		experience: '24 years old',
		type: 'Private',
		country: 'U.S.',
		location: 'San Jose, California',
		briefInfo: 'Safer and Easier Way to Pay Online',
		employees: 75000,
		totalReviews: 800,
		rating: 5.0,
		jobPosting: '180+',
		featured: true
	}
];

export default ComapniesListData;
