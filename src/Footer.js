import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="ui yellow inverted footer segment">
				<div className="ui center aligned container">
					<div className="ui stackable inverted divided grid">
						<div className="four wide column">
							<h4 className="ui inverted header">Company</h4>
							<div className="ui inverted link list">
								<a href="#" className="item">
									About us
								</a>
								<a href="#" className="item">
									Contact
								</a>
								<a href="#" className="item">
									Costs and billing
								</a>
							</div>
						</div>
						<div className="four wide column">
							<h4 className="ui inverted header">Help</h4>
							<div className="ui inverted link list">
								<a href="#" className="item">
									How it works
								</a>
								<a href="#" className="item">
									Support
								</a>
								<a href="#" className="item">
									Trust and safety
								</a>
							</div>
						</div>
						<div className="four wide column">
							<h4 className="ui inverted header">Legalities</h4>
							<div className="ui inverted link list">
								<a href="#" className="item">
									Privacy
								</a>
								<a href="#" className="item">
									Terms and conditions
								</a>
								<a href="#" className="item">
									Code of conduct
								</a>
							</div>
						</div>
						<div className="four wide column">
							<h4 className="ui inverted header">CONNECT WITH US</h4>
							<p>
								<div className="ui mini image">
									<img src={require('./Assets/social_linkedin.png')} />
								</div>
								<div className="ui mini image">
									<img src={require('./Assets/social_facebook.png')} />
								</div>
								<div className="ui mini image">
									<img src={require('./Assets/social_twitter.png')} />
								</div>
								<div className="ui mini image">
									<img src={require('./Assets/social_youtube_default.png')} />
								</div>
							</p>
							<p> &copy; Copyright Conrati 2018</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
