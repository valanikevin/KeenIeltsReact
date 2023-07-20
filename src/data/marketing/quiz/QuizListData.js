// import node module libraries
import { v4 as uuid } from 'uuid';

// import courses images
import JavaScriptCourse from 'assets/images/course/course-javascript.jpg';
import ReactCourse from 'assets/images/course/course-react.jpg';
import CSSCourse from 'assets/images/course/course-css.jpg';
import VueJSCourse from 'assets/images/course/course-vue.jpg';
import HTMLCourse from 'assets/images/course/course-html.jpg';

export const QuizListData = [
	{
		id: uuid(),
		title: 'Javascript Basic Quiz',
		image: JavaScriptCourse,
		duration: '30 Minutes',
		questions: 15
	},
	{
		id: uuid(),
		title: 'React Basic Quiz',
		image: ReactCourse,
		duration: '18 Minutes',
		questions: 20
	},
	{
		id: uuid(),
		title: 'CSS Beginner Quiz',
		image: CSSCourse,
		duration: '15 Minutes',
		questions: 18
	},
	{
		id: uuid(),
		title: 'Vue.js Basic Quiz',
		image: VueJSCourse,
		duration: '35 Minutes',
		questions: 26
	},
	{
		id: uuid(),
		title: 'HTML 5 Basic Quiz',
		image: HTMLCourse,
		duration: '30 Minutes',
		questions: 15
	}
];

export default QuizListData;
