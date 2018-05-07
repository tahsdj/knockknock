import React from 'react'
import './reward-page.sass'
import {connect} from 'react-redux'
import Swiper from 'swiper/dist/js/swiper.js'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import ConfirmMessage from 'components/route-page/confirm-message.jsx'


class RewardPage extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		const mySwiper = new Swiper('.reward-head-container')
	}
	render() {
		return (
			<div class="reward-container">
			  <div class="bg"></div>
			  <div class="header">
			    <div class="home">
			    	<Link to="/">
			    		<img class="homeic" src="https://i.imgur.com/Pwzcw3H.png" width="30px" height="30px"/>
			    	</Link>
			    </div>
			    <div class="title">獎勵兌換</div>
			  </div>
			  <div class="reward-head-container">
			  	<div className="swiper-wrapper">
				    <div class="pic swiper-slide"><img class="figic" src="https://i.imgur.com/XBXTYeg.png" /></div>
				    <div class="pic swiper-slide"><img class="figic" src="https://i.imgur.com/fDgjiz3.png" /></div>
				    <div class="pic swiper-slide"><img class="figic" src="https://i.imgur.com/ygsKwTz.png" /></div>
				</div>
			  </div>
			  <div class="bottom">
			    <div class="tpoints"><img class="figic" src="https://i.imgur.com/Fp1XPOj.png" width="30px"/></div>
			    <div class="tpay">2070</div>
			  </div>
			  <div class="button">
			  	<a href="#mission-confirm">
				    <div class="drink1 item">
				      <div class="icon"><img class="drink1ic" src="https://i.imgur.com/VsXn9Kh.png" width="70px" height="70px"/></div>
				      <div class="word">卡布奇諾</div>
				      <div class="points"><img class="figic" src="https://i.imgur.com/Fp1XPOj.png" width="30px"/></div>
				      <div class="pay">150</div>
				    </div>
			    </a>
			    <a href="#mission-confirm">
				    <div class="drink2 item">
				      <div class="icon"><img class="drink2sic" src="https://i.imgur.com/2uiHqWL.png" width="70px" height="70px"/></div>
				      <div class="word">哥倫布拿鐵</div>
				      <div class="points"><img class="figic" src="https://i.imgur.com/Fp1XPOj.png" width="30px"/></div>
				      <div class="pay">200</div>
				    </div>
			    </a>
			    <a href="#mission-confirm">
				    <div class="drink3 item">
				      <div class="icon"><img class="drink3sic" src="https://i.imgur.com/fN8cPlg.png" width="70px" height="70px"/></div>
				      <div class="word">美式咖啡</div>
				      <div class="points"><img class="figic" src="https://i.imgur.com/Fp1XPOj.png" width="30px"/></div>
				      <div class="pay">250</div>
				    </div>
			    </a>
			  </div>
			  <ConfirmMessage 
			  	msg={'確定兌換此商品?'}
				type={0}
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
		min: state.missionRoute.min
	}
))(RewardPage)