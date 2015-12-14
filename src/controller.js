import Controller from 'cerebral';
import Model from 'cerebral-baobab';

// states model
const model = Model({
	currentObject: {
		selectedAction: 'settings'
	},
	currentSphereId: 'first',
	spheresList: {
		first: { text: 'First Scene', src: '/assets/scene1.jpg'},
		second: { text: 'Second Scene', src: '/assets/scene2.jpg'}
	}
});

// services available to signals
const services = {

}

export default new Controller(model, services);
