import React from 'react';
import MyCal1 from './MyCal1'
import CalendarApi from './CalendarApi'

import './css/main.scss'

class App extends React.Component {
	render() {
		return (
			<div>
				<CalendarApi />
				<MyCal1 />
			</div>
		);
	}
}

export default App;


//  <!-- Oauth -Id (1006383487608-tdhp6i1g4035enped4r2oks428nhve8i.apps.googleusercontent.com) -->
// <!-- Oauth -secret (nfq8MglqtqmpThitD2dMoacX) -->