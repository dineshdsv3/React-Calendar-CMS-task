import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

class CalendarApi extends React.Component {
	state = {};

	handleClickItem = (e, name) => {
		if (name === 'sign-in') {
			ApiCalendar.handleAuthClick();
        }
        if(name === "events"){
            ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
				console.log(result);
			});
        }
	};

	render() {
		return (
			<div>
				<button className="ui green button" onClick={(e) => this.handleClickItem(e, 'sign-in')}>
					sign-in
				</button>
				<button className="ui red button" value="Sign out" onClick={(e) => this.handleClickItem(e, 'events')}>
					events
				</button>
			</div>
		);
	}
}

export default CalendarApi;
