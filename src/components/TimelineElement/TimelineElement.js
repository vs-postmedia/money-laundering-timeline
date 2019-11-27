import React from 'react';
import './TimelineElement.css';

const TimelineElement = (props) => {
	const d = props.data;
	return (
		<div className="timeline-element">
			<h3>{d.short_offence}</h3>
			<p className="description">{d.text_short}</p>
			<section
				className="detail-section"
				onClick={toggleHidden}>
				<div className="arrow arrow-right"></div>
				<h4 className="detail-button">Details...</h4>
				<p className="details">{d.offence_narrative}</p>
			</section>
			
			<footer>
				<p className="banks"><strong>Money moved through:</strong> {d.banks}</p>
				<p className="countries"><strong>Countries:</strong> {d.countries}</p>
			</footer>
		</div>
	);
}

const toggleHidden = (el) => {
	// do nothing if we click on the text box
	if (el.target.className !== 'detail-section') { return; }
	
	// show/hide text
	const p = el.target.querySelector('.details');
	const pClass = p.className;
	p.className = pClass.includes('visible') ? 'details' : 'details visible';

	// rotate arrow
	const arrow = el.target.querySelector('.arrow');
	const arrowClass = arrow.className;
	arrow.className = arrowClass.includes('rotate') ? 'arrow' : 'arrow rotate';
}

export default TimelineElement;