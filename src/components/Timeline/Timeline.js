import React, { Component, Fragment } from 'react';
import Tabletop from 'tabletop';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import TimelineElement from '../TimelineElement/TimelineElement';
// import 'react-vertical-timeline-component/style.min.css';

// ICONS
import { ReactComponent as Drugs } from '../../images/drugs.svg';
import { ReactComponent as Fraud } from '../../images/fraud.svg';
import { ReactComponent as Embezle } from '../../images/fraud_v2.svg';
import './Timeline.css';

export default class Timeline extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		Tabletop.init({
			key: this.props.url,
			simplesheet: true
		})
		.then((resp, tabletop) => { 
			this.setState({
				data: resp.published.elements.sort((a,b) => {
					return b.order - a.order;
				})
			});
		});
	}

	setIcon(iconText) {
		let icon;

		switch (iconText) {
			case 'fraud':
				icon = <Fraud title="fraud icon" />;
				break;
			case 'embezlement':
				icon = <Embezle title="embezlement icon" />;
				break;
			case 'drugs':
				icon = <Drugs title="drugs icon" />;
				break;
			default:
				icon = '';
		}

		return icon;
	}

	render() {
		return (
			<Fragment>
				<div className="background-image"></div>
				<VerticalTimeline>
					{this.state.data.map((d, i) => {
						return (
							<VerticalTimelineElement
								contentArrowStyle={{borderRight: '7px solid #3C76B0'}}
								date={d.time_period}
								iconStyle={{background: '#3C76B0', color: '#fff'}}
								icon={this.setIcon(d.icon_text)}
								key={d.order}
							>
								<TimelineElement data={d}></TimelineElement>
							</VerticalTimelineElement>
						)
					})}
				</VerticalTimeline>
			</Fragment>
		);
	}
}
