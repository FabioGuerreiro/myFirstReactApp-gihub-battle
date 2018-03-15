var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Avatar extends React.Component {
  render() {
    return (
      <img 
        src={this.props.img} 
        alt='Avatar'
        style={{width: 100, height: 100}}
      />
    )
  }
}
Avatar.propTypes = {
  img: PropTypes.string.isRequired
}

class Label extends React.Component {
  render() {
    return (
      <h1>Name: {this.props.name}</h1>
    )
  }
}
Label.propTypes = {
  name: PropTypes.string.isRequired
}

class ScreenName extends React.Component {
  render() {
    return (
      <h3>Username: {this.props.username}</h3>
    )
  }
}
ScreenName.propTypes = {
  username: PropTypes.string.isRequired
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Avatar img={this.props.user.img} />
        <Label name={this.props.user.name} />
        <ScreenName username={this.props.user.username} />
      </div>
    )
  }
}
Badge.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
}

ReactDOM.render(
  <Badge user={{
    name: 'Tyler McGinnis',
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    username: 'tylermcginnis'
  }} />,
  document.getElementById('app')
);