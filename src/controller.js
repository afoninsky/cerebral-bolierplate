import Controller from 'cerebral';
import Model from 'cerebral-baobab';

// states model
const model = Model({
	selectedResource: {
		first: {
			index: 0,
			action: 'settings'
		}
	},
	selectedSphereId: 'first',
	spheres: { // all scenes in action
		first: {
			title: 'First Scene',
			src: '/assets/scene1.jpg'
		},
		second: {
			title: 'Second Scene',
			src: '/assets/scene2.jpg'
		}
	},
	sphereResources: { // resources in defined scenes
		first: [{
			type: 'sprite',
			shape: 'circle',
			color: '#000000',
			size: 1,
			scale: 1,
			ignoreAngles: true
		}]
	}
});

// services available to signals
const services = {

}

export default new Controller(model, services);
