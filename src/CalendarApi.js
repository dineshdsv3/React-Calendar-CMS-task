import React from 'react';
import ApiCalendar from 'react-google-calendar-api';
import MyCal1 from './MyCal1';

class CalendarApi extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			sign: ApiCalendar.sign,
			isLoading: true,
		};
		ApiCalendar.onLoad(() => {
			this.signUpdate(ApiCalendar.sign);
			this.setState({ isLoading: false });
			// console.log(`Api calendar is ${ApiCalendar.sign}`)
			ApiCalendar.listenSign(this.signUpdate.bind(this));
		});
	}

	signUpdate = (sign) => {
		// console.log(`Sign update is ${sign}`)
		this.setState({
			sign,
		});
		this.listenEvents();
	};

	componentDidMount() {
		this.listenEvents();
	}

	listenEvents = async () => {
		if (ApiCalendar.sign) {
			const resp = await ApiCalendar.listUpcomingEvents(10);
			const events = resp.result.items.map((ele) => {
				return { start: ele.start.dateTime, end: ele.end.dateTime, title: ele.summary, color: '#808080' };
			});
			this.setState({
				events,
			});
			console.log(this.state.events);
		}
	};

	handleClickItem = (e, name) => {
		if (name === 'sign-in') {
			ApiCalendar.handleAuthClick();
			ApiCalendar.listenSign(this.listenEvents);
		}
	};

	render() {
		console.log(this.state.isLoading)
		console.log(`sign ${this.state.sign}`)
		return !this.state.isLoading && !this.state.sign ? (
			<div className="ui main text container">
				<div className="ui container">
					<button className="ui green button" onClick={(e) => this.handleClickItem(e, 'sign-in')}>
						Google sign-in
					</button>
				</div>
			</div>
		) : (this.state.sign ? <div>
			<MyCal1 events={this.state.events} />
		</div>:('is loading'))  
	}
}

export default CalendarApi;
