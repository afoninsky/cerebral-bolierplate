import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import IconButton from 'material-ui/lib/icon-button'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'

import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import FlatButton from 'material-ui/lib/flat-button'
import LeftNav from 'material-ui/lib/left-nav'

import ObjectControls from '../ObjectControls'

// style="position: relative; display: inline-block; height: 48px; font-size: 15px; outline: none; width: 192px;"

// compas = explore
const actions = {
	settings: {
		tooltip: 'Тип объекта, его размеры',
		title: 'Тип фигуры',
		icon: React.createElement(require('material-ui/lib/svg-icons/editor/format-shapes'))
	},
	coordinates: {
		tooltip: 'Координаты на сфере (широта, высота)',
		title: 'Местоположение',
		icon: React.createElement(require('material-ui/lib/svg-icons/action/open-with'))
	},
	rotation: {
		tooltip: 'Поворот вокруг осей (X, Y или Z) или всегда смотреть на камеру',
		title: 'Разворот',
		icon: React.createElement(require('material-ui/lib/svg-icons/action/three-d-rotation'))
	},
	opacity: {
		tooltip: 'Прозрачность',
		title: 'Прозрачность',
		icon: React.createElement(require('material-ui/lib/svg-icons/action/opacity'))
	},
	background: {
		tooltip: 'Цвет или изображение',
		title: 'Фон',
		icon: React.createElement(require('material-ui/lib/svg-icons/editor/format-color-fill'))
	}
}

const defaultAction = _.keys(actions)[0]

@cerebral({
	spheres: ['spheres'],
	selectedSphereId: ['selectedSphereId'],
	selectedResource: ['selectedResource']
})

class ObjectSelectControl extends React.Component {

	static propTypes = {
		currentObject: React.PropTypes.object
	}

	getComponentListItems() {

	}

	onComponentListSelect() {

	}

	onMenuItemClick(item) {
		// this.props.signals.objectSelected(item);
		this.props.signals.actionSelected(item);
	}

	selectedResource() {
		const selectedSphereId = this.props.selectedSphereId
		return this.props.selectedResource[selectedSphereId] || {}
	}

	getComponentOptionsList() {

		const {index, action} = this.selectedResource()
		const menuOptions = []
		const onMenuItemClick = this.onMenuItemClick.bind(this)
		_.each(actions, function (v, k) {
			menuOptions.push(
				<MenuItem key={k}
					onItemTouchTap={() => onMenuItemClick(k)}
					onClick={() => onMenuItemClick(k)}
					primaryText={v.title}
					disabled={k === action}
					leftIcon={v.icon}/>
			);
		}.bind(this))
		return menuOptions
	}

	getComponentOptionButton() {

		const {index, action} = this.selectedResource()
		if(!action) {
			return <IconButton disabled={true} tooltip={actions[defaultAction].tooltip}>{actions[defaultAction].icon}</IconButton>
		}
		return <IconButton tooltip={actions[action].tooltip}>{actions[action].icon}</IconButton>
	}

	render() {
		return (
			<ToolbarGroup key={1} float="left">
				<LeftNav ref="objectSelect" docked={false} menuItems={this.getComponentListItems()}
					onChange={this.onComponentListSelect.bind(this)} />
				<FlatButton label="Object"
					onTouchTap={() => this.refs.objectSelect.toggle()}/>
					<IconMenu
							iconButtonElement={this.getComponentOptionButton()}
							openDirection="bottom-right">
						{this.getComponentOptionsList()}
					</IconMenu>
				<ObjectControls />
			</ToolbarGroup>
		)
	}

}

export default ObjectSelectControl;
