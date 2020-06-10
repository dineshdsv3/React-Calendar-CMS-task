import React from 'react';

class Header extends React.Component {
	state = {
		presentDate: '',
		date: '',
		weekday: '',
		hours: '',
		minutes: '',
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
			date: date,
			weekday: weekDays[weekday],
			hours: hours < 10 ? `0${hours}` : hours,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
		});
	}

	render() {
		return (
			<div className="ui blue inverted menu">
				<div className="ui small image">
					<img src={require('./Assets/logo.png')} />
				</div>
			</div>
		);
	}
}

export default Header;
