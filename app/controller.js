import Controller from 'cerebral';
import Model from 'cerebral-baobab';

// states model
const model = Model({
	currentObject: {
		selectedAction: 'background'
	}
});

// services available to signals
const services = {

}

export default new Controller(model, services);
