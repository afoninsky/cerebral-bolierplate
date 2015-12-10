import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import SelectField from 'material-ui/lib/select-field'
import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'

// import objectControl from './controls'

@cerebral({
	objectActiveAction: ['objectActiveAction']
})

class ObjectControls extends React.Component {

	getActionControls() {
		console.log(this.props.objectActiveAction)
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