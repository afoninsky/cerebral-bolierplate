import Controller from 'cerebral';
import Model from 'cerebral-baobab';

// states model
const model = Model({

	// currently selected sphere and resource
	selected: {
		sphere: 'first',
		resource: null,
		settings: {}
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
			// type: 'sprite',
			// shape: 'circle',
			// color: '#FFFFFF',
			scale: 1,
			longitude: 0,
			latitude: 0,
			// angleZ: 0,
			opacity: 1,
			src: '/assets/sprite.png'
		}]
	}
});

// services available to signals
const services = {

}

export default new Controller(model, services);
