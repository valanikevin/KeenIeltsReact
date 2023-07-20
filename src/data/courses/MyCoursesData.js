// import media files

// import avatar media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';
import Avatar9 from 'assets/images/avatar/avatar-9.jpg';

// import courses media files
import LaravelCourse from 'assets/images/course/course-laravel.jpg';
import GatsbyCourse from 'assets/images/course/course-gatsby.jpg';
import JavaScriptCourse from 'assets/images/course/course-javascript.jpg';
import NodeCourse from 'assets/images/course/course-node.jpg';
import ReactCourse from 'assets/images/course/course-react.jpg';
import AngularCourse from 'assets/images/course/course-angular.jpg';
import GraphQLCourse from 'assets/images/course/course-graphql.jpg';
import HTMLCourse from 'assets/images/course/course-html.jpg';

export const MyCoursesData = [
	{
		id: 1,
		category: 'Courses',
		image: GraphQLCourse,
		title: 'Revolutionize how you build the web',
		duration: '1h 30m',
		date: '7 July, 2021 1:42pm',
		instructor_name: 'Reva Yokk',
		instructor_image: Avatar7,
		status: 'Draft',
		level: 'Beginner',
		students: 12234,
		rating: 4.5,
		votes: 3250,
		progress: 25
	},
	{
		id: 2,
		category: 'Marketing',
		image: GatsbyCourse,
		duration: '3h 40m',
		title: 'Guide to Static Sites with Gatsby',
		date: '6 July, 2021 2:42pm',
		instructor_name: 'Brooklyn Simmons',
		instructor_image: Avatar6,
		status: 'Draft',
		level: 'Intermediate',
		students: 2000,
		rating: 4.5,
		votes: 5300
	},
	{
		id: 3,
		category: 'Workshop',
		image: HTMLCourse,
		duration: '4h 10m',
		title: 'The Modern HTML Courses',
		date: '5 July, 2021 5:42pm',
		instructor_name: 'Miston Wilson',
		instructor_image: Avatar5,
		status: 'Pending',
		level: 'Beginner',
		students: 22345,
		rating: 4.5,
		votes: 6380,
		progress: 25
	},
	{
		id: 4,
		category: 'Company',
		image: JavaScriptCourse,
		duration: '4h 10m',
		title: 'Courses JavaScript Heading Title',
		date: '5 July, 2021 5:42pm',
		instructor_name: 'Guy Hawkins',
		instructor_image: Avatar1,
		status: 'Pending',
		level: 'Advance',
		students: 5235,
		rating: 4.5,
		votes: 5400
	},
	{
		id: 5,
		category: 'Workshop',
		image: NodeCourse,
		duration: '2h 59m',
		title: 'Get Start with Node Heading Title',
		date: '5 July, 2021 5:42pm',
		instructor_name: 'Sina Ray',
		instructor_image: Avatar3,
		status: 'Live',
		level: 'Intermediate',
		students: 7200,
		rating: 4.5,
		votes: 7800
	},
	{
		id: 6,
		category: 'Marketing',
		image: LaravelCourse,
		duration: '3h 40m',
		title: 'Get Start with Laravel',
		date: '5 July, 2021 5:42pm',
		instructor_name: 'Sobo Rikhan',
		instructor_image: Avatar9,
		status: 'Live',
		level: 'Beginner',
		students: 22500,
		rating: 4.5,
		votes: 9200
	},
	{
		id: 7,
		category: 'Courses',
		image: ReactCourse,
		duration: '4h 10m',
		title: 'Get Start with React',
		date: '4 July, 2021 12:42pm',
		instructor_name: 'April Noms',
		instructor_image: Avatar2,
		status: 'Pending',
		level: 'Beginner',
		students: 6759,
		rating: 4.5,
		votes: 3250
	},
	{
		id: 8,
		category: 'Workshop',
		image: AngularCourse,
		duration: '2h 59m',
		title: 'Get Start with Angular',
		date: '3 July, 2021 10:42am',
		instructor_name: 'Jacob Jones',
		instructor_image: Avatar4,
		status: 'Deleted',
		level: 'Advance',
		students: 7234,
		rating: 4.5,
		votes: 5400
	},
	{
		id: 9,
		category: 'Marketing',
		image: LaravelCourse,
		duration: '3h 40m',
		title: 'Get Start with Laravel',
		date: '5 July, 2021 5:42pm',
		instructor_name: 'Sobo Rikhan',
		instructor_image: Avatar9,
		status: 'Deleted',
		level: 'Beginner',
		students: 6759,
		rating: 4.5,
		votes: 7800
	},
	{
		id: 10,
		category: 'Workshop2',
		image: NodeCourse,
		duration: '4h 40m',
		title: 'Get Start with Node Heading Title',
		date: '5 July, 2021 5:42pm',
		instructor_name: 'Sina Ray',
		instructor_image: Avatar3,
		status: 'Deleted',
		level: 'Intermediate',
		students: 22500,
		rating: 4.5,
		votes: 3250
	}
];

export default MyCoursesData;
