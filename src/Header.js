import React from 'react';

class Header extends React.Component {

	render() {
		return (
			<div className="ui blue inverted menu">
				<div className="ui small image">
					<img src={require('./Assets/cashapona.png')} />
				</div>
			</div>
		);
	}
}

export default Header;
