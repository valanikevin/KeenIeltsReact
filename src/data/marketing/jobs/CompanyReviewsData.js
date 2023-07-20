import { v4 as uuid } from 'uuid';

// import media files
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';

export const CompanyReviewsData = [
	{
		id: uuid(),
		name: 'Max Hawkins',
		avatar: Avatar2,
		rating: 5.0,
		postedOn: '03 Jun 2022',
		title: 'Good work environment and culture.',
		review:
			'Good work environment and culture. There are a lot of trainings you can go through and learn. You ll get a good work life balance. Good gyms and trainers are also available. You ll have Job Security. Teammates were supportive.'
	},
	{
		id: uuid(),
		name: 'Arthur Williamson',
		avatar: Avatar4,
		rating: 4.5,
		postedOn: '02 Jun 2022',
		title: 'Skill development assistance and friendly culture.',
		review:
			'Pros include job security, employee benefits like healthcare, professional and skill development assistance and friendly culture. Campus is picturesque and is a treat to work from. Company transport is available. Projects are very good.'
	},
	{
		id: uuid(),
		name: 'Claire Jones',
		avatar: Avatar5,
		rating: 4.0,
		postedOn: '20 Jun 2022',
		title: 'Team mates are supportive and the management is transparent.',
		review:
			'Good work environment and culture teammates are supportive and the management is transparent there is a huge cafeteria and gaming arcade for chilling company policies are good appraisals are fair and they give good salary hoke and bonus every year'
	},
	{
		id: uuid(),
		name: 'Summona Garg',
		avatar: Avatar6,
		rating: 4.2,
		postedOn: '18 Jun 2022',
		title: 'Skill development assistance and friendly culture',
		review:
			'Pros include job security, employee benefits like healthcare, professional and skill development assistance and friendly culture. Campus is picturesque and is a treat to work from. Company transport is available. Projects are very good.'
	}
];

export default CompanyReviewsData;
