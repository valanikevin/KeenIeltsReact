// import node module libraries
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen } from '@mdi/js';

const TestimonialColorCard = ({ item }) => {
	return (
		<Card className="shadow-lg mb-4">
			<Card.Body className="p-4 p-md-8 text-center">
				<i className="mdi mdi-48px mdi-format-quote-open text-light-info lh-1"></i>

				<Icon
					path={mdiFormatQuoteOpen}
					size={2.2}
					className={`text-light-${item.color} lh-1`}
				/>
				<p className="lead text-dark mt-3">{item.content}</p>
			</Card.Body>
			<Card.Footer className={`bg-${item.color} text-center border-top-0`}>
				<div className="mt-n8">
					<Image
						src={item.image}
						alt=""
						className={`rounded-circle border-${item.color} avatar-xl border border-4`}
					/>
				</div>
				<div className="mt-2 text-white">
					<h3 className="text-white mb-0">{item.name}</h3>
					<p className="text-white-50 mb-1">{item.designation}</p>
				</div>
			</Card.Footer>
		</Card>
	);
};

// Typechecking With PropTypes
TestimonialColorCard.propTypes = {
	item: PropTypes.object.isRequired
};

export default TestimonialColorCard;
