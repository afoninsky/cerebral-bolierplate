import React from 'react'
// import {Decorator as Cerebral} from 'cerebral-react';

import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'

import SphereSelectControl from '../SphereSelectControl'
import ObjectSelectControl from '../ResourceSelectControl'

import RaisedButton from 'material-ui/lib/raised-button'

class HeaderToolbar extends React.Component {

	render() {
		return (
			<Toolbar>
				<SphereSelectControl />
				<ToolbarGroup key={1} float="left">
					<ObjectSelectControl />
				</ToolbarGroup>
				<ToolbarGroup key={2} float="right">
					<ToolbarSeparator />
					<RaisedButton label="Publish" primary={true} />
				</ToolbarGroup>
			</Toolbar>
		)
	}
}

export default HeaderToolbar;
