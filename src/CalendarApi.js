import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import MyCal1 from './MyCal1';

class CalendarApi extends React.Component {
	state = {
		events: [],
	};


	handleClickItem = async (e, name) => {
		if (name === 'sign-in') {
			await ApiCalendar.handleAuthClick();
			 ApiCalendar.listUpcomingEvents(10).then((result) => {
				if (result.status === 200) {
					// console.log(result.result.items)
					result.result.items.map((ele) => {
						let event = { start: ele.start.dateTime, end: ele.end.dateTime, title: ele.summary };
						this.setState({ events: [...this.state.events, event] });
					});
				}
			});
		}
	};

	render() {
		return this.state.events.length > 0 ? (
			<div>
				<MyCal1 events={this.state.events} />
			</div>
		) : (
			<div>
				<button className="ui green button" onClick={(e) => this.handleClickItem(e, 'sign-in')}>
					Google sign-in
				</button>
			</div>
		);
	}
}

export default CalendarApi;
