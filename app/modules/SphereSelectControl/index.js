import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menu/menu-item'
import FlatButton from 'material-ui/lib/flat-button'

class SphereSelectControl extends React.Component {

	onMenuItemClick(action) {
		this.refs.leftNav.toggle()
	}

	render() {
		return (
			<span>
				<LeftNav ref="leftNav" docked={false} menuItems={[]} />
				<FlatButton secondary={true} label="Сферы" labelPosition="after"
					onTouchTap={() => this.onMenuItemClick.bind(this)('list-spheres')}/>
			</span>
		)
	}

}

export default SphereSelectControl;
