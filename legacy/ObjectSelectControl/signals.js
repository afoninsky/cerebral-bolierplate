import controller from '../../controller'

controller.signal('objectSelected', [
	function (id, state) {
		const selectedSphereId = state.get('selectedSphereId')
		state.set(['selectedResource', selectedSphereId, 'index'], id)
		console.log(state.get('selectedResource'))
	}
]);

controller.signal('actionSelected', [
	function (action, state) {
		const selectedSphereId = state.get('selectedSphereId')
		state.set(['selectedResource', selectedSphereId, 'action'], action)
		console.log(state.get('selectedResource'))
	}
]);
