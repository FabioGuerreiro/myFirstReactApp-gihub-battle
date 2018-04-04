
const React = require('react');
const PropTypes = require('prop-types');

const PlayerPreview = require('./PlayerPreview');

const Profile = (props) => (
	<PlayerPreview
		avatar={props.info.avatar_url}
		username={props.info.login}
	>
		<ul className='space-list-items'>
			{props.info.name && <li>{props.info.name}</li>}
			{props.info.location && <li>{props.info.location}</li>}
			{props.info.company && <li>{props.info.location}</li>}
			<li>Followers: {props.info.followers}</li>
			<li>Following: {props.info.following}</li>
			<li>Public Repos: {props.info.public_repos}</li>
			{props.info.blog && <li><a href={props.info.blog}>{props.info.blog}</a></li>}
		</ul>
	</PlayerPreview>
);
Profile.propTypes = {
	info: PropTypes.object.isRequired
};

module.exports = Profile;