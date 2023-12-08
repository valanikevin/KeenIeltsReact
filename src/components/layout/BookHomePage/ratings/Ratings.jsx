// import node module libraries
import React, { Fragment } from 'react';

// import MDI icons
import Icon from '@mdi/react';
import { mdiStar, mdiStarOutline, mdiStarHalfFull } from '@mdi/js';

const Ratings = ({ rating, className, size }) => {
	rating = Math.abs(rating);
	let integer = Math.floor(rating);
	let decimal = rating - integer;
	let starsize = size ? size : '0.875rem';

	const PrintFilledStar = (repeatValue) => {
		const stars = [];
		for (let i = 1; i <= repeatValue; i++) {
			stars.push(
				<Icon key={i} path={mdiStar} size={starsize} className={className} />
			);
		}
		return stars;
	};
	const PrintHalfStar = (repeatValue) => {
		return repeatValue > 0 ? (
			<Icon path={mdiStarHalfFull} size={starsize} className={className} />
		) : (
			''
		);
	};
	const PrintBlankStar = (repeatValue) => {
		const blankstars = [];
		for (let i = 1; i <= repeatValue; i++) {
			blankstars.push(
				<Icon
					key={i}
					path={mdiStarOutline}
					size={starsize}
					className={className}
				/>
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

export default Ratings;
