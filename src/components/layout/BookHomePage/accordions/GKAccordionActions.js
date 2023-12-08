// import node module libraries
import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import {
	Accordion,
	Card,
	useAccordionButton,
	AccordionContext,
	OverlayTrigger,
	Tooltip
} from 'react-bootstrap';

const GKAccordionActions = ({ accordionItems }) => {
	const ContextAwareToggle = ({ children, eventKey, callback }) => {
		const currentEventKey = useContext(AccordionContext);
		const decoratedOnClick = useAccordionButton(
			eventKey,
			() => callback && callback(eventKey)
		);
		const isCurrentEventKey = currentEventKey === eventKey;
		const overlayKeyEdit = uuid();
		const overlayKeyDelete = uuid();
		return (
			<Fragment>
				<div className="d-flex align-items-center justify-content-between">
					<h5 className="mb-0">
						<Link
							onClick={decoratedOnClick}
							aria-expanded={isCurrentEventKey}
							to="#"
							className="text-inherit"
						>
							<span className="align-middle p-1">{children}</span>
						</Link>
					</h5>
					<div>
						<OverlayTrigger
							key={overlayKeyEdit}
							placement="top"
							overlay={<Tooltip id="tooltip-top"> Edit</Tooltip>}
						>
							<Link to="#" className="me-1 text-inherit" title="Edit">
								<i className="fe fe-edit fs-6"></i>
							</Link>
						</OverlayTrigger>

						<OverlayTrigger
							key={overlayKeyDelete}
							placement="top"
							overlay={<Tooltip id="tooltip-top"> Delete</Tooltip>}
						>
							<Link to="#" className="me-1 text-inherit" title="Delete">
								<i className="fe fe-trash-2 fs-6"></i>
							</Link>
						</OverlayTrigger>

						<Link
							to="#"
							className="text-inherit"
							data-bs-toggle="collapse"
							onClick={decoratedOnClick}
							aria-expanded={isCurrentEventKey}
						>
							<span className="chevron-arrow">
								<i className="fe fe-chevron-down fs-5"></i>
							</span>
						</Link>
					</div>
				</div>
			</Fragment>
		);
	};

	const generateKey = (pre) => {
		pre = pre.toLowerCase();
		pre = pre.replace(' ', '_');
		return `${pre}_${new Date().getTime()}`;
	};
	return (
		<Fragment>
			<Accordion defaultActiveKey={accordionItems[0].id}>
				{accordionItems.map((item, index) => (
					<Card
						key={generateKey(item.title + index)}
						className="px-2 py-2 mb-1 shadow-none"
					>
						<Card.Header className="bg-transparent border-0 p-0">
							<div className="border-0">
								<h3 className="mb-0 fw-bold">
									<ContextAwareToggle eventKey={item.id + index}>
										{item.title}
									</ContextAwareToggle>
								</h3>
							</div>
						</Card.Header>
						<Accordion.Collapse eventKey={item.id + index}>
							<Card.Body className="fs-4">
								{/* {item.content}	 */}
								<Link to="#" className="btn btn-secondary btn-sm mb-1">
									Add Article +
								</Link>{' '}
								<Link to="#" className="btn btn-secondary btn-sm mb-1">
									Add Description +
								</Link>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				))}
			</Accordion>
		</Fragment>
	);
};

export default GKAccordionActions;
