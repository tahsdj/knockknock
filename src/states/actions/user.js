
export function updateUserPos(pos) {
	//console.log('update content: ' + JSON.stringify(pos))
	return (dispatch) => {
		dispatch({
			type: '@USER/POSITION_UPDATE',
			position: pos
		})
	} 
}