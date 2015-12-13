import React from 'react'
import { Decorator as cerebral } from 'cerebral-react'

import DropDownMenu from 'material-ui/lib/drop-down-menu'
import Slider from 'material-ui/lib/slider'

const menuItems = [
	{ payload: 'square', text: 'Квадрат' },
	{ payload: 'circle', text: 'Круг' }
]

@cerebral({
	currentObject: ['currentObject']
})

class ObjectMenu extends React.Component {

	render() {
		return (
			<span>
				<DropDownMenu menuItems={menuItems} />
				<Slider name="size" defaultValue={5} step={0.1} min={0} max={10} />
			</span>
		)
	}
}

export default ObjectMenu;
