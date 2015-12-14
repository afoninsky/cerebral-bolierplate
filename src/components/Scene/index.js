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
    return false
  }

  componentDidMount() {
    const {sphere, resources} = this.currentSphereFromProps(this.props)
    const scene = this.scene = new Scene({
      container: this.refs.canvas,
      background: sphere.src
    })


		resources.forEach(function (res) {
			const obj = new Circle({
				name: res.title,
				camera: scene.camera,
				settings: {
					longitude: 0,
					latitude: 0,
					opacity: 1,
					scale: 1,
					ignoreAngles: true
				}
			})
			scene.addObject(obj)
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
