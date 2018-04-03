var React = require('react');
var SelectLanguage = require('./SelectLanguage');
var RepoGrid = require('./RepoGrid');
var api = require('../utils/api');

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang) {
		this.setState(() => {
			return {
				selectedLanguage: lang,
				repos: null
			};
		});

        
		api.fetchPopularRepos(lang)
			.then((repos) => {
				this.setState(() => {
					return {
						repos: repos
					};
				});
			});
	}

	render() {
		return (
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				{!this.state.repos
					? <p>LOADING</p>
					: <RepoGrid
						repos={this.state.repos}
					/>
				}
			</div>
		);
	}
}

module.exports = Popular;