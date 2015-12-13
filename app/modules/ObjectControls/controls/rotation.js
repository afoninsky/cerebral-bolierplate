import React from 'react'
import { Decorator as cerebral } from 'cerebral-react'

import Slider from 'material-ui/lib/slider'
import Toggle from 'material-ui/lib/toggle'

@cerebral({
	currentObject: ['currentObject']
})

class ObjectMenu extends React.Component {

	render() {
		return (
				<span>
					<Slider name="rotateZ" defaultValue={5} step={0.1} min={0} max={10} />
					<Toggle name="alwaysOnCamera" />
					<Slider name="rotateX" defaultValue={5} step={0.1} min={0} max={10} />
					<Slider name="rotateY" defaultValue={5} step={0.1} min={0} max={10} />
				</span>
		)
	}
}

export default ObjectMenu;
