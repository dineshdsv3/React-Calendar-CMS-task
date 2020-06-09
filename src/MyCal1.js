import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { getEvents } from './GoogleCal';

class MyCal1 extends React.Component {
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
            <div className='demo-app-calendar'>
			<FullCalendar
				defaultView="timeGridWeek"
				header={{
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
				}}
				events={this.state.events}
				plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
			/>
            </div>
		);
	}
}

export default MyCal1;
