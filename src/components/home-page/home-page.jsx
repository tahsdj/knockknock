import React from 'react'
import './home-page.sass'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

class HomePage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const rewardMissions = this.props.data.map( (m,index) => {
			if ( m.missionType === 1 ) {
				return (
					<div class="mission">
						<Link to={`/rewardmissions/${index}`}>
					        <div class="name">{m.title}</div>
					        <div class="distance">{`${m.distance}km`}</div>
					        <div class="time">{`${m.time} min`}</div>
					    </Link>
				     </div>
				)
			}
		})
		const normalMissions = this.props.data.map( (m,index) => {
			if ( m.missionType === 0 ) {
				return (
					<div class="mission">
						<Link to={`/normalmissions/${index}`}>
					        <div class="name">{m.title}</div>
					        <div class="distance">{`${m.distance}km`}</div>
					        <div class="time">{`${m.time} min`}</div>
					    </Link>
				     </div>
				)
			}
		})  
		return (
			<div className="container">
			  <div className="bg"></div>
			  <div className="header">
			    <div className="word">今日任務</div>
			  </div>
			  <div className="rewardmission mission-box">
			    <div className="title">
			      <div className="icon"> <img className="iconrm" src="https://i.imgur.com/P0YB0ii.png"/></div>
			      <div className="word">高額獎勵</div>
			      <div className="info"><img className="iconif" src="https://i.imgur.com/P0YB0ii.png"/></div>
			    </div>
			    <div className="list">
			     	{rewardMissions}
			    </div>
			  </div>
			  <div className="normalmission mission-box">
			    <div className="title">
			      <div className="icon"><img className="iconrm" src="https://i.imgur.com/v2mdsrW.png"/></div>
			      <div className="word">普通任務</div>
			    </div>
			    <div className="list">
			     	{normalMissions}
			    </div>
			  </div>
			  <div className="nav">
			    <div className="misbutt"><img className="iconmis" src="https://i.imgur.com/km3UQvk.png"/></div>
			    <div className="trainbutt"><img className="icontrain" src="https://i.imgur.com/Rmmo1AI.png"/></div>
			    <div className="probutt">
			    	<Link to="/profile">
			    		<img className="iconpro" src="https://i.imgur.com/mtuxfSf.png"/>
			    	</Link>
			    </div>
			    <div className="settbutt"><img className="iconsett" src="https://i.imgur.com/1bl7rwJ.png"/></div>
			  </div>
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
		min: state.missionRoute.min
	}
))(HomePage)