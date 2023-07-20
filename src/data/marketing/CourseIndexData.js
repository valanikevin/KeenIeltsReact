// import media files
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';

export const CourseIndex = [
	{
		id: 1,
		title: 'Introduction to JavaScript',
		total_videos: 4,
		total_duratoin: '1 hour and 17 minutes',
		completed: 5, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 7s',
				status: 'finished',
				locked: false
			},
			{
				id: 2,
				topic: 'Installing Development Software',
				duratoin: '3m 11s',
				status: 'continue',
				locked: false
			},
			{
				id: 3,
				topic: 'Hello World Project from GitHub',
				duratoin: '2m 33s',
				status: 'pending',
				locked: false
			},
			{
				id: 3,
				topic: 'Our Sample Website',
				duratoin: '2m 15s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 2,
		title: 'JavaScript Beginning',
		total_videos: 8,
		total_duratoin: '34 minutes',
		completed: 0, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 41s',
				status: 'pending',
				locked: true
			},
			{
				id: 2,
				topic: 'Adding JavaScript Code to a Web Page',
				duratoin: '3m 39s',
				status: 'pending',
				locked: true
			},
			{
				id: 3,
				topic: 'Working with JavaScript Files',
				duratoin: '6m 18s',
				status: 'pending',
				locked: true
			},
			{
				id: 4,
				topic: 'Formatting Code',
				duratoin: '2m 18s',
				status: 'pending',
				locked: true
			},
			{
				id: 5,
				topic: 'Detecting and Fixing Errors',
				duratoin: '3m 14s',
				status: 'pending',
				locked: true
			},
			{
				id: 6,
				topic: 'Case Sensitivity',
				duratoin: '1m 48s',
				status: 'pending',
				locked: true
			},
			{
				id: 7,
				topic: 'Commenting Code',
				duratoin: '2m 24s',
				status: 'pending',
				locked: true
			},
			{
				id: 8,
				topic: 'Summary',
				duratoin: '2m 14s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 3,
		title: 'Variables and Constants',
		total_videos: 10,
		total_duratoin: '3 hour and 24 minutes',
		completed: 0, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 19s',
				status: 'pending',
				locked: true
			},
			{
				id: 2,
				topic: 'What Is a Variable?',
				duratoin: '2m 11s',
				status: 'pending',
				locked: true
			},
			{
				id: 3,
				topic: 'Declaring Variables',
				duratoin: '2m 30s',
				status: 'pending',
				locked: true
			},
			{
				id: 4,
				topic: 'Using let to Declare Variables',
				duratoin: '3m 28s',
				status: 'pending',
				locked: true
			},
			{
				id: 5,
				topic: 'Naming Variables',
				duratoin: '3m 14s',
				status: 'pending',
				locked: true
			},
			{
				id: 6,
				topic: 'Common Errors Using Variables',
				duratoin: '3m 30s',
				status: 'pending',
				locked: true
			},
			{
				id: 7,
				topic: 'Changing Variable Values',
				duratoin: '2m 4s',
				status: 'pending',
				locked: true
			},
			{
				id: 8,
				topic: 'Constants',
				duratoin: '3m 15s',
				status: 'pending',
				locked: true
			},
			{
				id: 9,
				topic: 'The var Keyword',
				duratoin: '2m 20s',
				status: 'pending',
				locked: true
			},
			{
				id: 10,
				topic: 'Summary',
				duratoin: '1m 49s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 4,
		title: 'Program Flow',
		total_videos: 11,
		total_duratoin: '2 hour and 10 minutes',
		completed: 0, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 52s',
				status: 'pending',
				locked: true
			},
			{
				id: 2,
				topic: 'Clip Watched',
				duratoin: '4m 27s',
				status: 'pending',
				locked: true
			},
			{
				id: 3,
				topic: 'Conditionals Using if()',
				duratoin: '4m 25s',
				status: 'pending',
				locked: true
			},
			{
				id: 4,
				topic: 'Truthy and Falsy',
				duratoin: '3m 30s',
				status: 'pending',
				locked: true
			},
			{
				id: 5,
				topic: 'if ... else',
				duratoin: '3m 30s',
				status: 'pending',
				locked: true
			},
			{
				id: 6,
				topic: 'Comparing === and ==',
				duratoin: '1m 52s',
				status: 'pending',
				locked: true
			},
			{
				id: 7,
				topic: 'The Ternary Operator',
				duratoin: '2m 47s',
				status: 'pending',
				locked: true
			},
			{
				id: 8,
				topic: 'Block Scope Using let',
				duratoin: '2m 21s',
				status: 'pending',
				locked: true
			},
			{
				id: 9,
				topic: 'Looping with for()',
				duratoin: '5m 30s',
				status: 'pending',
				locked: true
			},
			{
				id: 10,
				topic: 'Looping with do ... while()',
				duratoin: '1m 58s',
				status: 'pending',
				locked: true
			},
			{
				id: 11,
				topic: 'Summary',
				duratoin: '2m 21s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 5,
		title: 'Functions',
		total_videos: 8,
		total_duratoin: '4 hour and 38 minutes',
		completed: 0, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 52s',
				status: 'pending',
				locked: true
			},
			{
				id: 2,
				topic: 'Function Basics',
				duratoin: '2m 46s',
				status: 'pending',
				locked: true
			},
			{
				id: 3,
				topic: 'Function Expressions',
				duratoin: '2m 32s',
				status: 'pending',
				locked: true
			},
			{
				id: 4,
				topic: 'Passing Information to Functions',
				duratoin: '3m 19s',
				status: 'pending',
				locked: true
			},
			{
				id: 5,
				topic: 'Function Return Values',
				duratoin: '3m 13s',
				status: 'pending',
				locked: true
			},
			{
				id: 6,
				topic: 'Function Scope',
				duratoin: '4m 20s',
				status: 'pending',
				locked: true
			},
			{
				id: 7,
				topic: 'Using Functions to Modify Web Pages',
				duratoin: '3m 42s',
				status: 'pending',
				locked: true
			},
			{
				id: 8,
				topic: 'Summary',
				duratoin: '2m 3s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 6,
		title: 'Objects and the DOM',
		total_videos: 10,
		total_duratoin: '2 hour and 10 minutes',
		completed: 0, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 48s',
				status: 'pending',
				locked: true
			},
			{
				id: 2,
				topic: 'Object Properties',
				duratoin: '4m 28s',
				status: 'pending',
				locked: true
			},
			{
				id: 3,
				topic: 'Object Methods',
				duratoin: '3m 3s',
				status: 'pending',
				locked: true
			},
			{
				id: 4,
				topic: 'Passing Objects to Functions',
				duratoin: '3m 27s',
				status: 'pending',
				locked: true
			},
			{
				id: 5,
				topic: 'Standard Built-in Objects',
				duratoin: '6m 55s',
				status: 'pending',
				locked: true
			},
			{
				id: 6,
				topic: 'The Document Object Model (DOM)',
				duratoin: '3m 29s',
				status: 'pending',
				locked: true
			},
			{
				id: 7,
				topic: 'Styling DOM Elements',
				duratoin: '2m 42s',
				status: 'pending',
				locked: true
			},
			{
				id: 8,
				topic: 'Detecting Button Clicks',
				duratoin: '2m 3s',
				status: 'pending',
				locked: true
			},
			{
				id: 9,
				topic: 'Showing and Hiding DOM Elements',
				duratoin: '4m 37s',
				status: 'pending',
				locked: true
			},
			{
				id: 10,
				topic: 'Summary',
				duratoin: '2m 47s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 7,
		title: 'Arrays',
		total_videos: 8,
		total_duratoin: '1 hour and 5 minutes',
		completed: 0, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 48s',
				status: 'pending',
				locked: true
			},
			{
				id: 2,
				topic: 'Creating and Initializing Arrays',
				duratoin: '4m 7s',
				status: 'pending',
				locked: true
			},
			{
				id: 3,
				topic: 'Accessing Array Items',
				duratoin: '2m 4s',
				status: 'pending',
				locked: true
			},
			{
				id: 4,
				topic: 'Manipulating Arrays',
				duratoin: '4m 3s',
				status: 'pending',
				locked: true
			},
			{
				id: 5,
				topic: 'slice() and splice()',
				duratoin: '5m 54s',
				status: 'pending',
				locked: true
			},
			{
				id: 6,
				topic: 'Array Searching and Looping',
				duratoin: '7m 32s',
				status: 'pending',
				locked: true
			},
			{
				id: 7,
				topic: 'Arrays in the DOM ',
				duratoin: '4m 11s',
				status: 'pending',
				locked: true
			},
			{
				id: 8,
				topic: 'Summary',
				duratoin: '2m 28s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 8,
		title: 'Scope and Hoisting',
		total_videos: 7,
		total_duratoin: '3 hour and 15 minutes',
		completed: 0, // Percent
		topics: [
			{
				id: 1,
				topic: 'Introduction',
				duratoin: '1m 20s',
				status: 'pending',
				locked: true
			},
			{
				id: 2,
				topic: 'Global Scope',
				duratoin: '4m 7s',
				status: 'pending',
				locked: true
			},
			{
				id: 3,
				topic: 'Clip Watched',
				duratoin: '3m 14s',
				status: 'pending',
				locked: true
			},
			{
				id: 4,
				topic: 'Function Scope',
				duratoin: '3m 45s',
				status: 'pending',
				locked: true
			},
			{
				id: 5,
				topic: 'Var and Hoisting',
				duratoin: '2m 21s',
				status: 'pending',
				locked: true
			},
			{
				id: 6,
				topic: 'Undeclared Variables and Strict Mode',
				duratoin: '2m 16s',
				status: 'pending',
				locked: true
			},
			{
				id: 7,
				topic: 'Summary',
				duratoin: '1m 33s',
				status: 'pending',
				locked: true
			}
		]
	},
	{
		id: 9,
		title: 'Summary',
		total_videos: 1,
		total_duratoin: '5 minutes',
		summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repudiandae esse velit eos sunt ab inventore est tenetur blanditiis? 
        Voluptas eius molestiae ad itaque tempora nobis minima eveniet aperiam molestias, 
        maiores natus expedita dolores ea non possimus magnam corrupt i quas rem unde quo 
        enim porro culpa! Quaerat veritatis veniam corrupti iusto.`,
		topics: [] // It's compulsary to show summary, because it's used for conditional rendering
	}
];

export const CourseFAQs = [
	{
		id: 1,
		question: 'How this course help me to design layout?',
		answer: `<p>My name is Jason Woo and I work as human duct tape at Gatsby, 
        that means that I do a lot of different things. Everything from dev 
        roll to writing content to writing code. And I used to work as an architect at IBM. 
        I live in Portland, Oregon.</p>`
	},
	{
		id: 2,
		question: 'What is important of this course?',
		answer: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`
	},
	{
		id: 3,
		question: 'Why Take This Course?',
		answer: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics.
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`
	},
	{
		id: 4,
		question: 'Is able to create application after this course?',
		answer: `<p>
        We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
        to write React components in your markdown.</p>
        <p>We'll dive into GraphQL, the fundamentals of GraphQL. We're only gonna use the pieces of it that we need to build in Gatsby. We're not gonna be doing a deep dive into what GraphQL is or the language specifics. We're also gonna get into MDX. MDX is a way
            to write React components in your markdown.</p>`
	}
];

export const Transcripts = [
	{
		id: 1,
		title: 'Course Overview',
		duration: '[00:00:00]',
		description: `<p class="mb-0">My name is John Deo and I work as human duct tape at Gatsby, 
        that means that I do a lot of different things. Everything from dev roll to writing 
        content to writing code. And I used to work as an architect at IBM. I live in Portland, 
        Oregon.</p>`
	},
	{
		id: 2,
		title: 'Introduction',
		duration: '[00:00:16]',
		description: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`
	},
	{
		id: 3,
		title: 'Why Take This Course?',
		duration: '[00:00:37]',
		description: `<p> We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`
	},
	{
		id: 4,
		title: 'A Look at the Demo Application',
		duration: '[00:00:54]',
		description: `<p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>
        <p>We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`
	},
	{
		id: 5,
		title: 'Summary',
		duration: '[00:01:31]',
		description: `<p> We'll dive into GraphQL, the fundamentals of GraphQL. 
        We're only gonna use the pieces of it that we need to build in Gatsby. 
        We're not gonna be doing a deep dive into what GraphQL is or the language specifics. 
        We're also gonna get into MDX. MDX is a way to write React components in your markdown.</p>`
	}
];

export const Reviews = [
	{
		id: 1,
		student: 'Max Hawkins',
		image: Avatar2,
		postedon: '2 Days ago',
		rating: 5,
		review: `<p>Lectures were at a really good pace and I never felt lost. The
        instructor was well informed and allowed me to learn and navigate
        Figma easily.</p>`
	},
	{
		id: 2,
		student: 'Arthur Williamson',
		image: Avatar3,
		postedon: 'Days ago',
		rating: 5,
		review: `<p>Its pretty good.Just a reminder that there are also students with
        Windows, meaning Figma its a bit different of yours. Thank you!</p>`
	},
	{
		id: 3,
		student: 'Claire Jones',
		image: Avatar4,
		postedon: '4 Days ago',
		rating: 4.5,
		review: `<p>Great course for learning Figma, the only bad detail would be that
        some icons are not included in the assets. But 90% of the icons
        needed are included, and the voice of the instructor was very clear
        and easy to understood.</p>`
	},
	{
		id: 4,
		student: 'Bessie Pena',
		image: Avatar5,
		postedon: '5 Days ago',
		rating: 4.5,
		review: `<p>I have really enjoyed this class and learned a lot, found it very
        inspiring and helpful, thank you!<i className="em em-heart_eyes ms-2 fs-6"></i></p>`
	}
];

export const CourseIndexData = [CourseIndex, Reviews, Transcripts, CourseFAQs];

export default CourseIndexData;
