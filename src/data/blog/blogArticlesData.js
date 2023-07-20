// import media files

// import blog post images
import Blogpost1 from 'assets/images/blog/blogpost-1.jpg';
import Blogpost2 from 'assets/images/blog/blogpost-2.jpg';
import Blogpost3 from 'assets/images/blog/blogpost-3.jpg';
import Blogpost4 from 'assets/images/blog/blogpost-4.jpg';
import Blogpost5 from 'assets/images/blog/blogpost-5.jpg';
import Blogpost6 from 'assets/images/blog/blogpost-6.jpg';

// import avatar media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar6 from 'assets/images/avatar/avatar-6.jpg';
import Avatar7 from 'assets/images/avatar/avatar-7.jpg';
import Avatar8 from 'assets/images/avatar/avatar-8.jpg';
import Avatar9 from 'assets/images/avatar/avatar-9.jpg';
import Avatar10 from 'assets/images/avatar/avatar-10.jpg';

const blogContent = `<p><h4>Design Systems for Developers Geeks a modern, clean and accessibility oriented design system for developing fast and powerful web interfaces.</h4>
<br>Condimentum leo utipsum euismod feugiatn elntum sapiennonser variusmi elementum necunc elementum velitnon tortor convallis variusa placerat nequhse. 
Mauris varius ullamcorper tincidsellus egestas innisivel sollicituullam feugiate facilisis ones Suspendisse blandit sedtincinean.<br>
Mauris varius ullamcorper tincidsellus egestas innisivel sollicituullam feugiate facilisis ones velleo finibus maximus nequsese sedmattis auspendisse<u>
duimetus ullamcorper faucibuse blandit</u>sedtincinean.</p></div><br><hr><br><blockquote style="text-align: center;">
<h2 style="color: rgb(117, 79, 254);">"Failure will never overtake me if my determination to succeed is strong enough."</h2><footer>
<cite title="Source Title">Og Mandino</cite></footer></blockquote><br><hr><br><div><p>Condimentum leo utipsum euismod feugiatn elntum 
<strong>sapiennonser variusmi elementum </strong>necunc elem entum velitnon tortor convallis variusa placerat nequhse. Quis eu Lorem irure magna. 
Ex labore reprehenderit veniam irure id nostrud velit. Minim aliquip cillum laborum qui Lorem eu.</p>
<p>Sint officia nulla deserunt voluptate non amet consequat ipsum tempor. Nulla id cupidatat ipsum occaecat. Aute ad et fugiat velit sunt qui veniam labore elit ipsum commodo proident. 
Sit tempor consectetur commodo laborum mollit. Enim sint nostrud nisi in ad aliqua laboris ad non.</p></div><div><h3>Unordered Lists (Nested)</h3><br><ul><li>Lorem ipsum dolor sit amet</li>
<li>Consectetur adipiscing elit</li><li>Integer molestie lorem at massa</li><li>Facilisis in pretium nisl aliquet</li><li>Nulla volutpat aliquam velit<ul><li>Phasellus iaculis neque</li>
<li>Purus sodales ultricies</li><li>Vestibulum laoreet porttitor sem</li><li>Ac tristique libero volutpat at</li></ul></li><li>Faucibus porta lacus fringilla vel</li><li>Aenean sit amet erat nunc</li>
<li>Eget porttitor lorem</li></ul></div><div><h3>Ordered List (Nested)</h3><ol><li>Lorem ipsum dolor sit amet</li><li>Consectetur adipiscing elit</li><li>Integer molestie lorem at massa</li>
<li>Facilisis in pretium nisl aliquet</li><li>Nulla volutpat aliquam velit<ol><li>Phasellus iaculis neque</li><li>Purus sodales ultricies</li><li>Vestibulum laoreet porttitor sem</li>
<li>Ac tristique libero volutpat at</li></ol></li><li>Faucibus porta lacus fringilla vel</li><li>Aenean sit amet erat nunc</li><li>Eget porttitor lorem</li></ol></div><div><h2>Image </h2>
<p>Sint officia nulla deserunt voluptate non amet consequat ipsum tempor. Nulla id cupidatat ipsum occaecat. Aute ad et fugiat velit sunt qui veniam labore elit ipsum commodo proident. 
Sit tempor consectetur commodo laborum mollit. Enim sint nostrud nisi in ad aliqua laboris ad non.</p>
<img src="https://codescandy.com/geeks-bootstrap-5/assets/images/blog/center-img.jpg" alt=""  style="width:100%">`;

const BlogArticles = [
	{
		id: 1,
		blogpostimage: Blogpost2,
		category: 'Courses',
		title: 'Getting started the Web App JavaScript in 2020',
		details:
			'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
		authorname: 'Dustin Warren',
		authorimage: Avatar6,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 13, 2020',
		readinglength: 6,
		content: blogContent
	},
	{
		id: 2,
		blogpostimage: Blogpost3,
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: Avatar7,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 3,
		blogpostimage: Blogpost1,
		category: 'Tutorial',
		title: 'What is PHP Function? For Beginner’s Guide',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Lisa Menon',
		authorimage: Avatar8,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 06, 2020',
		readinglength: 8,
		content: blogContent
	},
	{
		id: 4,
		blogpostimage: Blogpost4,
		category: 'Workshop',
		title: 'What is Cyber Security? A Beginner’s Guide',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Maria Pinto',
		authorimage: Avatar9,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 07, 2020',
		readinglength: 15,
		content: blogContent
	},
	{
		id: 5,
		blogpostimage: Blogpost5,
		category: 'Tutorial',
		title: 'What is machine learning and how does it work?',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Loran Sipon',
		authorimage: Avatar10,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 08, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 6,
		blogpostimage: Blogpost3,
		category: 'Workshop',
		title: 'The Best DevOps Tools for Your Application Lifecycle',
		details:
			'Inventore pariatur veritatis maxime fugiat sint dolorem quas culpa officiis nemo quis!',
		authorname: 'Dustin Warren',
		authorimage: Avatar1,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 09, 2020',
		readinglength: 12,
		content: blogContent
	},
	{
		id: 7,
		blogpostimage: Blogpost1,
		category: 'Company',
		title: 'How to become modern Stack Developer in 2020',
		details:
			'At beatae non sit dicta similique perspiciatis facilis veritatis quam. Recusandae, corrupti?',
		authorname: 'Reva Yokk',
		authorimage: Avatar2,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 10, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 8,
		blogpostimage: Blogpost6,
		category: 'Company',
		title: 'How to Become a Data Scientist?',
		details:
			'Nulla voluptate in facere saepe est alias et iste, accusantium sint enim!',
		authorname: 'Miron Sulla',
		authorimage: Avatar3,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 9,
		blogpostimage: Blogpost1,
		category: 'Workshop',
		title: 'How to become WebDesinger?',
		details:
			'Vero expedita voluptatibus cumque sunt ullam cum natus, vitae provident debitis pariatur?',
		authorname: 'Lucy Kolin',
		authorimage: Avatar4,
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 10,
		blogpostimage: Blogpost2,
		category: 'Tutorial',
		title: 'Developing Agile Leadership',
		details:
			'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
		authorname: 'Jerry Dom',
		authorimage: Avatar5,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 13, 2020',
		readinglength: 12,
		content: blogContent
	},
	{
		id: 11,
		blogpostimage: Blogpost2,
		category: 'Tutorial',
		title: 'Getting started the Web App JavaScript in 2020',
		details:
			'Debitis ipsam ratione molestias dolores qui asperiores consequatur facilis error.',
		authorname: 'Dustin Warren',
		authorimage: Avatar6,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 13, 2020',
		readinglength: 6,
		content: blogContent
	},
	{
		id: 12,
		blogpostimage: Blogpost3,
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: Avatar7,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 13,
		blogpostimage: Blogpost4,
		category: 'Tutorial',
		title: 'What is Cyber Security? A Beginner’s Guide',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Maria Pinto',
		authorimage: Avatar9,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 07, 2020',
		readinglength: 15,
		content: blogContent
	},
	{
		id: 14,
		blogpostimage: Blogpost3,
		category: 'Tutorial',
		title: 'The Best DevOps Tools for Your Application Lifecycle',
		details:
			'Inventore pariatur veritatis maxime fugiat sint dolorem quas culpa officiis nemo quis!',
		authorname: 'Dustin Warren',
		authorimage: Avatar1,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 09, 2020',
		readinglength: 12,
		content: blogContent
	},
	{
		id: 15,
		blogpostimage: Blogpost5,
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		details:
			'At beatae non sit dicta similique perspiciatis facilis veritatis quam. Recusandae, corrupti?',
		authorname: 'Reva Yokk',
		authorimage: Avatar2,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 10, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 16,
		blogpostimage: Blogpost6,
		category: 'Company',
		title: 'How to Become a Data Scientist?',
		details:
			'Nulla voluptate in facere saepe est alias et iste, accusantium sint enim!',
		authorname: 'Miron Sulla',
		authorimage: Avatar3,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 17,
		blogpostimage: Blogpost1,
		category: 'Tutorial',
		title: 'How to become WebDesinger?',
		details:
			'Vero expedita voluptatibus cumque sunt ullam cum natus, vitae provident debitis pariatur?',
		authorname: 'Lucy Kolin',
		authorimage: Avatar4,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 18,
		blogpostimage: Blogpost3,
		category: 'Courses',
		title: 'How to become modern Stack Developer in 2020',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: Avatar7,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 19,
		blogpostimage: Blogpost6,
		category: 'Workshop',
		title: 'How to become modern Stack Developer in 2020',
		details:
			'At beatae non sit dicta similique perspiciatis facilis veritatis quam. Recusandae, corrupti?',
		authorname: 'Reva Yokk',
		authorimage: Avatar2,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 10, 2020',
		readinglength: 10,
		content: blogContent
	},
	{
		id: 20,
		blogpostimage: Blogpost3,
		category: 'Tutorial',
		title: 'How to Become a Data Scientist?',
		details:
			'Nulla voluptate in facere saepe est alias et iste, accusantium sint enim!',
		authorname: 'Miron Sulla',
		authorimage: Avatar3,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 21,
		blogpostimage: Blogpost1,
		category: 'Courses',
		title: 'How to become WebDesinger?',
		details:
			'Vero expedita voluptatibus cumque sunt ullam cum natus, vitae provident debitis pariatur?',
		authorname: 'Lucy Kolin',
		authorimage: Avatar4,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	},
	{
		id: 22,
		blogpostimage: Blogpost5,
		category: 'Tutorial',
		title: 'How to become modern Stack Developer in 2020',
		details:
			'Lorem ipsum dolor sit amet, accu msan in, tempor dictum nequrem ipsum',
		authorname: 'Reva Yokk',
		authorimage: Avatar7,
		aboutauthor: 'Marketing Manager',
		postedon: 'September 05, 2020',
		readinglength: 20,
		content: blogContent
	}
];

export default BlogArticles;
