import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'
import FlatButton from 'material-ui/lib/flat-button'

import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'

@cerebral({
	spheresList: ['spheresList'],
	currentSphereId: ['currentSphereId']
})

class SphereSelectControl extends React.Component {

	static propTypes = {
		spheresList: React.PropTypes.object,
		currentSphereId: React.PropTypes.string
	}

	getMenuItems() {
		let list = [], selected = this.props.currentSphereId
		_.each(this.props.spheresList, function (v, k) {
			v = _.clone(v)
			_.extend(v, {
				id: k,
				disabled: k === selected
			})
			list.push(v)
		})
		return list
	}

	getButtonLabel() {
		const selectedSphere = this.props.spheresList[this.props.currentSphereId] || {}
		return selectedSphere.text || 'Select scene...'
	}

	onMenuChange(e, key, payload) {
		if(payload.disabled) { return }
		this.props.signals.sceneSelected(payload);
	}

	render() {
		return (
			<ToolbarGroup key={0} float="left">
				<LeftNav ref="leftNav" docked={false} menuItems={this.getMenuItems()}
					onChange={this.onMenuChange.bind(this)} />
				<FlatButton secondary={true} labelPosition="after"
					label={this.getButtonLabel.bind(this)()}
					onTouchTap={() => this.refs.leftNav.toggle() }/>
				<ToolbarSeparator />
			</ToolbarGroup>
		)
	}

}

export default SphereSelectControl;
