import React from 'react'
// import {Decorator as Cerebral} from 'cerebral-react';

import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'

import FlatButton from 'material-ui/lib/flat-button'

import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'

import ObjectMenu from '../ObjectMenu'
import ObjectControls from '../ObjectControls'

class HeaderToolbar extends React.Component {

	onMenuItemClick(menuItem) {
		switch (menuItem) {
		case 'list-loaded-spheres':
			this.refs.leftNav.toggle()
			break;
		default:
			throw new Error('incorrect menu item: ' + menuItem)
		}
	}

	render() {
		return (
			<Toolbar>
				<ObjectMenu />
				<ObjectControls />
			</Toolbar>
		)
	}
}

export default HeaderToolbar;
