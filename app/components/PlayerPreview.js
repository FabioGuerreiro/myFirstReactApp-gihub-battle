const React = require('react');
const PropTypes = require('prop-types');

const PlayerPreview = (props) => (
	<div>
		<div className='column'>
			<img
				className='avatar'
				src={props.avatar}
				alt={'Avatar for ' + props.username}
			/>
			<h2 className='username'>@{props.username}</h2>
		</div>
		<button
			className='reset'
			onClick={props.onReset.bind(null, props.id)}>
                Reset
		</button>
	</div>
);
PlayerPreview.propTypes = {
	avatar: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onReset: PropTypes.func.isRequired
};

module.exports = PlayerPreview;
