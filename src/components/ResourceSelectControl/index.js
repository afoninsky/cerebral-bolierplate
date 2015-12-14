import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import DropDownMenu from 'material-ui/lib/drop-down-menu'

// style="position: relative; display: inline-block; height: 48px; font-size: 15px; outline: none; width: 192px;"

@cerebral({
	selected: ['selected'],
	sphereResources: ['sphereResources']
})

class ResourceSelectControl extends React.Component {

	getSphereComponentItems() {
		const {sphere} = this.props.selected
		let items = (this.props.sphereResources[sphere] || []).map(function (v, k) {
			return {
				id: k,
				text: v.title
			}
		})
		items.unshift({
			id: null,
			text: 'Select resource...'
		})
		return items
	}
	onResourceSelected(event, index, item) {
		this.props.signals.resourceSelected(item)
	}

	render() {
		return (
			<DropDownMenu menuItems={this.getSphereComponentItems.bind(this)()}
					onChange={this.onResourceSelected.bind(this)} />
		)
	}
}

export default ResourceSelectControl;
