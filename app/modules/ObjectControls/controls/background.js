import React from 'react'
import { Decorator as cerebral } from 'cerebral-react'

import TextField from 'material-ui/lib/text-field'

@cerebral({
	currentObject: ['currentObject']
})

class ObjectMenu extends React.Component {

	render() {
		return (
				<TextField hintText="Цвет или адрес изображения" />
		)
	}
}

export default ObjectMenu;
