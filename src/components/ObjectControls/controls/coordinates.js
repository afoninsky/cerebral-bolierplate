import React from 'react'
import { Decorator as cerebral } from 'cerebral-react'

import Slider from 'material-ui/lib/slider'

@cerebral({
	currentObject: ['currentObject']
})

class ObjectMenu extends React.Component {

	render() {
		return (
				<span>
					<Slider name="longitude" defaultValue={5} step={0.1} min={0} max={10} />
					<Slider name="latitude" defaultValue={5} step={0.1} min={0} max={10} />
				</span>
		)
	}
}

export default ObjectMenu;
