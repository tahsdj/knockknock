import React from 'react'
import {connect} from 'react-redux'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer
} from "react-google-maps";
import './route-page.sass'
import { MAP_STYLE, MAP_STYLE_WHITE, MAP_STYLE_WARM } from './constant.js'
import RunPage from 'components/route-page/run-page.jsx'
import ConfirmMessage from 'components/route-page/confirm-message.jsx'
import { updateUserPos } from 'states/actions/user.js'
import { updateMissionRouteInfo, startMission } from 'states/actions/missions.js'
import Swiper from 'swiper'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

//import ReactDom from 'react-dom'

class RoutePage extends React.Component {
	constructor(props) {
		super(props)
		this.position = {
			lat: 0,
			lng: 0
		}
		this.isPositionAvailable = true
	}
	componentWillMount() {
		if (navigator.geolocation) {
			let that = this
          	navigator.geolocation.getCurrentPosition(function(position) {
	          	console.log(position)
	          	that.position.lat = position.coords.latitude
	          	that.position.lng = position.coords.longitude
	          	that.props.dispatch(updateUserPos(that.position))
         	})
        } else {
          // Browser doesn't support Geolocation
          this.isPositionAvailable = false
        }
	}
	componentDidMount() {
		const mySwiper = new Swiper ('.swiper-container')
	}
	render() {
		const DATA = this.props.data[this.props.index]
		//
		const PAGEDOM = this.props.start ? (<RunPage />) : (<PreviewPage 
																dis={this.props.distance}
																min={this.props.min}
																data={DATA}
																index={this.props.index}
																missionNum={this.props.data.length}
															/>) 
		return (
			<div id="route-page-screen">
				
				<a href="#route-page-screen">
					<div id="map-container">
						{ this.props.isPosAvailable &&
							<MapWithAMakredInfoWindow
							  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_4LjuYe7PXpgwH8dwjOZw23ii2I1tES8&v=3.exp&libraries=geometry,drawing,places"
							  loadingElement={<div id = "map-canvas" style={{ height: '100%', width: '100v%' }} />}
							  containerElement={<div id = "map-canvas" style={{ height: '100%', width: '100%' }} />}
							  mapElement={<div style={{ height: '100vh' }} />}
							  center={this.props.userPosition}
							  servicePos={DATA.serviceAddress.position}
							  homePos={DATA.homeAddress.position}
							  dispatch={this.props.dispatch}
							/>
						}
					</div>
				</a>
				{PAGEDOM}
			</div>
		)
	}
}

export default connect( state => (
	{
		data: state.missionData.data,
		userPosition: state.user.position,
		isPosAvailable: state.user.isPosAvailable,
		distance: state.missionRoute.distance,
		min: state.missionRoute.min,
		start: state.runningStatus.start
	}
))(RoutePage)


const { compose, withProps, withStateHandlers, lifecycle } = require("recompose")

const MapWithAMakredInfoWindow = compose(
  withStateHandlers((props) => ({
  	}), 
  	{
	  
  	}),
  	withScriptjs,
  	withGoogleMap,
  	lifecycle({
	    componentDidMount() {
	    	const DirectionsService = new google.maps.DirectionsService();
	    	console.log('center:' + this.props.center.lat)
	    	DirectionsService.route({
	        	//origin: new google.maps.LatLng(41.8507300, -87.6512600),
	        	origin: new google.maps.LatLng(this.props.center.lat, this.props.center.lng),
	        	destination: new google.maps.LatLng(this.props.homePos.lat, this.props.homePos.lng),
	        	travelMode: google.maps.TravelMode.WALKING,
	        	waypoints: [
				    {
				      location: new google.maps.LatLng(this.props.servicePos.lat, this.props.servicePos.lng),
				      stopover: true
				    }
				],
	    	}, (result, status) => {
	    		//console.log('results origin:' + JSON.stringify(result))
	    		let time = 0
	    		let distance = 0
	    		
	    		result.routes[0].legs.forEach( r => {
	    			time += r.duration.value
	    			distance += r.distance.value * 0.001
	    		})
	    		
	    		time += 15*60
	    		//console.log('results:' + JSON.stringify(result.routes[0].legs.length))
	    		
	    		
	    		this.props.dispatch(updateMissionRouteInfo(distance,Math.round(time / 60)))

	        	if (status === google.maps.DirectionsStatus.OK) {
	        		this.setState({
		        		directions: result,
		        	})
	        	} else {
		        	console.error(`error fetching directions ${result}`);
		        }
	      	})
	    }
	})
)(props => {
	return (
	  <GoogleMap
	    defaultZoom={15}
	    defaultCenter={props.center}
	    defaultOptions={MAP_STYLE}
	  >
	    {props.directions && <DirectionsRenderer directions={props.directions} />}
	  </GoogleMap>
	)
 }
);


const PreviewPage = (props) => {
	console.log(props.data)
	return (
		<div id="mission-preview-container">
			<RouteHeader 
				km={props.dis}
				min={props.min}
			/>
			<MissionInfo 
				title={props.data.title}
				info={props.data}
			/>
			<Next 
				index={props.index}
				missionNum={props.missionNum}
				/>
			<Back
				index={props.index}
				missionNum={props.missionNum}
				/>
			<ConfirmMessage 
				msg={'確定執行此任務'}
				type={0}
			/>
		</div>
	)
}



const RouteHeader = (props) => (
	<a href="#route-page-screen">
		<header className="route-info-title">
			<h1 className="distance-title">
				{`${props.km} km`}
			</h1>
			<h2>
				{`${props.min} min`}
			</h2>
		</header>
	</a>
)

const MissionInfo = (props) => (
	<div id="mission-info-box">
		<a href="#mission-info-box">
			<div>
				<div className="profile-box">
					<img src="http://img.mix-daily.com/mixdaily/upload/image/20170603/149642401063409.jpeg"/>
				</div>
				<div className="info-box">
					<span>{props.title}</span>
					<span>Due time: 08:25</span>
				</div>

			</div>
		</a>
		<InfoDetail 
			info={props.info}
		/>
		<a href="#mission-confirm">
			<button>START</button>
		</a>
	</div>
)

const InfoDetail = (props) => {
	console.log(props.info)
	return (
		<div className="info-detail-box">
			<PositionInfo 
				info={props.info}
			/>
		</div>
	)
}

const PositionInfo = (props) => {
	console.log('pos props: ' + props.info)
	return (
		<div className="position-detail">
			<header>
				<img 
					src="/icons/location.png"
					className="location-icon"
				/>
				<span>{props.info.serviceAddress.address}</span>
			</header>
			<div className="description">
				<div className="images-board swiper-container">
					<div className="swiper-wrapper">
						{props.info.serviceAddress.photos.map( (img,index) => (
								<div className="swiper-slide">
									<img src={img.url}/>
								</div>
							))}
					</div>
				</div>
				<span>{props.info.descriptions}</span>
			</div>
			<header>
				<img 
					src="/icons/location.png"
					className="location-icon"
				/>
				<span>{props.info.homeAddress.address}</span>
			</header>
			<div className="description">
				<div className="images-board">
					<div className="images-board">
						<div className="swiper-wrapper">
						{props.info.homeAddress.photos.map( (img,index) => (
								<div className="swiper-slide">
									<img src={img.url}/>
								</div>
							))}
					</div>
					</div>
				</div>
				<span>{props.info.descriptions}</span>
			</div>
		</div>
	)
}

const Next = (props) => {
	const link = props.index + 1 < props.missionNum ? `./${parseInt(props.index) + 1}` : `./${props.index}`
	return (
		<div 
			id="next-icon"
			className="turn-page-icon"
		>
			<Link to={link}>
				<img src="/icons/next.png"/>
			</Link>
		</div>
	)
}

const Back = (props) => {
	const link = props.index - 1 < 0 ? `./${props.index}` : `./${parseInt(props.index) - 1}`
	return (
		<div 
			id="back-icon"
			className="turn-page-icon"
		>
			<Link to={link}>
				<img src="/icons/previous.png"/>
			</Link>
		</div>
	)
}


/*
const ConfirmMessage = () => {
	return (
		<div 
			className="confirm-container"
			id="mission-confirm"
		>
			<a href="#route-page-screen">
				<img src="icons/icon-cancel.png" />
			</a>
 			<span>確定執行此任務?</span>
 			<button>
 				是
 			</button>
		</div>
	)
}
*/