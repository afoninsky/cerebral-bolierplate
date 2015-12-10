import controller from '../../controller'

controller.signal('objectMenuSelected', [
	function (input, state, output) {
		state.set('objectActiveAction', input.value)
	}
]);
