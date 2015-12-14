import controller from '../../controller'

controller.signal('resourceSelected', [
	function (input, state) {
		state.set(['selected', 'resource'], input.id)
	}
]);
