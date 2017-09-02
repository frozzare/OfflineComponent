import React, { Component } from 'react';

class Offline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			offline: false
		};
	}

	componentDidMount() {
		setInterval(() => {
  			var xhr = new XMLHttpRequest();

  			xhr.onreadystatechange = () => {
  				this.setState({ offline: xhr.status !== 200 && xhr.status !== 404 });
  			}

  			xhr.open('GET', 'favicon.ico');
  			xhr.setRequestHeader('Cache-Control', 'no-cache');
  			xhr.send();
  		}, this.props.interval || 5000);
	}

	render() {
		const { children, offlineComponent: OfflineComponent } = this.props;
		return this.state.offline ? <OfflineComponent /> : (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Offline;
