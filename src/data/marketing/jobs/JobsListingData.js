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

const jobDetails = `
<div class="mt-6">
    <h2 class="mb-3 fs-3">Job description</h2>
    <p>Maintains information technology strategies by managing staff; researching, Budgeting and
        implementing
        technological strategic solutions.
    </p>
</div>
<div class="mt-6">
    <h2 class="mb-3 fs-3">Role</h2>
    <p>Aliquam pellentesque mollis interdum. Proin ligula lacus, maximus quis ante a, luctus sodales
        sapien. Donec ut
        tristique nisi. Nulla a quam sit amet turpis convallis porttitor vel sed quam. Ut in odio
        enim. Maecenas eu tellus erat.
        Maecenas nec maximus elit, ac suscipit justo. Maecenas nisl tellus, sodales non gravida
        eget, placerat sit amet erat.
    </p>
</div>
<div class="mt-6">
    <h2 class="mb-3 fs-3">Responsibilities</h2>
    <ul>
        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
        <li> Vivamus maximus sem ac pellentesque tinciduntì</li>
        <li> Sed vitae metus in mauris ultricies tempor hendrerit eu nisiì</li>
        <li> Sed in odio a lorem porttitor dictum et eget nullaì</li>
        <li> Donec molestie tortor sed risus hendrerit, in laoreet diam tinciduntì</li>
        <li> Curabitur finibus lacus ac dui placerat venenatisì</li>
        <li> Aenean id ligula molestie, pretium ipsum in, varius elit.</li>
    </ul>
    </div>
    <div class="mt-6">
    <h2 class="mb-3 fs-3">Desired Candidate Profile</h2>
    <ul>
        <li> Lorem ipsum dolor sit amet, consectetur adipiscing elitì</li>
        <li> Minimum consulting experience of 2 years including Threat Hunting role</li>
        <li> Sed vitae metus in mauris ultricies tempor hendrerit eu nisiì</li>
        <li> Donec molestie tortor sed risus hendrerit, in laoreet diam tinciduntì</li>
        <li>Sed in odio a lorem porttitor dictum et eget nullaì</li>
        <li> Curabitur finibus lacus ac dui placerat venenatisì</li>
        <li> Aenean id ligula molestie, pretium ipsum in, varius elit.</li>
    </ul>
</div>
<div class="mt-6">
    <h2 class="mb-3 fs-3">Perks and Benefits</h2>
    <ul>
        <li> Health insurance</li>
        <li> Employee discount</li>
        <li> Relocation assistance</li>
        <li> Cafeteri</li>
        <li>Soft Skill Trainin</li>
        <li> Free Transport</li>
        <li> Education Assistance</li>
        <li> Work From Home</li>
    </ul>
</div>
`;
export const JobsListingData = [
	{
		id: uuid(),
		company: 'HelpDesk',
		slug: 'helpdesk-software-engineer-web3crypto',
		logo: JobListLogo1,
		position: 'Software Engineer (Web3/Crypto)',
		experience: '1 - 5 years',
		salary: '12k - 18k',
		location: 'Ahmedabad, Gujarat',
		postedOn: '21 hours ago',
		totalReviews: 131,
		rating: 4.5,
		featured: true,
		jobApplicants: 306,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'Airtable',
		slug: 'airtable-senior-react-developer',
		logo: JobListLogo2,
		position: 'Senior React Developer',
		experience: '0 - 5 years',
		salary: '5k - 8k',
		location: 'Jaipur, Rajasthan',
		postedOn: '1 day ago',
		totalReviews: 324,
		rating: 4.5,
		featured: false,
		jobApplicants: 300,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'Square ',
		slug: 'square-software-engineer-web3crypto',
		logo: JobListLogo3,
		position: 'Software Engineer (Web3/Crypto)',
		experience: '2 - 6 years',
		salary: 'Not discloses',
		location: 'Hastsal, Delhi',
		postedOn: '1 day ago',
		totalReviews: 424,
		rating: 3.9,
		featured: false,
		jobApplicants: 242,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'Dot',
		slug: 'dot-lead-software-engineer',
		logo: JobListLogo4,
		position: 'Lead Software Engineer',
		experience: '0 - 2 years',
		salary: 'Not discloses',
		location: 'Pune, Chennai',
		postedOn: '1 Month ago',
		totalReviews: 523,
		rating: 3.9,
		featured: false,
		jobApplicants: 100,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'Toggle',
		slug: 'toggle-senior-full-stack-engineer',
		logo: JobListLogo5,
		position: 'Senior Full Stack Engineer',
		experience: '2 - 6 years',
		salary: 'Not discloses',
		location: 'Ahmedabad, Gujarat',
		postedOn: '2 Month ago',
		totalReviews: 923,
		rating: 4.9,
		featured: false,
		jobApplicants: 216,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'HelpScout',
		slug: 'helpscout-software-engineer-web3crypto',
		logo: JobListLogo1,
		position: 'Software Engineer (Web3/Crypto)',
		experience: '3 - 6 years',
		salary: 'Not discloses',
		location: 'Surat, Gujarat',
		postedOn: '3 Month ago',
		totalReviews: 923,
		rating: 4.9,
		featured: false,
		jobApplicants: 216,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'Amazon',
		slug: 'amazon-senior-full-stack-engineer',
		logo: AmazonLogo,
		position: 'Senior Full Stack Engineer',
		experience: '4 - 7 years',
		salary: 'Not discloses',
		location: 'Washington, USA',
		postedOn: '2 Month ago',
		totalReviews: 923,
		rating: 5.0,
		featured: false,
		jobApplicants: 3216,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'Dribbble',
		slug: 'dribbble-full-stack-software-engineer-java-spring',
		logo: DribbbleLogo,
		position: 'Full Stack Software Engineer (Java, Spring)',
		experience: '3 - 5 years',
		salary: 'Not discloses',
		location: 'California, United States',
		postedOn: '2 Month ago',
		totalReviews: 923,
		rating: 5.0,
		featured: false,
		jobApplicants: 4516,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'Next JS',
		slug: 'next-js-cloud-practice-leader',
		logo: NextJSLogo,
		position: 'Cloud Practice Leader',
		experience: '2 - 6 years',
		salary: 'Not discloses',
		location: 'Karnataka, Banglore',
		postedOn: '2 Month ago',
		totalReviews: 923,
		rating: 4.9,
		featured: false,
		jobApplicants: 216,
		jobDetails: jobDetails
	},
	{
		id: uuid(),
		company: 'React',
		slug: 'react-senior-full-stack-engineer',
		logo: ReactLogo,
		position: 'Senior Full Stack Engineer',
		experience: '1 - 4 years',
		salary: 'Not discloses',
		location: 'California, U.S.',
		postedOn: '2 Month ago',
		totalReviews: 1923,
		rating: 5.0,
		featured: false,
		jobApplicants: 2316,
		jobDetails: jobDetails
	}
];

export default JobsListingData;
