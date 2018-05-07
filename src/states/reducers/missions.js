const missionsInit = {
	data: [
		{
			title: '麥當勞叔叔',
			missionType: 1, // high reward
			distance: 1.8, // km
			time: 30, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216485
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993157,
					lng: 120.222758
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '合先包現不三樣物日；部不蘭地？說進一臺布為眼發包然說所，由道少線好山所放生服，明身現我持年黃作要因被面會系果！我衣度。書調可才工將可了成步開著寶太。設這可化然減他幾就說容信夫身成或美說葉化活待；慢有位地令失公中類名那安常走在。',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '幽默莊爺爺',
			missionType: 0, // high reward
			distance: 1.2, // km
			time: 19, // minutes
			homeAddress: {
				position: {
					lat: 22.991359,
					lng: 120.216485
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993157,
					lng: 120.222858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '肯德基爺爺',
			missionType: 0, // high reward
			distance: 1.5, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '胖老爹',
			missionType: 0, // high reward
			distance: 1.5, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '千代奶奶',
			missionType: 1, // high reward
			distance: 1.9, // km
			time: 31, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '開朗陳阿姨',
			missionType: 0, // high reward
			distance: 1.5, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '鋼手奶奶',
			missionType: 1, // high reward
			distance: 1.5, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '劍潭鄭阿姨',
			missionType: 0, // high reward
			distance: 0.9, // km
			time: 11, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '活力鄭阿姨',
			missionType: 1, // high reward
			distance: 1.5, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '成大鄭阿姨',
			missionType: 0, // high reward
			distance: 1.5, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '東區鄭阿姨',
			missionType: 0, // high reward
			distance: 1.3, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '活力小廚杯杯',
			missionType: 0, // high reward
			distance: 1.8, // km
			time: 30, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '轉角鄭奶奶',
			missionType: 0, // high reward
			distance: 2.1, // km
			time: 43, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '億載金城武',
			missionType: 1, // high reward
			distance: 1.3, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		},
		{
			title: '劍潭鄭阿姨',
			missionType: 0, // high reward
			distance: 1.7, // km
			time: 23, // minutes
			homeAddress: {
				position: {
					lat: 22.991459,
					lng: 120.216435
				},
				address: '台南市東區東寧路87段666號1樓',
				photos: [
					{
						url: 'https://f.share.photo.xuite.net/apex.cheng/1f3d10c/19457049/1074779123_l.jpg'
					},
					{
						url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToVDy6BVl2Mkerjku4jmWIF-3pN0JCPkSAXDThdcQzIZyPE81'
					}
				]
			},
			serviceAddress: {
				position: {
					lat: 22.993147,
					lng: 120.228858
				},
				address: '台南市東區東寧路88段123號4樓',
				photos: [
					{
						url: 'http://static.panoramio.com/photos/original/57212090.jpg'
					},
					{
						url: 'https://2.share.photo.xuite.net/remark912/1243aae/10556780/487672130_m.jpg'
					}
				]
			},
			descriptions: '送早餐給王老先生',
			food: '黑色香蕉',
			_id: 'abc123123'
		}
	]
}



export function missionData( state = missionsInit, action ) {
	switch(action.type) {
		default:
			return state
	}
}

const missionRouteInit = {
	distance: 0,
	min:0
}

export function missionRoute( state = missionRouteInit, action ) {
	switch(action.type) {
		case '@MISSION/ROUTE_INFO':
			return {
				distance: action.distance,
				min: action.min
			}
		default:
			return state
	}
}

const runningStatusInit = {
	runDistance: 0, // km
	runDuration: 0, // min
	start: false,
	finish: false
}

export function runningStatus( state=runningStatusInit, action ) {
	switch(action.type) {
		case '@RUN/START':
			return {
				runDistance: 0, // km
				runDuration: 0, // min
				start: true,
				finish: false
			}
		case '@RUN/UPDATE_STATUS':
			return {
				runDistance: action.runDistance, // km
				runDuration: action.runDuration, // min
				start: true,
				finish: action.finish
			}
		default:
			return state
	}
}