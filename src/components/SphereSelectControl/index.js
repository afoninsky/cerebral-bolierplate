import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'
import FlatButton from 'material-ui/lib/flat-button'

import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'

@cerebral({
	spheres: ['spheres'],
	selected: ['selected']
})

class SphereSelectControl extends React.Component {

	getMenuItems() {
		let list = [], selectedSphere = this.props.selected.sphere
		_.each(this.props.spheres, function (v, k) {
			list.push({
				id: k,
				disabled: k === selectedSphere,
				text: v.title
			})
		})
		return list
	}

	getButtonLabel() {
		const sphere = this.props.spheres[this.props.selected.sphere] || {}
		return sphere.title || 'Select scene...'
	}

	onMenuChange(e, key, payload) {
		if(payload.disabled) { return }
		this.props.signals.sphereSelected(payload.id);
	}

	render() {
		return (
			<ToolbarGroup key={0} float="left">
				<LeftNav ref="sphereSelect" docked={false} menuItems={this.getMenuItems()}
					onChange={this.onMenuChange.bind(this)} />
				<FlatButton secondary={true} labelPosition="after"
					label={this.getButtonLabel.bind(this)()}
					onTouchTap={() => this.refs.sphereSelect.toggle() }/>
				<ToolbarSeparator />
			</ToolbarGroup>
		)
	}

}

export default SphereSelectControl;
