import controller from '../../controller'

controller.signal('sphereSelected', [
	function (input, state, output) {
		state.set('selectedSphereId', input)
	}
]);
