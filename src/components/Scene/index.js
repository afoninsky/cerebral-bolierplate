import React from 'react';
import ReactDOM from 'react-dom'

import Scene from './src/scene'
import Circle from './src/circleSprite'

class Canvas extends React.Component {

  componentDidMount() {
    // console.log(document.getElementsByTagName('canvas'))
    // google:  texture bound to texture unit 0 is not renderable
    this.scene = new Scene({
      container: this.refs.canvas,
      background: '/assets/scene.jpg'
    })
  }

  render() {
		return (
      <div ref="canvas" />
    )
  }
}

export default Canvas;
