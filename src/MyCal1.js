import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

class MyCal1 extends React.Component {
	state = {
		presentDate: '',
		date: '',
		weekday: '',
		hours: '',
		minutes: '',
		events: [
			// {
			// 	start: '2020-06-10T10:00:00',
			// 	end: '2020-06-10T16:00:00',
			// 	rendering: 'background',
			// 	color: 'orange',
			// },
		],
		startTime: '',
		startTimeWeekend: '',
		endTime: '',
		endTimeWeekend: '',
	};

	componentDidMount() {
		let presentDate = new Date();
		let date = presentDate.getDate();
		console.log(date);
		let weekday = presentDate.getDay();
		let hours = presentDate.getHours();
		let minutes = presentDate.getMinutes();
		let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.setState({
			presentDate,
			date: date,
			weekday,
			hours: hours < 10 ? `0${hours}` : hours,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		nextProps.events.map((ele) => {
			this.setState({
				events: [...this.state.events, ele],
			});
		});
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	setEvents = (e) => {
		e.preventDefault();
		let year = 2020;
		let month = '06';
		let date = this.state.date;
		let secs = '00';
		let weekDay = this.state.weekday;
		let arr = [];
		if (this.state.startTime) {
			// console.log('weekDay Start time' + this.state.startTime);
			if (weekDay > 0 && weekDay < 6) {
				// console.log(`main loop ${weekDay}`)
				if (weekDay <= 5) {
					console.log(`less cndttn ${weekDay}`);
					for (let i = 5; i > weekDay; i--) {
						// console.log(`less loop ${weekDay}`)
						let eventObj = {
							start: '',
							end: '',
							rendering: 'background',
							color: 'orange',
							key: 1
						};
						eventObj.start = `${year}-${month}-${
							date + (i - weekDay) < 10 ? `0${date + (i - weekDay)}` : date + (i - weekDay)
						}T${this.state.startTime}:${secs}`;
						eventObj.end = `${year}-${month}-${
							date + (i - weekDay) < 10 ? `0${date + (i - weekDay)}` : date + (i - weekDay)
						}T${this.state.endTime}:${secs}`;
						eventObj.key += i
						arr.push(eventObj);
					}
				}
				for (let i = 0; i < weekDay; i++) {
					console.log(`more loop ${weekDay}`);
					let eventObj = {
						start: '',
						end: '',
						rendering: 'background',
						color: 'orange',
						key: 99
					};
					eventObj.start = `${year}-${month}-${date - i < 10 ? `0${date - i}` : date - i}T${
						this.state.startTime
					}:${secs}`;
					eventObj.end = `${year}-${month}-${date - i < 10 ? `0${date - i}` : date - i}T${
						this.state.endTime
					}:${secs}`;
					eventObj.key += i
					arr.push(eventObj);
				}
			}
			
			arr.map((ele) => {
				console.log(ele)
				this.setState({
					events: [...this.state.events, ele],
					
				});
			});
			// const event = arr.map((ele) => {
			// 	return { start: ele.start, end: ele.end, rendering: 'background', color: 'orange' };
			// });
			console.log(arr);
			// console.log(event);
		}
		if (this.state.startTimeWeekend) {
			console.log('weekend Time' + this.state.startTimeWeekend);
		}
	};

	render() {
		return (
			<div>
				<div className="ui container center aligned">
					<div className="ui mini form">
						<div className="field">
							<div className="fields">
								<h4 className="ui dividing header">Weekdays</h4>
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
								<h4 className="ui dividing header">Weekends</h4>
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
						<button className="ui fluid green button" onClick={this.setEvents}>
							Submit Timings
						</button>
					</div>
				</div>

				<div className="demo-app-calendar">
					{console.log(this.state.events)}
					<FullCalendar
						defaultView="timeGridWeek"
						header={{
							left: 'prev,next today',
							center: 'title',
							right: 'timeGridWeek,timeGridDay',
						}}
						height="auto"
						events={this.state.events}
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					/>
				</div>
			</div>
		);
	}
}

export default MyCal1;
