// import node module libraries
import { Card, Image } from 'react-bootstrap';

const FeaturedCompaniesCard = (props) => {
	const { item } = props;
	return (
		<Card className="card-bordered card-hover h-100">
			<Card.Body>
				<Image src={item.logo} alt="" />
				<div className="my-4">
					<h3 className="lh-1">{item.company}</h3>
					<p className="mb-0">{item.briefInfo}</p>
				</div>
				<p className="mb-0">
					<span className="fw-semi-bold text-dark">{item.jobPosting}</span> Job
					Posting
				</p>
			</Card.Body>
		</Card>
	);
};

export default FeaturedCompaniesCard;
