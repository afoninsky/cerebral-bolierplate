import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import SelectField from 'material-ui/lib/select-field'
import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'

const menuItems = [
	{ payload: '1', text: 'Квадрат' },
	{ payload: '2', text: 'Круг' }
]

@cerebral({
	objectActiveAction: ['objectActiveAction']
})

/*
					<SelectField menuItems={menuItems}/>

					<Slider
						name="slider2"
						onDragStop=""
						defaultValue={0.5}
						max={10}
						min={0}
						step={0.10}
						disabled={true} />

					<Toggle
						defaultToggled={true}
  					value="toggleValue1"
						onToggle="" />
 */
class ObjectControls extends React.Component {

	getActionControls() {
		console.log()
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
