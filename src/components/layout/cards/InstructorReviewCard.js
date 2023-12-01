// import node module libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';

// import sub components
import Ratings from '../ratings/Ratings';

const InstructorReviewCard = ({ item }) => {
	return (
		<div className="d-flex">
			<Image src={item.image} alt="" className="rounded-circle avatar-lg" />
			<div className="ms-3 mt-2">
				<div className="d-flex align-items-center justify-content-between">
					<div>
						<h4 className="mb-0">{item.name}</h4>
						<span className="text-muted fs-6">{item.duration}</span>
					</div>
					<div>
						<OverlayTrigger
							key="top"
							placement="top"
							overlay={<Tooltip id={`tooltip-top`}>Report Abuse</Tooltip>}
						>
							<Link
								to="#"
								data-bs-toggle="tooltip"
								data-placement="top"
								title="Report Abuse"
							>
								<i className="fe fe-flag"></i>
							</Link>
						</OverlayTrigger>
					</div>
				</div>
				<div className="mt-2">
					<span className="me-1 text-warning">
						<Ratings rating={item.rating} />
					</span>
					<span className="me-1">for</span>
					<span className="h5">{item.for}</span>
					<p className="mt-2">{item.content} </p>
					<Link to="#" className="btn btn-outline-secondary btn-sm">
						Respond
					</Link>
				</div>
			</div>
		</div>
	);
};

// Typechecking With PropTypes
InstructorReviewCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default InstructorReviewCard;
