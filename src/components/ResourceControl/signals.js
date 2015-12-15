import controller from '../../controller'

controller.signal('resourcePropertyChanged', [
	function (input, state) {
		console.log(input)
		state.set(['selected', 'settings', input.key], input.value)
	}
]);
