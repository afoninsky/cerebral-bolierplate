import React from 'react'
import { Decorator as cerebral } from 'cerebral-react'

@cerebral({
	currentObject: ['currentObject']
})

class ObjectMenu extends React.Component {

	render() {
		return (
				<span>|{this.props.currentObject.selectedAction}|</span>
		)
	}
}

export default ObjectMenu;
