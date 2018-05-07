import React from 'react'
import './confirm-message.sass'
import {connect} from 'react-redux'
import { startMission } from 'states/actions/missions.js'


const ConfirmMessage = (props) => {
	let messageInfo = null
	switch (props.type) {
		case 1:
			messageInfo = (<img 
				 				src="/icons/icon-tired.png" 
				 				className="message-icon"
				 			/>)
		default:
			messageInfo = null 
	}
	return (
		<div 
			className="confirm-container"
			id="mission-confirm"
		>
			<a href="#route-page-screen">
				<img 
					src="/icons/icon-cancel.png"
					className="close-icon"
				/>
			</a>
 			<span>{props.msg}</span>
 			{ props.type === 1 && <img 
 				src="/icons/icon-tired.png" 
 				className="message-icon"
 			/>}
 			<button onClick = { () => { if (props.type === 0) props.dispatch(startMission())} }>
 				是
 			</button>
		</div>
	)
}


export default connect( state => (
	{
		data: state.missionData.data[0],
		userPosition: state.user.position,
		isPosAvailable: state.user.isPosAvailable,
		distance: state.missionRoute.distance,
		min: state.missionRoute.min
	}
))(ConfirmMessage)