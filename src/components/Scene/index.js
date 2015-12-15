import React from 'react';
import ReactDOM from 'react-dom'

import { Decorator as cerebral } from 'cerebral-react'

import Scene from './src/scene'
import common from './src/common'
import Circle from './src/circleSprite'

@cerebral({
	spheres: ['spheres'],
	selected: ['selected'],
	sphereResources: ['sphereResources']
})

class Canvas extends React.Component {

  shouldComponentUpdate(props) {
		const current = this.currentSphereFromProps(this.props)
		const next = this.currentSphereFromProps(props)

		// change sphere background (redo)
		if(current.sphere.src !== next.sphere.src) {
    	this.scene.setBackground(next.sphere.src)
		}

		// highlight selected resource
		if(current.selected.resource !== next.selected.resource) {
			this.createHighlightObject(next.selected.resource)
		}

		// update selected resource property if something changed
		let selectedResource = this.resources[next.selected.resource]
		if(selectedResource) {
			selectedResource.load(next.selected.settings)
		}

    return false
  }

  componentDidMount() {
    const {sphere, resources} = this.currentSphereFromProps(this.props)

    const scene = this.scene = new Scene({
      container: this.refs.canvas,
      background: sphere.src
    })

		const onResourceClick = this.onResourceClick.bind(this)
		scene.event.on('click', function () {
			onResourceClick(null)
		})

		this.resources = resources.map(function (res, k) {
			let settings = _.pick(res, ['color', 'longitude', 'latitude', 'scale', 'angleZ', 'opacity', 'src'])
			settings.ignoreAngles = true
			settings.radius = 1
			settings.shape = 'circle'
			const obj = new Circle({
				name: res.title,
				scene: scene,
				settings: settings
			})
			scene.addObject(obj)

			obj.event.on('click', function () {
				onResourceClick(k)
			})
			return obj
		});
  }

	createHighlightObject(index) {

		if(this.highlight) {
			this.highlight.delete()
			this.highlight = null
		}

		const resource = this.resources[index]
		if(!resource) { return }

		let settings = resource.toJSON()
		settings.color = '#FF0000'
		settings.src = null
		settings.opacity = 0.3
		settings.scale *= 1.1
		settings.depth = common.const.OBJECTS_LAYER - 0.00001
		let obj = this.highlight = new Circle({
			name: 'highlight',
			scene: this.scene,
			settings: settings
		})
		resource.event.on('scale', function (value) {
			obj.scale(value * 1.1)
		})
		resource.event.on('position', function (lot, lan) {
			obj.position(lot, lan)
		})
		resource.event.on('cameralook', function () {
			obj.lookToCamera()
		})
		resource.event.on('rotate', function (axis, angle) {
			obj.rotate(axis, angle)
		})
		this.scene.addObject(obj)
	}

	onResourceClick(resourceId) {
		this.props.signals.resourceSelected({
			id: resourceId
		});
	}

  currentSphereFromProps(props) {
    return {
			selected: props.selected,
			sphere: props.spheres[props.selected.sphere] || {},
			resources: props.sphereResources[props.selected.sphere] || []
		}
  }

  render() {
		return (
      <div ref="canvas" />
    )
  }
}

export default Canvas;
