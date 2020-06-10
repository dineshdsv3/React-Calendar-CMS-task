import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

class MyCal1 extends React.Component {
	state = {
		events: [{ start: '2020-06-12T10:00:00+05:30', end: '2020-06-12T15:00:00+05:30', title: 'Sample 1' }],
	};

	componentWillReceiveProps(nextProps) {
		nextProps.events.map((ele) => {
			this.setState({
				events: [...this.state.events, ele],
			});
		});
	}

	handleChange = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};

	render() {
		return (
			<div>
				<div className="ui container center aligned">
					<div className="ui input">
						<label htmlFor="startTime">Start Time</label>
						<input type="time" id="startTime" name="startTime" onChange={this.handleChange} />
					</div>
					<div className="ui input">
						<label htmlFor="endTime">End Time</label>
						<input type="time" id="endTime" name="endTime" onChange={this.handleChange} />
					</div>
				</div>

				<div className="demo-app-calendar">
					{console.log(this.state.events)}
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
			</div>
		);
	}
}

export default MyCal1;
