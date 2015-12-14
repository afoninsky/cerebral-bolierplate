import React from 'react';
import ReactDOM from 'react-dom'

import { Decorator as cerebral } from 'cerebral-react'

import Scene from './src/scene'
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
		if(current.sphere.src !== next.sphere.src) {
    	this.scene.setBackground(next.sphere.src)
		}
		// obj.highlight(true, scene.scene)
    return false
  }

  componentDidMount() {
    const {sphere, resources} = this.currentSphereFromProps(this.props)

    const scene = this.scene = new Scene({
      container: this.refs.canvas,
      background: sphere.src
    })

		const onResourceClick = this.onResourceClick.bind(this)
		scene.onClick = function () {
			onResourceClick(null)
		}

		resources.forEach(function (res, k) {
			let settings = _.pick(res, ['color', 'longitude', 'latitude', 'scale', 'angleZ', 'opacity', 'src'])
			settings.ignoreAngles = true
			settings.radius = 1
			settings.shape = 'circle'
			const obj = new Circle({
				name: res.title,
				camera: scene.camera,
				settings: settings
			})
			obj.onClick = function () {
				onResourceClick(k)
			}
			scene.addObject(obj)
		});

  }

	onResourceClick(resourceId) {
		this.props.signals.resourceSelected({
			id: resourceId
		});
	}

  currentSphereFromProps(props) {
    return {
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
