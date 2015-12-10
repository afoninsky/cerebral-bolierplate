import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import SelectField from 'material-ui/lib/select-field'
import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'

// import objectControl from './controls'

import ControlSettings from './controls/settings'


// 2do: export items from ObjectMenu ?
const controls = {
	settings:  React.createElement(require('./controls/settings')),
	coordinates:  React.createElement(require('./controls/coordinates')),
	rotation:  React.createElement(require('./controls/rotation')),
	opacity:  React.createElement(require('./controls/opacity')),
	background:  React.createElement(require('./controls/background'))
}

@cerebral({
	currentObject: ['currentObject']
})

class ObjectControls extends React.Component {

	render() {
		return (
				<span>
					{controls[this.props.currentObject.selectedAction]}
				</span>
		)
	}

}

export default ObjectControls;
