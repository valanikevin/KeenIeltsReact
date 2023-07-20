import { v4 as uuid } from 'uuid';

// import media files
import GatsbyCourse from 'assets/images/course/course-gatsby.jpg';
import JavaScriptCourse from 'assets/images/course/course-javascript.jpg';
import GraphQLCourse from 'assets/images/course/course-graphql.jpg';
import HTMLCourse from 'assets/images/course/course-html.jpg';

export const BestSellingCoursesData = [
	{
		id: uuid(),
		image: GatsbyCourse,
		title: 'Revolutionize how you build the web',
		sales: 34,
		amount: 3145.23
	},
	{
		id: uuid(),
		image: GraphQLCourse,
		title: 'Guide to Static Sites with Gatsby',
		sales: 30,
		amount: 2611.82
	},
	{
		id: uuid(),
		image: HTMLCourse,
		title: 'The Modern HTML Courses',
		sales: 26,
		amount: 2372.19
	},
	{
		id: uuid(),
		image: JavaScriptCourse,
		title: 'Courses JavaScript Heading Title',
		sales: 20,
		amount: 1145.23
	}
];

export default BestSellingCoursesData;
