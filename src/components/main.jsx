import React from 'react'
import ReactDOM from 'react-dom'
import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './main.sass'
import RoutePage from 'components/route-page/route-page.jsx'
import { missionData, missionRoute, runningStatus } from 'states/reducers/missions.js'
import { user } from 'states/reducers/user.js'
import ProfilePage from 'components/profile-page/profile-page.jsx'
import ScannerPage from 'components/scanner-page/scanner-page.jsx'
import HomePage from 'components/home-page/home-page.jsx'
import RewardPage from 'components/reward-page/reward-page.jsx'

export default class Main extends React.Component {
	constructor( props ) {
		super(props)
	}
	componentWillMount() {
		this.store = createStore(combineReducers({
			missionData, user, missionRoute, runningStatus
		}),compose(applyMiddleware(thunkMiddleware)))
		let _this = this
		this.store.subscribe(() => {
			console.log(_this.store.getState());
		})
	}
	render() {
		return (
			<Provider store = {this.store} >
				<Router>
					<div id = "app-container">
						<Route exact path = "/" render={()=><HomePage />}/>
						<Route exact path = "/profile" render={()=><ProfilePage />}/>
						<Route exact path = "/rewards" render={()=><RewardPage />}/>
						<Route path = "/:missionType/:index" render={(props)=><RoutePage
																				mssion={props.match.params.missionType} 
																				index={props.match.params.index}
																				/>} />
					</div>
				</Router>
			</Provider>
		)
	}
}


const MainPage = (props) => (
	<div id = 'main-page-container'>
		<div className = 'option-list-container'>
			<div className = 'option'>
				Today's mission
			</div>
			<div className = 'option'>
				Self-training
			</div>
			<div className = 'option'>
				Profile
			</div>
		</div>
	</div>
)


