// import node module libraries
import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
	Accordion,
	useAccordionButton,
	AccordionContext
} from 'react-bootstrap';

const GKAccordionBox = ({ accordionItems, itemClass }) => {
	const ContextAwareToggle = ({ children, eventKey, callback }) => {
		const { activeEventKey } = useContext(AccordionContext);
		const decoratedOnClick = useAccordionButton(
			eventKey,
			() => callback && callback(eventKey)
		);
		const isCurrentEventKey = activeEventKey === eventKey;

		return (
			<Link
				to="#"
				onClick={decoratedOnClick}
				aria-expanded={isCurrentEventKey}
				className="d-flex align-items-center text-inherit text-decoration-none"
			>
				<span className={`me-auto ${isCurrentEventKey ? 'text-primary' : ''}`}>
					{children}
				</span>
				<span className="collapse-toggle ms-4">
					<i className="fe fe-chevron-down text-muted "></i>
				</span>
			</Link>
		);
	};

	return (
		<Fragment>
			<Accordion defaultActiveKey={accordionItems[0].id} flush>
				{accordionItems.map((item, index) => (
					<Fragment key={index}>
						<div className="border p-3 rounded-3 mb-2">
							<h3 className="mb-0 fs-4">
								<ContextAwareToggle eventKey={item.id}>
									{item.title}
								</ContextAwareToggle>
							</h3>
							<Accordion.Collapse eventKey={item.id}>
								<div
									className={`pt-2 ${itemClass ? itemClass : 'px-4'}`}
									dangerouslySetInnerHTML={{ __html: item.content }}
								></div>
							</Accordion.Collapse>
						</div>
					</Fragment>
				))}
			</Accordion>
		</Fragment>
	);
};

export default GKAccordionBox;
