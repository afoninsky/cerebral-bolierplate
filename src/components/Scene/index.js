import React from 'react';
import ReactDOM from 'react-dom'

import { Decorator as cerebral } from 'cerebral-react'

import Scene from './src/scene'
import Circle from './src/circleSprite'

@cerebral({
	spheres: ['spheres'],
	selectedSphereId: ['selectedSphereId']
})

class Canvas extends React.Component {

  shouldComponentUpdate(props) {
    const sphere = this.currentSphereFromProps(props)
    this.scene.setBackground(sphere.src)
    return false
  }

  componentDidMount() {
    const sphere = this.currentSphereFromProps(this.props)
    this.scene = new Scene({
      container: this.refs.canvas,
      background: sphere.src
    })
  }

  currentSphereFromProps(props) {
    return props.spheres[props.selectedSphereId]
  }

  render() {
		return (
      <div ref="canvas" />
    )
  }
}

export default Canvas;
