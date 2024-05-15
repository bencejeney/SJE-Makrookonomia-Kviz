import React, { Component } from 'react';
import '../App.css'

class Score extends Component {
	render() {
		const { score } = this.props;

		return (
			<div>
				<h2>Eredmény</h2>
				<h4>Pontszámod: {score}</h4>
				<a href="../../">Kezdőlap</a>
			</div>
		);
	}
}

export default Score;
