import React from 'react';
import ReactDOM from 'react-dom'

import { Decorator as cerebral } from 'cerebral-react'

import Scene from './src/scene'
import Circle from './src/circleSprite'

@cerebral({
	spheres: ['spheres'],
	selected: ['selected']
})

class Canvas extends React.Component {

  shouldComponentUpdate(props) {
		const currentProps = this.currentSphereFromProps(this.props)
		const newProps = this.currentSphereFromProps(props)
		if(currentProps.src !== newProps.src) {
    	this.scene.setBackground(newProps.src)
		}
    return false
  }

  componentDidMount() {
		console.log(456)
    const sphere = this.currentSphereFromProps(this.props)
    this.scene = new Scene({
      container: this.refs.canvas,
      background: sphere.src
    })
  }

  currentSphereFromProps(props) {
    return props.spheres[props.selected.sphere]
  }

  render() {
		return (
      <div ref="canvas" />
    )
  }
}

export default Canvas;
