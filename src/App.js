import React from 'react';
import CalendarApi from './CalendarApi';
import Header from './Header';
import Footer from './Footer';

import './css/main.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="ui main text container">
					<div className="ui container">
						<CalendarApi />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
