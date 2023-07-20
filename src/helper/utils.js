/**
 * Functions in utils
 */

/**
 * Add commas to a number
 * v1.0.0
 */
export const numberWithCommas = (x, decimal = 0) => {
	return x.toLocaleString('en-US', { minimumFractionDigits: decimal });
};

/**
 * Get the file extension from given file name
 * v1.2.0
 */
export const getFileExtension = (filename) => {
	const extension = filename.split('.').pop();
	return extension;
};

/**
 * Get the random number between min and max value
 * v1.2.0
 */
export const getRandomNo = (min = 0, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Get the color name/value based on given status
 * v1.2.0
 */
export const getStatusColor = (itemstatus) => {
	let color = '';
	switch (itemstatus) {
		case 'In Progress':
			color = 'info';
			break;
		case 'Pending':
			color = 'warning';
			break;
		case 'Finished':
			color = 'success';
			break;
		case 'Cancel':
			color = 'danger';
			break;
		default:
			color = 'primary';
	}
	return color;
};

/**
 * Get the color name/value based on given status
 * v1.2.0
 */
export const getCategoryColor = (category) => {
	let color = '';
	switch (category) {
		case 'Saas Services':
		case 'Entertainment':
		case 'Extra':
			color = 'info';
			break;
		case 'Design':
			color = 'warning';
			break;
		case 'Marketing':
			color = 'success';
			break;
		case 'Development':
			color = 'danger';
			break;
		case 'SEO':
			color = 'primary';
			break;
		default:
			color = 'primary';
	}
	return color;
};

//get chunk from array
export const chunk = (arr, chunkSize = 1, cache = []) => {
	const tmp = [...arr];
	if (chunkSize <= 0) return cache;
	while (tmp.length) cache.push(tmp.splice(0, chunkSize));
	return cache;
};

// function to get time value in hh:mm AM | PM format
export const getTimeValue = (date) => {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes;
	var strTime = hours + ':' + minutes + ' ' + ampm;
	return strTime;
};

// function to get date value in Month Name DD, YYYY format
export const getDateValue = (date) => {
	const month = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const yyyy = date.getFullYear();
	let mm = date.getMonth();
	let dd = date.getDate();
	var today = month[mm] + ' ' + dd + ', ' + yyyy;
	return today;
};

// function to generate slug or ID with slug format
export const getSlug = (text) => {
	text = text.toLowerCase();
	text = text.replace(/ /g, '-').replace(/[^\w-]+/g, '');
	return text;
};

const utils = [
	numberWithCommas,
	getFileExtension,
	getRandomNo,
	getStatusColor,
	chunk,
	getTimeValue,
	getDateValue,
	getSlug
];

export default utils;
