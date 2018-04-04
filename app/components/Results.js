const React = require('react');
const queryString = require('query-string');
const Link = require('react-router-dom').Link;
const api = require('../utils/api');

const Player = require('./Player');

class Results extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		};
	}
	
	componentDidMount() {
		const players = queryString.parse(this.props.location.search);

		api.battle([players.playerOneName, players.playerTwoName])
			.then((results) => {
				if(results === null) {
					return this.setState(() => {
						return {
							error: 'Looks like there was an error. Check that both users exist on Github.',
							loading: false
						};
					});
				}

				this.setState(() => {
					return {
						error: null,
						winner: results[0],
						loser: results[1],
						loading: false
					};
				});
			});
	}

	render() {
		let error = this.state.error;
		let winner = this.state.winner;
		let loser = this.state.loser;
		let loading = this.state.loading;

		if(loading === true) {
			return <p>Loading</p>;
		}

		if(error) {
			return (
				<div>
					<p>{error}</p>
					<Link to='/battle'>Reset</Link>
				</div>
			);
		}

		return(
			<div className='row'>
				<Player
					label='Winner'
					score={winner.score}
					profile={winner.profile}
				/>

				<Player
					label='Loser'
					score={loser.score}
					profile={loser.profile}
				/>
			</div>
		);  
	}
}

module.exports = Results;
