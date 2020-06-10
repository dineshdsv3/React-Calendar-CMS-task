import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

class MyCal1 extends React.Component {
	state = {
		events: [
			{
				start: '2020-06-10T10:00:00',
				end: '2020-06-10T16:00:00',
				rendering: 'background',
				color: 'orange'
			},
		],
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
					<div className="ui mini form">
						<div className="field">
							<div className="fields">
								<div className="four wide field">
									<div className="ui input">
										<label htmlFor="startTime">Start Time</label>
										<input
											type="time"
											id="startTime"
											name="startTime"
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="four wide field">
									<div className="ui input">
										<label htmlFor="endTime">End Time</label>
										<input type="time" id="endTime" name="endTime" onChange={this.handleChange} />
									</div>
								</div>
							</div>
							<div className="fields">
								<div className="four wide field">
									<div className="ui input">
										<label htmlFor="startTimeWeekend">Start Time</label>
										<input
											type="time"
											id="startTimeWeekend"
											name="startTimeWeekend"
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="four wide field">
									<div className="ui input">
										<label htmlFor="endTimeWeekend">End Time</label>
										<input
											type="time"
											id="endTimeWeekend"
											name="endTimeWeekend"
											onChange={this.handleChange}
										/>
									</div>
								</div>
							</div>
						</div>
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
