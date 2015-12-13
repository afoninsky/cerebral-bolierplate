import React from 'react'
import { Decorator as cerebral } from 'cerebral-react'

import TextField from 'material-ui/lib/text-field'
import ColorPicker from 'react-color'

// http://casesandberg.github.io/react-color/#usage-install
@cerebral({
	currentObject: ['currentObject']
})

class ObjectMenu extends React.Component {

	render() {
		return (
			<ColorPicker type="slider" />
		)
	}
}

export default ObjectMenu;
