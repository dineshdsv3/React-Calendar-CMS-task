import React from 'react';
import moment from 'moment';

import { getEvents } from './GoogleCal';

import { Calendar, momentLocalizer } from 'react-big-calendar';
const localizer = momentLocalizer(moment);



class MyCalendar extends React.Component {
	state = {
		events: [],
	};

	componentDidMount() {
		getEvents((events) => {
			this.setState({ events });
		});
	}

	render() {
		return (
			<div>
				<Calendar
					localizer={localizer}
					style={{ height: '700px' }}
					defaultView="month"
					events={this.state.events}
				/>
				{console.log(this.state.events)}
			</div>
		);
	}
}

export default MyCalendar;
