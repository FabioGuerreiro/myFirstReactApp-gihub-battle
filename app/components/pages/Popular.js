const React = require('react');
const api = require('../../utils/api');

const SelectLanguage = require('../repos/SelectLanguage');
const RepoGrid = require('../repos/RepoGrid');
const Loading = require('../Loading');

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
					? <Loading />
					: <RepoGrid
						repos={this.state.repos}
					/>
				}
			</div>
		);
	}
}

module.exports = Popular;
