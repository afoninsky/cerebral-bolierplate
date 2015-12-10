import React from 'react'
import _ from 'lodash'
import { Decorator as cerebral } from 'cerebral-react'

import IconButton from 'material-ui/lib/icon-button'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'

// compas = explore
const action = {
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

const defaultAction = _.keys(action)[0]

@cerebral({
	currentObject: ['currentObject'],
	test: ['test']
})

class ObjectMenu extends React.Component {

	static propTypes = {
		currentObject: React.PropTypes.object
	}

	onMenuItemClick(item) {
		this.props.signals.objectMenuSelected({
			value: item
		});
	}

	getCurrentMenuItems() {

		const menuOptions = []
		const selectedActionName = this.props.currentObject.selectedAction
		const onMenuItemClick = this.onMenuItemClick.bind(this)
		_.each(action, function (v, k) {
			menuOptions.push(
				<MenuItem key={k}
					onItemTouchTap={() => onMenuItemClick(k)}
					onClick={() => onMenuItemClick(k)}
					primaryText={v.title}
					disabled={k === selectedActionName}
					leftIcon={v.icon}/>
			);
		}.bind(this))
		return menuOptions
	}

	getCurrentButton() {
		const selectedActionName = this.props.currentObject.selectedAction
		const activeAction = action[selectedActionName]
		if(!activeAction) {
			return <IconButton disabled={true} tooltip={action[defaultAction].tooltip}>{action[defaultAction].icon}</IconButton>
		}
		return <IconButton tooltip={activeAction.tooltip}>{activeAction.icon}</IconButton>
	}

	render() {
		return (
				<IconMenu
						iconButtonElement={this.getCurrentButton()}
						openDirection="bottom-right">
					{this.getCurrentMenuItems()}
				</IconMenu>
		)
	}

}

export default ObjectMenu;
