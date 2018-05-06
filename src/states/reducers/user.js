

const userInit = {
	position: {
		lat: 0,
		lng: 0
	},
	isPosAvailable: false
}

export function user( state = userInit, action ) {
	switch(action.type) {
		case '@USER/POSITION_UPDATE':
			return {
				position: action.position,
				isPosAvailable: true
			}
		default:
			return state
	}
}