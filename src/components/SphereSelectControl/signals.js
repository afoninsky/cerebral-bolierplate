import controller from '../../controller'

controller.signal('sceneSelected', [
	function (input, state, output) {
		state.set('currentSphereId', input.id)
	}
]);
