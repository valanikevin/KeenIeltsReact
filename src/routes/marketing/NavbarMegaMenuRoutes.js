import { v4 as uuid } from 'uuid';

// Import required Media files
import Degree1 from 'assets/images/png/degree-1.png';
import Degree2 from 'assets/images/png/degree-2.png';
import Degree3 from 'assets/images/png/degree-3.png';
import Degree4 from 'assets/images/png/degree-4.png';

import Google from 'assets/images/png/google.png';
import IBM from 'assets/images/png/IBM.png';
import Microsoft from 'assets/images/png/microsoft.png';
import TensorFlow from 'assets/images/png/tensorflow.png';
import Meta from 'assets/images/png/meta.png';

const NavbarMegaMenuRoutes = [
	{
		id: uuid(),
		menuitem: 'Degrees',
		children: [
			{
				id: uuid(),
				menuitem: 'Master of Applied Data Science',
				subtitle: 'University of Michigan',
				image: Degree1,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'MBA in Business Analytics',
				subtitle: 'A&B College 1980',
				image: Degree2,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Master of Science in Machine',
				subtitle: 'Imperial College London',
				image: Degree3,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Master of Computer Science',
				subtitle: 'University of Colorado',
				image: Degree4,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'View all degree',
				button: true,
				link: '#'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'Certificate Programs',
		children: [
			{
				id: uuid(),
				menuitem: 'Google Data Analytics',
				subtitle: 'No Prerequisites',
				image: Google,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'IBM Data Science',
				subtitle: 'No Prerequisites',
				image: IBM,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Machine Leaning for Analytics',
				subtitle: 'Expert Feedback',
				image: Microsoft,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'TensorFlow Developer Certificate',
				subtitle: 'Certification Prerequisites',
				image: TensorFlow,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Meta Marketing Analytics',
				subtitle: 'University of Colorado',
				image: Meta,
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'View all Certificates',
				button: true,
				link: '#'
			}
		]
	},
	{
		id: uuid(),
		menuitem: 'Popular Skills',
		children: [
			{
				id: uuid(),
				menuitem: 'Python',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'SQL',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Microsoft Excel',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Machine Learning',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Data Science',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Data Analytics',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Power BI',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'Artificial Intelligence',
				link: '#'
			},
			{
				id: uuid(),
				menuitem: 'View all Skills',
				button: true,
				link: '#'
			}
		]
	}
];

export default NavbarMegaMenuRoutes;
