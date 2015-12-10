import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import SelectField from 'material-ui/lib/select-field'
import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'

// import objectControl from './controls'

import ControlSettings from './controls/settings'

// settings, coordinates, rotation, opacity, background

@cerebral({
	currentObject: ['currentObject']
})

class ObjectControls extends React.Component {

	getActionControls() {
		// return objectControl[this.props.currentObject.selectedAction]
		const selectedAction = this.props.currentObject.selectedAction
		// var qwe = require('./controls/settings')
		// console.log(qwe)
		return React.createElement(ControlSettings)
	}

	render() {
		return (
				<span>
					{this.getActionControls()}
				</span>
		)
	}

}

export default ObjectControls;
