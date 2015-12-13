import React from 'react'
// import {Decorator as Cerebral} from 'cerebral-react';

import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'

import ObjectMenu from '../ObjectMenu'
import ObjectControls from '../ObjectControls'
import SphereSelectControl from '../SphereSelectControl'

import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button'

import LeftNav from 'material-ui/lib/left-nav'

class HeaderToolbar extends React.Component {

	onMenuItemClick(menuItem) {
		switch (menuItem) {
		case 'list-spheres':
			this.refs.sphereSelect.toggle()
			break;
		case 'list-objects':
			this.refs.objectSelect.toggle()
			break;
		default:
			throw new Error('incorrect menu item: ' + menuItem)
		}
	}

	render() {
		return (
			<Toolbar>
				<ToolbarGroup key={0} float="left">
					<LeftNav ref="sphereSelect" docked={false} menuItems={[]} />
					<FlatButton label="Sphere"
						onTouchTap={() => this.onMenuItemClick.bind(this)('list-spheres')}/>
					<ToolbarSeparator />
				</ToolbarGroup>
				<ToolbarGroup key={1} float="left">
					<LeftNav ref="objectSelect" docked={false} openRight={true} menuItems={[]} />
					<FlatButton label="Object"
						onTouchTap={() => this.onMenuItemClick.bind(this)('list-objects')}/>
					<ObjectMenu />
					<ObjectControls />
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

// import React from 'react';
// import IconMenu from 'material-ui/lib/menus/icon-menu';
// import IconButton from 'material-ui/lib/icon-button';
// import FontIcon from 'material-ui/lib/font-icon';
// import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/lib/menus/menu-item';
// import DropDownMenu from 'material-ui/lib/drop-down-menu';
// import RaisedButton from 'material-ui/lib/raised-button';
// import Toolbar from 'material-ui/lib/toolbar/toolbar';
// import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
// import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
// import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
//
// const menuItems = [
//   {payload: '1', text: 'All Broadcasts'},
//   {payload: '2', text: 'All Voice'},
//   {payload: '3', text: 'All Text'},
//   {payload: '4', text: 'Complete Voice'},
//   {payload: '5', text: 'Complete Text'},
//   {payload: '6', text: 'Active Voice'},
//   {payload: '7', text: 'Active Text'},
// ];
//
// const ToolbarsExamplesSimple = React.createClass({
//   render() {
//     return (
//       <Toolbar>
//         <ToolbarGroup firstChild={true} float="left">
//           <DropDownMenu menuItems={menuItems} />
//         </ToolbarGroup>
//         <ToolbarGroup float="right">
//           <ToolbarTitle text="Options" />
//           <FontIcon className="muidocs-icon-custom-sort" />
//           <IconMenu iconButtonElement={
//             <IconButton touch={true}>
//               <NavigationExpandMoreIcon />
//             </IconButton>
//           }>
//             <MenuItem primaryText="Download" />
//             <MenuItem primaryText="More Info" />
//           </IconMenu>
//           <ToolbarSeparator />
//           <RaisedButton label="Create Broadcast" primary={true} />
//         </ToolbarGroup>
//       </Toolbar>
//     );
//   },
// });
//
// export default ToolbarsExamplesSimple;
