import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';

class MyCal1 extends React.Component {
	state = {
		presentDate: '',
		date: '',
		weekday: '',
		hours: '',
		month: '',
		minutes: '',
		events: [],
		startTime: '',
		startTimeWeekend: '',
		endTime: '',
		endTimeWeekend: '',
	};

	componentDidMount() {
		let presentDate = new Date()
		let date = presentDate.getDate();
		console.log(date);
		let weekday = presentDate.getDay();
		let hours = presentDate.getHours();
		let minutes = presentDate.getMinutes();
		let month = presentDate.getMonth();
		let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		this.setState({
			presentDate,
			date: date,
			weekday,
			month,
			hours: hours < 10 ? `0${hours}` : hours,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ events: nextProps.events });
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({[e.target.name]: e.target.value });
	};

	setEvents = (e) => {
		e.preventDefault();
		let year = 2021;
		let month = this.state.month;
		let date = this.state.date;
		let secs = '00';
		let weekDay = this.state.weekday;
		let arr = [];
		if (this.state.startTime) {
			// console.log('weekDay Start time' + this.state.startTime);
			if (weekDay > 0 && weekDay <= 5) {
				if (weekDay <= 5) {
					for (let i = 5; i > weekDay; i--) {
						let eventObj = {
							start: '',
							end: '',
							rendering: 'background',
							color: '#FFFF00',
							key: 1,
						};
						eventObj.start = `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
							date + (i - weekDay) < 10 ? `0${date + (i - weekDay)}` : date + (i - weekDay)
						}T${this.state.startTime}:${secs}`;
						eventObj.end = `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
							date + (i - weekDay) < 10 ? `0${date + (i - weekDay)}` : date + (i - weekDay)
						}T${this.state.endTime}:${secs}`;
						arr.push(eventObj);
					}
				}
				for (let i = 0; i < weekDay; i++) {
					let eventObj = {
						start: '',
						end: '',
						rendering: 'background',
						color: '#FFFF00',
					};
					eventObj.start = `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
						date - i < 10 ? `0${date - i}` : date - i
					}T${this.state.startTime}:${secs}`;
					eventObj.end = `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
						date - i < 10 ? `0${date - i}` : date - i
					}T${this.state.endTime}:${secs}`;
					eventObj.key += i;
					arr.push(eventObj);
				}
			}

			const event = arr.map((ele) => {
				return { start: ele.start, end: ele.end,  title: "", color: 'orange' };
			});
			this.setState({ events: [...this.state.events, ...event] });
			console.log(this.state.events, "events", event)
		}
		if (this.state.startTimeWeekend) {
			console.log('weekend Time' + this.state.startTimeWeekend);
			let thisWeekSunday = moment().day("sunday").format("MM-DD-YYYY")
			let thisWeekSaturday = moment().weekday(6).format("MM-DD-YYYY")

			console.log(thisWeekSunday, thisWeekSaturday, "check this");
			
			let timeStartAddedSunday = moment(thisWeekSunday+ " " +this.state.startTimeWeekend).format()
			let timeEndAddedSunday = moment(thisWeekSunday+ " " +this.state.endTimeWeekend).format()
			
			let timeStartAddedSaturday = moment(thisWeekSaturday+ " " +this.state.startTimeWeekend).format()
			let timeEndAddedSaturday = moment(thisWeekSaturday+ " " +this.state.endTimeWeekend).format()

			console.log(timeStartAddedSunday, "checkdate");


			for (let i = 0; i < 2; i++){
				let eventObj = {
						start: '',
						end: '',
						title: '',
						color: '',
				};
				if (i === 0) {
					
					eventObj.start = timeStartAddedSunday
					eventObj.end = timeEndAddedSunday
				}
				if (i === 1) {
					eventObj.start = timeStartAddedSaturday
					eventObj.end = timeEndAddedSaturday
				}
				arr.push(eventObj);
			}
			const eventWeekends = arr.map((ele) => {
				return { start: ele.start, end: ele.end,  title: "", color: 'orange' };
			});

			this.setState({ events: [...this.state.events, ...eventWeekends] });
			console.log(this.state.events, "events", eventWeekends)
			
			
		}
	};

	render() {
		return (
			<div>
				<div className="ui container center aligned">
					<h1>Please provide time in 24-hour format</h1>
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
