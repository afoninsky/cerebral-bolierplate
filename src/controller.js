import Controller from 'cerebral';
import Model from 'cerebral-baobab';

// states model
const model = Model({

	// currently selected sphere and resource
	selected: {
		sphere: 'first',
		resource: null
	},

	// list of spheres on scene
	spheres: {
		first: {
			title: 'First Scene',
			src: '/assets/scene1.jpg'
		},
		second: {
			title: 'Second Scene',
			src: '/assets/scene2.jpg'
		}
	},

	// list of resources assigned to scenes
	sphereResources: {
		first: [{
			title: 'Simple Sprite',
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
