import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import './profile-page.sass'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'



class ProfilePage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div class="container">
				<div class="bg"></div>

				<div class="header">
			    	<div class="home">
			    		<Link to="/">
			    			<img class="homeic" src="https://i.imgur.com/Pwzcw3H.png" width="30px" height="30px"/>
			    		</Link>
			    	</div>
			    	<div class="profile">個人頁面</div>
				</div>

				<div class="head">
				    <div class="outer">
				    	<div class="pic"><img class="headic" src="https://i.imgur.com/6njjynv.png" width="180px" height="180px"/></div>
				    </div>
				    <div class="name"> 
				    	<div class="word">Ching-Yuan Huang</div>
				    	<img class="settic" src="https://i.imgur.com/KkKltCF.png" width="30px" height="30px"/>
				    </div>
				</div>
				
				<div class="button-container">

				    <div class="mission button">
				    	<div className="button-inner">
				    		<div className="info">
					    		<div class="icon"><img class="missionic" src="https://i.imgur.com/0gU6xP8.png" width="70px" height="70px"/></div>
					    		<div class="word">已達成 27 件任務</div>
					    	</div>
					    	<div class="more"><img class="moreic" src="https://i.imgur.com/WSn07nC.png" width="30px"/></div>
				    	</div>
				    </div>

				    <div class="points button">
				   		<div className="button-inner">
				    		<div className="info">
						    	<div class="icon"><img class="pointsic" src="https://i.imgur.com/xlcj1nS.png" width="70px" height="70px"/></div>
						    	<div class="word">已累積 2070 點</div>
							</div>
						</div>
				    	<div class="more">
				    		<Link to="/rewards">
				    			<img class="moreic" src="https://i.imgur.com/WSn07nC.png" width="30px"/>
				    		</Link>
				    	</div>
				    </div>

				    <div class="distance button">
				    	<div className="button-inner">
				    		<div className="info">
						    	<div class="icon"><img class="distanceic" src="https://i.imgur.com/XRlKd60.png" width="70px" height="70px"/></div>
						    	<div class="word">已達成128.3公里</div>
						    </div>
						</div>
				    	<div class="more"><img class="moreic" src="https://i.imgur.com/WSn07nC.png" width="30px"/></div>
				    </div>

				</div>
			</div>
		)
	}
}

export default connect( state => (
	{
		data: state.missionData.data[0],
		userPosition: {
			lat: 22.988772,
			lng: 120.224167
		}
	}
))(ProfilePage)

/*
<div class="button">

    <div class="mission">
    	<div class="icon"><img class="missionic" src="https://i.imgur.com/0gU6xP8.png" width="70px" height="70px"/></div>
    	<div class="word">已達成 27 件任務</div>
    	<div class="more"><img class="moreic" src="https://i.imgur.com/WSn07nC.png" width="30px"/></div>
    </div>

    <div class="points">
    	<div class="icon"><img class="pointsic" src="https://i.imgur.com/xlcj1nS.png" width="70px" height="70px"/></div>
    	<div class="word">已累積 2070 點</div>
    	<div class="more"><img class="moreic" src="https://i.imgur.com/WSn07nC.png" width="30px"/></div>
    </div>

    <div class="distance">
    	<div class="icon"><img class="distanceic" src="https://i.imgur.com/XRlKd60.png" width="70px" height="70px"/></div>
    	<div class="word">已達成128.3公里</div>
    	<div class="more"><img class="moreic" src="https://i.imgur.com/WSn07nC.png" width="30px"/></div>
    </div>

</div>

*/