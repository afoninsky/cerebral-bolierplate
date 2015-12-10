import controller from '../../controller'

controller.signal('objectMenuSelected', [
	function (input, state, output) {
		state.set('active', input.value)
	}
]);
