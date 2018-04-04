const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const NavLink = ReactRouter.NavLink;

const Nav = require('./Nav');
const Home = require('./pages/Home');
const Battle = require('./pages/Battle');
const Popular = require('./pages/Popular');
const Results = require('./pages/Results');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav />

					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/battle/results' component={Results} />
						<Route path='/popular' component={Popular} />
						<Route render={() => (<p>Nothing Here, <NavLink exact to='/'>go Home!</NavLink></p>)} />
					</Switch>
				</div>
			</Router>
		);
	}
}

module.exports = App;
