/***************************
Component : Avatar
****************************

Availalble Parameters

size        : Required, possible options are xxl, xl, lg, md, sm, xs
type        : Required, possible options are image , initial
src         : Image source is required if type = image
alt         : Optional, it's used for alt tag of image avtar, which is helpful for invalid url or broken link.
name        : Name is required if type = initial
className   : Optional class list e.g. circle, rounded, rounded-circle, bg-info etc...
status      : Optional, possible options are online, away, offline, busy
soft        : Optional, if it's set it will show soft background color which is only usefule for type = initial
showExact	: Optional, specify this parameter with name para, if you want to show exactly name value rather acronym format.
bodyClasses	: Optional, if you want to apply classes to avatar body i.e. span like me-3, ms-3 etc... you can use this property.

Added in v1.2.0
imgtooltip	: Optional - Boolean - Default=false, if you specify this parameter, it will show name para value in tooltip.

*/

// import node module libraries
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

// import custom components
import GKTippy from 'components/elements/tooltips/GKTippy';

const Avatar = (props) => {
	const {
		size,
		type,
		src,
		alt,
		name,
		className,
		status,
		soft,
		variant,
		showExact,
		imgtooltip,
		bodyClasses
	} = props;

	const GetAvatar = () => {
		if (type === 'initial' && name) {
			var matches = name.match(/\b(\w)/g);
			var acronym = showExact ? name : matches.join('');
			if (soft) {
				return imgtooltip ? (
					<GKTippy content={name}>
						<span
							className={`avatar avatar-${size} avatar-${variant}-soft me-0 mb-2 mb-lg-0`}
						>
							<span className={`avatar-initials ${className}`}>{acronym}</span>
						</span>
					</GKTippy>
				) : (
					<span
						className={`avatar avatar-${size} avatar-${variant}-soft me-0 mb-2 mb-lg-0`}
					>
						<span className={`avatar-initials ${className}`}>{acronym}</span>
					</span>
				);
			}
			if (imgtooltip && name) {
				return (
					<GKTippy content={name}>
						<span
							title={alt}
							className={`avatar avatar-${size} avatar-primary me-0 mb-2 mb-lg-0 ${
								status ? 'avatar-indicators avatar-' + status : ''
							}`}
						>
							<span className={`avatar-initials bg-${variant} ${className}`}>
								{acronym}
							</span>
						</span>
					</GKTippy>
				);
			} else {
				return (
					<span
						title={alt}
						className={`avatar avatar-${size} avatar-primary me-0 mb-2 mb-lg-0 ${
							status ? 'avatar-indicators avatar-' + status : ''
						}`}
					>
						<span className={`avatar-initials bg-${variant} ${className}`}>
							{acronym}
						</span>
					</span>
				);
			}
		} else if (type === 'image' && src) {
			if (imgtooltip && name) {
				return (
					<span
						className={`avatar avatar-${size} me-1 ${
							status ? 'avatar-indicators mb-2 mb-lg-0 avatar-' + status : ''
						} ${bodyClasses ? bodyClasses : ''}`}
					>
						<GKTippy content={name}>
							<Image
								src={src}
								alt={alt}
								className={`mb-2 mb-lg-0 ${className}`}
							/>
						</GKTippy>
					</span>
				);
			} else {
				return (
					<span
						className={`avatar avatar-${size} me-0 ${
							status ? 'avatar-indicators mb-2 mb-lg-0 avatar-' + status : ''
						}`}
					>
						<Image
							src={src}
							alt={alt}
							className={`mb-2 mb-lg-0 ${className}`}
						/>
					</span>
				);
			}
		} else {
			return (
				<span
					dangerouslySetInnerHTML={{
						__html: 'Required Avatar parameter not found'
					}}
				></span>
			);
		}
	};
	return <GetAvatar />;
};

Avatar.propTypes = {
	size: PropTypes.oneOf(['xxl', 'xl', 'lg', 'md', 'sm', 'xs']),
	type: PropTypes.oneOf(['image', 'initial']),
	src: PropTypes.string,
	alt: PropTypes.string,
	name: PropTypes.string,
	status: PropTypes.oneOf(['online', 'away', 'offline', 'busy']),
	className: PropTypes.string,
	variant: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info',
		'light',
		'dark'
	]),
	soft: PropTypes.bool,
	showExact: PropTypes.bool,
	imgtooltip: PropTypes.bool,
	bodyClasses: PropTypes.string
};

Avatar.defaultProps = {
	className: '',
	size: 'md',
	variant: 'primary',
	soft: false,
	showExact: false
};

const AvatarGroup = (props) => {
	return (
		<div className={`avatar-group ${props.className ? props.className : ''}`}>
			{props.children}
		</div>
	);
};
const Ratio = (props) => {
	const { src, size, className } = props;
	return (
		<span>
			<Image
				src={src}
				alt=""
				className={`img-4by3-${size} mb-2 mb-lg-0 ${className}`}
			/>
		</span>
	);
};

export { Avatar, AvatarGroup, Ratio };
