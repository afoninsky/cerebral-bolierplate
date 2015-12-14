import controller from '../../controller'

controller.signal('sphereSelected', [
	function (id, state) {
		state.set(['selected', 'sphere'], id)
	}
]);
