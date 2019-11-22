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
				<p className="banks"><strong>Banks involved:</strong> {d.banks}</p>
				<p className="countries"><strong>Money travelled through:</strong> {d.countries}</p>
			</footer>
		</div>
	);
}

const toggleHidden = (el) => {
	const p = el.target.nextSibling;
	const pClass = p.className;

	p.className = pClass.includes('visible') ? 'details' : 'details visible';

	const arrow = el.target.previousSibling;
	const arrowClass = arrow.className;

	arrow.className = arrowClass.includes('rotate') ? 'arrow' : 'arrow rotate';

	console.log(arrow.className)
}

export default TimelineElement;