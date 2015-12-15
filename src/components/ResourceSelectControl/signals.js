import controller from '../../controller'

controller.signal('resourceSelected', [
	function (input, state) {
		const resourceId = input.id
		const stateObj = state.get()
		const settings = stateObj.sphereResources[stateObj.selected.sphere][resourceId]

		state.set(['selected', 'resource'], resourceId)
		state.set(['selected', 'settings'], settings)
	}
]);
