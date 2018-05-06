import React from 'react'
import './run-page.sass'
import ConfirmMessage from 'components/route-page/confirm-message.jsx'
import {connect} from 'react-redux'
import { updateRunStatus } from 'states/actions/missions.js'

class RunPage extends React.Component {
	constructor(props) {
		super(props)
		this.timer = null
	}
	componentDidMount() {
		this.timer = setInterval(()=>{
			let time = this.props.runDuration + 1
			this.props.dispatch(updateRunStatus(time, 0, false))
		},1000)
	}
	componentWillUnmount() {
		clearInterval(this.timer)
	}
	render() {
		return (
			<div id="run-page-container">
				<div className="stop-info-icon icon">
					<a href="#mission-confirm">
						<img src="/icons/qr-code.png"/>
					</a>
				</div>
				<Timer time={this.props.runDuration} />
				<RunMsg 
					runDis={this.props.runDistance}
					missionDis={this.props.distance}
				/>
				<div id="icons-container">
					<div className="mission-info-icon icon">
						<a href="#run-mission-info-box" >
							<img src="/icons/list.png"/>
						</a>
					</div>
					<div className="camera-info-icon icon">
						<img src="/icons/qr-code.png"/>
					</div>
				</div>
				<MissionInfo />
				<ConfirmMessage 
					msg={"確定放棄任務"}
					type={1} // 1: forgive
				/>
			</div>
		)
	}
}

export default connect( state => (
	{
		data: state.missionData.data[0],
		userPosition: state.user.position,
		isPosAvailable: state.user.isPosAvailable,
		distance: state.missionRoute.distance,
		min: state.missionRoute.min,
		runDistance: state.runningStatus.runDistance,
		runDuration: state.runningStatus.runDuration,
		finish: state.runningStatus.finish,
	}
))(RunPage)


const  Timer = (props) => {
	let min = Math.floor( props.time / 60 ) 
	let s = props.time % 60
	s = s >= 10 ? s : '0' + s
	min = min >= 10 ? min : '0' + min
	return (
		<div id="timer-bar">
			{`00:${min}:${s}`}
		</div>
	)
}

const RunMsg = (props) => (
	<div id="run-msg">
		<span>{`${props.runDis} / ${props.missionDis} km`}</span>
	</div>
)

const MissionInfo = (props) => (
	<div id="run-mission-info-box">
			<div>
				<div className="profile-box">
					<img src="http://img.mix-daily.com/mixdaily/upload/image/20170603/149642401063409.jpeg"/>
				</div>
				<div className="info-box">
					<span>老爺爺歡樂送</span>
					<span>Due time: 08:25</span>
				</div>

			</div>
		
		<InfoDetail />
	</div>
)

const InfoDetail = (props) => {
	return (
		<div className="info-detail-box">
			<PositionInfo />
		</div>
	)
}

const PositionInfo = (props) => {
	return (
		<div className="position-detail">
			<header>
				<img 
					src="/icons/location.png"
					className="location-icon"
				/>
				<span>養老院</span>
			</header>
			<div className="description">
				<span>text dedwed dewdw de wde ewdwe</span>
				<div className="images-board">
					<img src="https://img.mrbug.tw/pixnet/6f06c90c164585f4363d8625968a2af6.jpg" />
					<img src="https://img.mrbug.tw/pixnet/6f06c90c164585f4363d8625968a2af6.jpg" />
				</div>
			</div>
		</div>
	)
}

