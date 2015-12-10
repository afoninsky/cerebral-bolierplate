import controller from '../../controller'

controller.signal('objectMenuSelected', [
	function (input, state, output) {
		state.set(['currentObject', 'selectedAction'], input.value)
	}
]);
