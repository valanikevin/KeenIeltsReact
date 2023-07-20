import { v4 as uuid } from 'uuid';

// import media files

// import testimonial images
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';

// import feature icons images
import FeatureIcon1 from 'assets/images/svg/feature-icon-1.svg';
import FeatureIcon2 from 'assets/images/svg/feature-icon-2.svg';
import FeatureIcon3 from 'assets/images/svg/feature-icon-3.svg';
import FeatureIcon4 from 'assets/images/svg/feature-icon-4.svg';

export const CourseDescriptionList = [
	{
		id: 1,
		icon: FeatureIcon1,
		title: 'Introduction to JavaScript',
		lessons: 6,
		duration: '1 HOUR 12 MIN',
		shortdescription:
			'In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare',
		courselink: '#',
		badge: 'Free',
		coursechapterid: 1
	},
	{
		id: 2,
		icon: FeatureIcon2,
		title: 'JavaScript Beginning',
		lessons: 4,
		duration: '32 MIN',
		shortdescription:
			'Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada.',
		courselink: '#',
		coursechapterid: 2
	},
	{
		id: 3,
		icon: FeatureIcon3,
		title: 'Variables and Constants',
		lessons: 8,
		duration: '10 MIN',
		shortdescription:
			'Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs.',
		courselink: '#',
		coursechapterid: 3
	},
	{
		id: 4,
		icon: FeatureIcon4,
		title: 'Types and Operators',
		lessons: 10,
		duration: '32 MIN',
		shortdescription:
			'In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl.',
		courselink: '#',
		coursechapterid: 4
	}
];

export const FAQList = [
	{
		id: uuid(),
		title: 'What is the cost of an online course',
		content:
			'Create beautiful website with this Geeks UI template. Get started building a site today.'
	},
	{
		id: uuid(),
		title: 'What do I need to take a course?',
		content:
			"Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS"
	},
	{
		id: uuid(),
		title: 'What do I receive for taking this course?',
		content:
			'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
	},
	{
		id: uuid(),
		title: 'What willI get if I subscribe to this Certificate?',
		content:
			'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.'
	}
];

export const TestimonialsList = [
	{
		id: uuid(),
		name: 'Gladys Colbert',
		designation: 'Software Engineer at Palansite',
		avatar: Avatar1,
		content:
			'The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.',
		color: 'primary'
	},
	{
		id: uuid(),
		name: 'Ella Jones',
		designation: 'Software Engineer at Classroom',
		avatar: Avatar2,
		content:
			'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Sed vel felis imperdiet, lacinia metus malesuada diamamus rutrum turpis leo, id tincidunt magna sodales.',
		color: 'info'
	}
];

export const LeadCourseData = [
	CourseDescriptionList,
	TestimonialsList,
	FAQList
];

export default LeadCourseData;
