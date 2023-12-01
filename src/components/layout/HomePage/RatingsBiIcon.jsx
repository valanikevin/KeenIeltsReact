// import node module libraries
import React, { Fragment } from 'react';

// import bootstrap icons
import {
	StarFill,
	StarHalf,
} from 'react-bootstrap-icons';

const RatingsBiIcon = ({ rating, className, size }) => {
	rating = Math.abs(rating);
	let integer = Math.floor(rating);
	let decimal = rating - integer;
	let starsize = size ? size : '0.875rem';

	const PrintFilledStar = (repeatValue) => {
		const stars = [];
		for (let i = 1; i <= repeatValue; i++) {
			stars.push(
				<StarFill key={i} size={starsize} className={"me-1 " + className} />
			);
		}
		return stars;
	};
	const PrintHalfStar = (repeatValue) => {
		return repeatValue > 0 ? (
			<StarHalf size={starsize} className={"me-1 " + className}  />
		) : (
			''
		);
	};
	const PrintBlankStar = (repeatValue) => {
		const blankstars = [];
		for (let i = 1; i <= repeatValue; i++) {
			blankstars.push( <StarFill key={i} size={starsize} className="text-muted me-1" />
			);
		}
		return blankstars;
	};
	return (
		<Fragment>
			{PrintFilledStar(integer)}
			{PrintHalfStar(decimal)}
			{PrintBlankStar(5 - integer - (decimal > 0 ? 1 : 0))}
		</Fragment>
	);
};

export default RatingsBiIcon;
