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
		const {sphere, resource} = this.props.selected
		let items = (this.props.sphereResources[sphere] || []).map(function (v, k) {
			return {
				id: k,
				text: v.title,
				selected: true
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
		const selectedIndex = this.props.selected.resource === null ? 0 : this.props.selected.resource + 1
		return (
			<DropDownMenu
					selectedIndex={selectedIndex}
					menuItems={this.getSphereComponentItems.bind(this)()}
					onChange={this.onResourceSelected.bind(this)} />
		)
	}
}

export default ResourceSelectControl;
