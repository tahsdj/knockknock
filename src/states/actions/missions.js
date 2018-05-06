

export function updateMissionRouteInfo(dis,min) {
	return dispatch => {
		dispatch({
			type: '@MISSION/ROUTE_INFO',
			distance: dis.toFixed(2),
			min: min
		})
	}
}

export function startMission(token='123') {
	return dispatch => {
		dispatch({
			type: '@RUN/START',
		})
	}
}

export function updateRunStatus(time, dis, finish = false) {
	return dispatch => {
		dispatch({
			type: '@RUN/UPDATE_STATUS',
			runDistance: dis,
			runDuration: time,
			finish: finish
		})
	}
}