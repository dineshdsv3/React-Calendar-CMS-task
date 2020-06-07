import React from 'react';
import moment from 'moment'

import { Calendar, momentLocalizer } from 'react-big-calendar';
const localizer = momentLocalizer(moment);

class MyCalendar extends React.Component {

	state = {
		events: []
	}
	
	render() {
		return (
			<div>
				<Calendar
					localizer={localizer}
					startAccessor="start"
					endAccessor="end"
					style={{ height: '700px' }}
					events={[]}
				/>
			</div>
		);
	}
}

export default MyCalendar;
