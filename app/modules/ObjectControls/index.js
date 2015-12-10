import React from 'react'
import _ from 'lodash'

import SelectField from 'material-ui/lib/select-field'
import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'

const menuItems = [
	{ payload: '1', text: 'Квадрат' },
	{ payload: '2', text: 'Круг' }
]

class ObjectControls extends React.Component {

	render() {
		return (
				<span>

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
				</span>
		)
	}

}

export default ObjectControls;
