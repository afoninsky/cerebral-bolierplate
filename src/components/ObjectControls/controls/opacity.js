import React from 'react'
import { Decorator as cerebral } from 'cerebral-react'

import Slider from 'material-ui/lib/slider'

@cerebral({
	selectedResource: ['selectedResource']
})

class ObjectMenu extends React.Component {

	render() {
		return (
				<span>
					<Slider name="opacity" defaultValue={5} step={0.1} min={0} max={10} />
				</span>
		)
	}
}

export default ObjectMenu;
