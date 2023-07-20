// import node module libraries
import { v4 as uuid } from 'uuid';

export const QuizAttemptsData = [
	{
		id: uuid(),
		quizTitle: 'How to easily create a website with React',
		attemptDateTime: '20 June, 2022, 12:49 pm',
		questions: 25,
		correct: 9,
		incorrect: 16,
		marks: '18(39%)',
		result: 'Fail'
	},
	{
		id: uuid(),
		quizTitle: 'The Python Course: build web application',
		attemptDateTime: '10 June, 2022, 12:49 pm',
		questions: 40,
		correct: 20,
		incorrect: 20,
		marks: '50(50%)',
		result: 'Pending'
	},
	{
		id: uuid(),
		quizTitle: 'Angular - the complete guide for beginner',
		attemptDateTime: '08 June, 2022, 12:49 pm',
		questions: 20,
		correct: 20,
		incorrect: 0,
		marks: '11(100%)',
		result: 'Pass'
	},
	{
		id: uuid(),
		quizTitle: 'Wordpress: complete WordPress theme &amp; plugin development',
		attemptDateTime: '5 June, 2022, 12:49 pm',
		questions: 25,
		correct: 9,
		incorrect: 16,
		marks: '18(39%)',
		result: 'Fail'
	},
	{
		id: uuid(),
		quizTitle: 'CSS: ultimate CSS course from beginner to advanced',
		attemptDateTime: '4 June, 2022, 12:49 pm',
		questions: 25,
		correct: 9,
		incorrect: 16,
		marks: '18(39%)',
		result: 'Fail'
	}
];

export default QuizAttemptsData;
