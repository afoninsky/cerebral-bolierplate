import React from 'react'
// import {Decorator as Cerebral} from 'cerebral-react';

import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'

import ObjectMenu from '../ObjectMenu'
import ObjectControls from '../ObjectControls'
import SphereSelectControl from '../SphereSelectControl'

class HeaderToolbar extends React.Component {

	onMenuItemClick(menuItem) {
		switch (menuItem) {
		case 'list-spheres':
			this.refs.leftNav.toggle()
			break;
		default:
			throw new Error('incorrect menu item: ' + menuItem)
		}
	}

	render() {
		return (
			<Toolbar>
				<ToolbarGroup key={0}>
					<SphereSelectControl />
					<ObjectMenu />
					<ObjectControls />
				</ToolbarGroup>
			</Toolbar>
		)
	}
}

export default HeaderToolbar;
